# Moonrise Living — Interactive Website Portfolio (v2)
By Moonrise House, LLC · October 2026

## Four fictional portfolio examples

- Showcase + launch prices: https://www.joshuasteichen.com/moonrise-living/
- Mallow + Moss — pet spa concept + grooming estimator: https://www.joshuasteichen.com/moonrise-living/mallow-moss/
- Form Nine — automotive concept + visual finish simulator: https://www.joshuasteichen.com/moonrise-living/form-nine/
- Sable & Soft — wellness concept + ritual finder: https://www.joshuasteichen.com/moonrise-living/sable-soft/
- Paper & Pleat — black/cream fashion concept + interactive lookbook: https://www.joshuasteichen.com/moonrise-living/paper-pleat/
- Nookside Kitchen — neighborhood restaurant concept + dietary-aware dish finder and order handoff: https://www.joshuasteichen.com/moonrise-living/nookside-kitchen/

All five featured brands are **fictional**, not actual clients or operating businesses. There is no real checkout or booking. The pet prices and wellness recommendations are illustrative; the automotive comparison uses photographic styling filters, not a real detailing result. Never present these concepts as completed paid client engagements.

The legacy /moonrise-living/el-dogo/ page now redirects to fictional Mallow + Moss. The separate original /el-dogo-preview/ pitch page remains **unchanged**, but is not promoted in the public Moonrise Living portfolio.

## File map

- shared/living.css — responsive styling, typography, visual themes and lightweight animations.
- shared/living.js — navigation, reveals, accessibility and configurable grooming estimator. The isConcept flag makes copied summaries explicitly fictional.
- mallow-moss/index.html — client configuration using shared styling/behavior.
- form-nine/index.html — automotive styling + local compare effect.
- sable-soft/index.html — wellness styling + local ritual finder.
- paper-pleat/index.html — fashion styling + local lookbook UI; updated to high-contrast black/cream with stronger display type.
- nookside-kitchen/index.html — neighborhood restaurant styling, three sample dishes, a dietary-aware dish recommender and order buttons with a safe fictional fallback.
- index.html — portfolio home, four links, introductory pricing.

The non-pet sites presently use unique, standalone CSS and JS to demonstrate very different art direction. Future efficiencies will come from extracting repeated functions and refining the handoff process; these are portfolio prototypes, not a one-click website factory.

## Proposed introductory offers (first 3 paying websites)

- Starter — $595: responsive single page, up to five sections, contact option, restrained motion.
- Business — $995: up to three pages, more tailored design, SEO basics, one simple interaction.
- Living — $1,495: premium cinematic styling, modest motion and one custom lightweight interactive feature.

Use 50% upfront deposit, two consolidated revision rounds, a written page/feature/content scope, and final payment before handoff. Domain, hosting, ongoing maintenance, asset licensing, photography/video production, ecommerce and external integrations are additional. Do not promise dynamic booking, full online store, real AI agent or advanced custom software at those prices. Track production hours so introductory pricing does not erode profit.

## Restaurant order link integration

1. Before going live, get the restaurant's ACTUAL guest-facing pickup and delivery URLs from the owner (Toast, Square, ChowNow, etc). Never guess URLs.
2. Edit the Nookside template's inline JavaScript near its end: `const ORDER_LINKS={pickup:"",delivery:""};`.
3. Put the verified HTTPS URLs inside the quoted strings. Leave a channel blank if not supported by the restaurant; customize or remove its button for production instead of implying the option is available.
4. When configured, all buttons labeled Order Pickup / Order Delivery open the correct existing ordering page in a new tab. If blank, the fictional demo buttons open an informative modal and make NO order.
5. Replace the fictional menu photos, pricing, ingredients, vegetarian/vegan tags and brand name with approved assets. The finder does not validate allergies, cross-contact or availability; add a disclaimer and confirm all menu dietary claims with the owner.
6. Test on a real phone, complete a test checkout through the real provider, and get the owner's approval before launch.

**Important:** No custom cart, payment processing, POS integration, backend, or chargeable monthly API calls are needed for the link-out implementation. Building a true checkout would be a separate paid project.

## Changes requested in review

- Mallow + Moss: header logo smaller with more padding; straightforward buttons; Large Dog option; professional Short Coat, Medium Coat, and Long / Double Coat descriptions.
- Form Nine: larger full-width visual simulator, closer auto detail photograph, stronger base/enhanced difference and visible drag handle; photographic filters still explicitly NOT a real service before/after.
- Sable & Soft: no changes.
- Paper & Pleat: black-and-cream high-fashion palette with muted clay accent and heavier readable display typography.
- Nookside Kitchen: new approachable neighborhood restaurant category and demo ordering buttons.

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
