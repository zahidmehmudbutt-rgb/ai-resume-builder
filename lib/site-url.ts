/**
 * The canonical public origin for this deployment.
 *
 * Previously each caller inlined its own fallback, which drifted: robots.ts and
 * sitemap.ts pointed at a domain from before the project was renamed, and
 * layout.tsx fell back to localhost — so in production every Open Graph image
 * URL resolved to http://localhost:3000 and no crawler could fetch it.
 *
 * Resolution order, most to least specific:
 *   1. NEXT_PUBLIC_APP_URL          — explicit override
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the stable production domain
 *   3. VERCEL_URL                    — this specific deployment
 *   4. localhost                     — local development
 *
 * Steps 2 and 3 are injected by Vercel automatically, so a correct absolute URL
 * is produced even when nothing is configured.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;

  const deployment = process.env.VERCEL_URL;
  if (deployment) return `https://${deployment}`;

  return "http://localhost:3000";
}
