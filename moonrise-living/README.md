# Moonrise Living — Interactive Website Portfolio (v2)
By Moonrise House, LLC · October 2026

## Five fictional portfolio examples

- Showcase + launch prices: https://www.moonrisehouse.com/moonrise-living/
- Mallow + Moss — pet spa concept + grooming estimator: https://www.moonrisehouse.com/moonrise-living/mallow-moss/
- Form Nine — automotive concept + four-package detailing service selector: https://www.moonrisehouse.com/moonrise-living/form-nine/
- Sable & Soft — wellness concept + ritual finder: https://www.moonrisehouse.com/moonrise-living/sable-soft/
- Paper & Pleat — softly colored, bold-typography fashion concept + interactive lookbook: https://www.moonrisehouse.com/moonrise-living/paper-pleat/
- Nookside Kitchen — neighborhood restaurant concept + 17-item text menu, dietary-aware dish finder, online-order and reservation link demos: https://www.moonrisehouse.com/moonrise-living/nookside-kitchen/

All five featured brands are **fictional**, not actual clients or operating businesses. There is no real checkout or booking. The pet prices and wellness recommendations are illustrative; the automotive package prices, timings, and inclusions are examples, not actual offers. Never present these concepts as completed paid client engagements.

The legacy /moonrise-living/el-dogo/ page now redirects to fictional Mallow + Moss. The separate original /el-dogo-preview/ pitch page remains **unchanged**, but is not promoted in the public Moonrise Living portfolio.

## File map

- shared/living.css — responsive styling, typography, visual themes and lightweight animations.
- shared/living.js — navigation, reveals, accessibility and configurable grooming estimator. The isConcept flag makes copied summaries explicitly fictional.
- mallow-moss/index.html — client configuration using shared styling/behavior.
- form-nine/index.html — premium automotive styling + four-button package selector with dynamic sample pricing, service details, included items and duration.
- sable-soft/index.html — wellness styling + local ritual finder.
- paper-pleat/index.html — fashion styling + local lookbook UI; updated to high-contrast black/cream with stronger display type.
- nookside-kitchen/index.html — neighborhood restaurant styling, three featured dishes, 17 sample menu items, a dietary-aware dish recommender, and ordering/reservation CTAs with safe fictional fallbacks.
- index.html — portfolio home, four links, introductory pricing.

The non-pet sites presently use unique, standalone CSS and JS to demonstrate very different art direction. Future efficiencies will come from extracting repeated functions and refining the handoff process; these are portfolio prototypes, not a one-click website factory.

## Proposed introductory offers (first 3 paying websites)

- Starter — $595: responsive single page, up to five sections, contact option, restrained motion.
- Business — $995: up to three pages, more tailored design, SEO basics, one simple interaction.
- Living — $1,495: premium cinematic styling, modest motion and one custom lightweight interactive feature.

Use 50% upfront deposit, two consolidated revision rounds, a written page/feature/content scope, and final payment before handoff. Domain, hosting, ongoing maintenance, asset licensing, photography/video production, ecommerce and external integrations are additional. Do not promise dynamic booking, full online store, real AI agent or advanced custom software at those prices. Track production hours so introductory pricing does not erode profit.

## Restaurant ordering and reservation link integration

1. Before going live, get the restaurant's ACTUAL guest-facing pickup and delivery URLs from the owner (Toast, Square, ChowNow, etc). Never guess URLs.
2. Edit the Nookside template's inline JavaScript near its end: `const ORDER_LINKS={pickup:"",delivery:""};`.
3. Put the verified HTTPS URLs inside the quoted strings. Leave a channel blank if not supported by the restaurant; customize or remove its button for production instead of implying the option is available.
4. When configured, all buttons labeled Order Pickup / Order Delivery open the correct existing ordering page in a new tab. If blank, the fictional demo buttons open an informative modal and make NO order.
5. Set the Nookside file's `const RESERVATION_LINK = "";` to the restaurant's verified booking page (e.g., their actual OpenTable, Resy, or Toast Tables URL). With no URL configured, the button opens an honest demo notice — no tables have been held, no availability checked. Do not fabricate times, providers or booking links.
6. Replace the fictional menu photos, pricing, ingredients, vegetarian/vegan tags and brand name with approved assets. The finder does not validate allergies, cross-contact or availability; add a disclaimer and confirm all menu dietary claims with the owner.
7. Test on a real phone, complete a test checkout through the real provider, and get the owner's approval before launch.

**Important:** No custom cart, payment processing, POS integration, backend, or chargeable monthly API calls are needed for the link-out implementation. Building a true checkout would be a separate paid project.

## Changes requested in review

- Mallow + Moss: header logo smaller with more padding; straightforward buttons; Large Dog option; professional coat options; smaller hero badge repositioned in the lower-left negative space away from faces.
- Form Nine: removed the image simulator. The four-package selector shows sample inclusions, starting prices and illustrative appointment duration.
- Sable & Soft: no changes.
- Paper & Pleat: preserved the strong editorial type while softening high-saturation backgrounds to muted sea glass, evergreen, ivory, clay and charcoal.
- Nookside Kitchen: preserved three featured dishes; added a 17-item four-category text menu and a reservation section with provider-ready button. Both ordering and booking are fictional demonstrations until verified client URLs are installed.

## Lead generation, in order

1. Review all four concepts on phone and desktop. Fix missing images, copy, and interactions before sharing.
2. Choose ten relevant business prospects; send a short, tailored observation and **the matching fictional concept**.
3. If a business expresses interest, create a limited customized hero/preview using approved assets, not a free fully built website.
4. Quote a fixed scope, collect the Square deposit, then complete and test the paid site.
5. Collect the balance, hand off, and offer an optional maintenance plan.
6. Ask permission to publish real work and testimonials after delivery.

## Production safeguards

- These portfolio concepts use illustrative photos. Pet concept reuses unbranded dog images from the original repository; check rights before client commercialization.
- Other designs currently use externally hosted Unsplash photos. Confirm image rights and host optimized local copies for real client sites.
- Do not publicly represent real companies, logos or customer testimonials without permission.
- No accidental click-to-call or "Call Now" CTAs.
- Respect keyboard focus, reduced-motion preferences and phone layouts.
- This GitHub Pages path is a preview; use appropriate hosting for commercial client projects. Third-party photos are currently loaded from Unsplash and should be reviewed for rights, changed to client-owned/licensed food photography, optimized, and locally served before any actual commercial restaurant launch. All five concepts require browser/phone visual quality assurance before pitching.
- Final live-site browser review, image loading, and third-party link checks are still required after publishing.
