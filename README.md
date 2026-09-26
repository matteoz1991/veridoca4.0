# Veridoca — Swedish Consumer Guide

Veridoca is a consumer guide site about broadband (bredband), mobile subscriptions (mobilabonnemang), and home insurance (hemförsäkring) in Sweden. The site is built with Next.js and deployed as a static site on Cloudflare Pages.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Font:** Geist (via Google Fonts)
- **Content:** Markdown with gray-matter
- **Deployment:** Cloudflare Pages (static export)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This will generate a static export in the `out/` directory, ready for deployment on Cloudflare Pages.

## Deploying to Cloudflare Pages

### Initial Setup

1. **Connect Your Git Repository**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository and authorize Cloudflare

2. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variables:** None required (unless you add features later)

3. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your site automatically on every push to the main branch

### Custom Domain Setup

To point `veridoca.com` to your Cloudflare Pages site:

1. **In Cloudflare Pages:**
   - Go to your project → Settings → Custom domains
   - Click "Set up a custom domain"
   - Enter `veridoca.com`

2. **In Hostinger DNS (or wherever veridoca.com DNS is managed):**
   - Add a CNAME record:
     - **Name:** `@` (or leave blank for root domain)
     - **Target:** `your-project-name.pages.dev` (shown in Cloudflare Pages)
   - For non-www to work on some DNS providers, you may need an ALIAS or ANAME record instead of CNAME
   - Add a CNAME for `www`:
     - **Name:** `www`
     - **Target:** `your-project-name.pages.dev`

3. **Wait for DNS propagation** (can take up to 24 hours, but usually much faster)

4. **Enable "Always Use HTTPS"** in Cloudflare Pages settings

**Note:** The domain currently has no MX records, so email won't work until you configure email hosting.

## Updating Affiliate Links

All affiliate redirects are configured in `/public/_redirects`. When you join Adtraction, Adrecord, or Addrevenue:

1. Open `public/_redirects`
2. Replace the placeholder URLs with your actual tracking URLs from the affiliate networks
3. Deploy the changes

The affiliate program data is stored in `src/content/affiliate-programs.json`.

## Content Structure

All guide content is written in Markdown and stored in `src/content/`:

- `bredband.md` — Broadband guide
- `byta-bredbandsleverantor.md` — How to switch broadband provider
- `mobilabonnemang.md` — Mobile subscription guide
- `mobilabonnemang-billigt.md` — Finding cheap mobile plans
- `hemforsakring.md` — Home insurance guide (informational only, no advice)
- `om-oss.md` — About page (TODO: Add owner bio)
- `reklam.md` — Advertising disclosure
- `kontakt.md` — Contact page (TODO: Add email address)
- `integritet.md` — Privacy policy (GDPR)

### Editing Content

To update a guide:

1. Open the relevant `.md` file in `src/content/`
2. Edit the content (the text below the `---` frontmatter)
3. Update the `lastUpdated` date in the frontmatter
4. Commit and push — the site will rebuild automatically

**Content Guidelines:**

- Write in natural Swedish
- Do NOT invent facts, prices, or statistics
- Mark placeholder information with `TODO: fyll i ...`
- Update the `lastUpdated` date whenever you edit content
- For insurance content: remain strictly informational, no advice or recommendations

## TODOs Before Launch

### Owner Must Complete:

1. **About Page (`src/content/om-oss.md`)**
   - Add your name, background, and why you started the site

2. **Contact Page (`src/content/kontakt.md`)**
   - Add a contact email address
   - Configure MX records in DNS if you want to receive email at that address

3. **Affiliate URLs (`public/_redirects`)**
   - Join Adtraction, Adrecord, and Addrevenue
   - Replace all placeholder URLs with real tracking URLs

4. **Content Review**
   - Review all guides and fill in TODOs with current information
   - Add real examples, prices (if appropriate), and your own insights
   - Verify that all statements are accurate

5. **Privacy Policy (`src/content/integritet.md`)**
   - Fill in your name/company name as "personuppgiftsansvarig" (data controller)

## Site Pages

- `/` — Home page introducing the three areas
- `/bredband/` — Broadband guide
- `/bredband/byta-leverantor/` — Switching broadband provider
- `/mobilabonnemang/` — Mobile subscription guide
- `/mobilabonnemang/billigt/` — Finding cheap mobile plans
- `/forsakring/hemforsakring/` — Home insurance guide (informational only)
- `/om-oss/` — About page
- `/reklam/` — Advertising disclosure
- `/kontakt/` — Contact page
- `/integritet/` — Privacy policy

## License

Proprietary — all content and code are owned by the site operator.
