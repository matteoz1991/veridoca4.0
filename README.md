# Veridoca 4.0

Swedish consumer guide for broadband, mobile subscriptions, and home insurance.

## Prerequisites

- Node.js 18+ (Node 22 recommended)
- npm 10+

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Building

```bash
npm run build
```

Generates static export in `out/` directory.

## Deployment

### Cloudflare Pages (Production)
1. Connect repository
2. Build command: `npm run build`
3. Output directory: `out`
4. Node version: 22

### Vercel (Preview)
Configured via `vercel.json` for automatic PR previews.

## Stack

- Next.js 16.2.9 (App Router, static export)
- React 19
- Tailwind CSS 4
- TypeScript
- Lora + Inter fonts
