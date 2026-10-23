# Moonrise House / Joshua Steichen — Safe Website Migration

Prepared October 23, 2026. This file is a checklist, **not confirmation that domains have been switched**.

## Source branches
- Business site: moonrise-cloudflare — copies the former business main branch without the personal-domain CNAME and with business-domain canonical links.
- Personal site: josh-personal-restore — restores the original personal homepage, video, photography, code, and images from backup-original-website; adds redirect stubs for legacy pitch links.
- Existing main and backup-original-website branches are preserved. Do not delete them.

## Phase 1: deploy and test the business site
1. Cloudflare dashboard → Compute → Workers & Pages → Create application → Pages → Connect to Git.
2. Connect the repository: steichenjosh-dotcom/Joshua-Steichen.
3. **Select production branch: moonrise-cloudflare (NOT main).**
4. Framework: None; build command: blank or exit 0; site root/build output directory: . (repository root).
5. Deploy, then open the *actual* pages.dev URL Cloudflare provides.
6. Test Home, Story, Work, Services, Contact, Moonrise Living, five concept sites, and the existing client pitch previews.
7. Test the real Formspree submission from the temporary site, and verify email delivery. Do not assume it works until verified.
8. Confirm all images, navigation, and mobile layouts before adding production domains.

## Phase 2: connect business domain
1. Cloudflare Pages → project → Custom domains. Add www.moonrisehouse.com and moonrisehouse.com.
2. Keep www as the canonical version. Configure apex → www redirect using a Cloudflare Redirect Rule (Pages static _redirects cannot match hostnames).
3. **Do not remove or overwrite MX, SPF, DKIM, DMARC, or domain-verification DNS records** used for business mail. Verify current records first.
4. Confirm HTTPS and test the full website, Formspree and all existing client demo addresses at the business domain.

## Phase 3: restore personal domain — only when Phase 2 works
1. Open https://github.com/steichenjosh-dotcom/Joshua-Steichen/settings/pages
2. Choose Source: Deploy from a branch.
3. Choose branch: josh-personal-restore; folder: /(root); Save.
4. Keep custom domain: www.joshuasteichen.com. Verify HTTPS.
5. Check personal Home, video demo reel, photography gallery, and contact links.
6. Test old emailed demo URLs: /el-dogo-preview/, /healing-touch-preview/, /systems-plumbing-preview/, /hero-headquarters-preview/, /otra-preview/, and /moonrise-living/. They should lead to equivalent paths on www.moonrisehouse.com. The old /webdesign/ microsite should redirect to the new Moonrise Living business portfolio.
7. Check nested old Moonrise Living concept URLs; a personal-domain 404 fallback has been prepared to redirect these.
8. Note: fallback HTML/JS redirects are not server-side HTTP 301 redirects. Later, edge-level redirects can improve SEO if needed.

## Rules for future updates
- Business code updates go to branch moonrise-cloudflare.
- Personal site code updates go to branch josh-personal-restore.
- Keep legacy main and backup-original-website untouched for rollback.
- Do not change live DNS or GitHub Pages publishing source until tested.
- Do not distribute new marketing URLs or resume sales outreach until the new domain and business email are verified.

## Remaining manual/Work-mode actions
Cloudflare sign-in/authorization; Pages project creation; GitHub app authorization in Cloudflare; deployment; domain/DNS/HTTPS setup; GitHub Pages publishing-source change; real site QA. These cannot be performed using only the connected GitHub repository tools.
