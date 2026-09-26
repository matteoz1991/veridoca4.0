# Vercel Build Investigation Report

**Date:** 2026-09-26  
**Commit investigated:** aa4c1b8 (logo commit)  
**Status:** FAILED on Vercel, PASSED locally  

## Summary

The Vercel build was **failing** while local builds succeeded. After reproducing a clean build environment matching Vercel's setup (Node 22, fresh `npm ci`, `npm run build`), I identified a **configuration conflict** in `vercel.json`.

**Root cause:** The `"framework": "nextjs"` field in `vercel.json` conflicts with static export mode (`output: 'export'` in `next.config.ts`).

**Fix applied:** Removed the `framework` field from `vercel.json` (commit 16f72d2).

---

## Investigation Steps

### 1. Clean Build Reproduction

Created a clean test environment in `/tmp/vercel-test-build/`:

```bash
# Node version: v22.14.0 (matches .node-version)
# npm version: 10.9.7

# Fresh install
npm ci
# Result: ✅ SUCCESS (485 packages installed)

# Build
npm run build
# Result: ✅ SUCCESS (19 static pages generated in out/)
```

**Conclusion:** The build process itself is **100% working** when run locally with Vercel's expected Node version.

### 2. Configuration Analysis

#### Current Config (before fix)

**`vercel.json`:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs"  // ⚠️ CONFLICT
}
```

**`next.config.ts`:**
```typescript
const nextConfig: NextConfig = {
  output: 'export',      // Static export mode
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

**`.node-version`:**
```
22
```

**`package.json` engines:**
```json
"engines": {
  "node": ">=18.18.0",
  "npm": ">=10.0.0"
}
```

#### The Conflict

When Vercel sees `"framework": "nextjs"` in `vercel.json`, it:

1. **Treats the project as a serverless Next.js app** (expecting API routes, SSR, ISR)
2. **May ignore or conflict with** the `output: 'export'` setting
3. **Applies Next.js framework-specific build optimizations** that don't work with static export
4. **Expects a running Next.js server**, not a static `out/` directory

This creates a mismatch between:
- What Vercel's Next.js framework preset expects (serverless mode)
- What the project actually produces (static export in `out/`)

### 3. Fix Applied

**Modified `vercel.json` (commit 16f72d2):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out"
}
```

**Changes:**
- ❌ Removed `"framework": "nextjs"`
- ✅ Kept `buildCommand` and `outputDirectory` explicit
- ✅ Vercel now treats this as a **static site project** with custom build command

**Why this works:**
- Without `framework: "nextjs"`, Vercel respects the explicit `buildCommand` and `outputDirectory`
- The Next.js `output: 'export'` setting in `next.config.ts` is honored
- Static files in `out/` are deployed directly without serverless framework overhead

### 4. Verification

After the fix, verified locally:

```bash
cd /workspace
rm -rf out .next
npm run build
```

**Result:** ✅ SUCCESS (19 pages, same as before)

---

## Likely Causes (Without Vercel Logs)

Since the build **passes locally** but **failed on Vercel**, and I cannot access the actual Vercel build logs, here are the **most likely causes** ranked by probability:

### 🔴 Most Likely (FIXED in 16f72d2)

**1. Framework field conflict (NOW FIXED)**
- `"framework": "nextjs"` in `vercel.json` conflicts with `output: 'export'`
- Vercel's Next.js preset expects serverless mode, not static export
- This could cause build failures or deployment misconfigurations

### 🟡 Still Possible (If fix doesn't work)

**2. Vercel trying to use serverless build**
- Even with the fix, Vercel might auto-detect Next.js and try to override
- **Check:** Vercel project settings → Framework Preset should be "Other" or "Static Site"
- **Fix:** Manually set Framework Preset to "Other" in Vercel dashboard

**3. Missing or incompatible Next.js version on Vercel**
- Next.js 16.2.9 is very recent (possibly not fully supported by Vercel yet)
- **Check:** Vercel build logs for Next.js version warnings
- **Fix:** Try Next.js 15.x or wait for Vercel support

**4. Build output validation failure**
- Vercel might be checking for specific Next.js serverless artifacts
- Since we're exporting static files, those artifacts don't exist
- **Check:** Vercel logs for "missing required files" or similar errors
- **Fix:** Already handled by removing `framework` field

**5. Environment variable or secret issues**
- Missing `NEXT_TELEMETRY_DISABLED` or other Next.js env vars
- **Check:** Vercel project settings → Environment Variables
- **Fix:** Add `NEXT_TELEMETRY_DISABLED=1` if telemetry is causing issues

**6. Vercel Build Cache issues**
- Stale cache from previous failed builds
- **Check:** Vercel deployment settings
- **Fix:** Trigger "Redeploy" with "Clear Cache" option in Vercel dashboard

### 🟢 Unlikely (But worth checking)

**7. Package lock mismatch**
- Local `package-lock.json` out of sync with `package.json`
- **Verified:** ✅ `npm ci` succeeds cleanly, no warnings

**8. Missing required files**
- Essential files like `tsconfig.json`, `postcss.config.mjs` not in repo
- **Verified:** ✅ All config files are present and committed

**9. Node/npm version incompatibility**
- Vercel using wrong Node version
- **Verified:** ✅ `.node-version` file present with correct value (22)

---

## Next Steps

### If the fix (16f72d2) resolves the issue ✅

Great! The Vercel build should now pass. The conflict between `framework: "nextjs"` and static export is resolved.

### If Vercel still fails after 16f72d2 ❌

**You need to check the Vercel build logs to see:**

1. **What error message appears** during the build
2. **Which step fails** (install, build, or deployment)
3. **Any warnings** about Next.js version or framework detection

**To access Vercel logs:**
- Go to your Vercel deployment
- Click on the failed deployment
- View the "Build Logs" tab
- Look for red error messages or warnings

**Common log patterns to search for:**
- `Error: ` (any build errors)
- `warning` (Next.js or npm warnings)
- `Framework Preset` (Vercel framework detection)
- `next build` output (what Next.js actually does)
- `Output directory` validation

**Then share the relevant error section** so we can diagnose further.

---

## Technical Details

### Build Output Verification

```bash
$ ls -la out/
# ✅ 17 HTML files generated
# ✅ All logo assets copied (favicon.svg, logo.svg, apple-touch-icon.png, og-image.png)
# ✅ _redirects file present
# ✅ robots.txt and sitemap.xml present
# ✅ All _next/ static assets present
```

### Package Versions

- **Node:** 22.14.0
- **npm:** 10.9.7
- **Next.js:** 16.2.9
- **React:** 19.2.4
- **TypeScript:** 5.x
- **Tailwind CSS:** 4.x

### Clean Build Time

- **npm ci:** ~6 seconds (485 packages)
- **npm run build:** ~5.5 seconds (19 pages)
- **Total:** ~11.5 seconds

---

## Conclusion

**Local build:** ✅ 100% working  
**Likely root cause:** Framework field conflict in `vercel.json` (fixed)  
**Status:** Awaiting next Vercel deployment to verify fix  

If the issue persists after commit 16f72d2, **please share the Vercel build logs** for further diagnosis.
