# Moonrise Living — reusable premium website system (v1)

Built by Moonrise House, LLC.

**Purpose:** Build cinematic, accessible, mobile-friendly websites quickly from a small shared set of components, and give each business ONE useful, industry-specific interaction instead of overbuilding.

## First working concept

- [EL DOGO — upgraded Moonrise Living demo](https://www.joshuasteichen.com/moonrise-living/el-dogo/)
- [Existing EL DOGO client preview](https://www.joshuasteichen.com/el-dogo-preview/) (untouched)
- EL DOGO source images remain in ../../el-dogo-preview/assets/.

This is an independent design concept, **not** EL DOGO's official site.

## File map

- shared/living.css — typography, motion, layout primitives, responsive styling, visual themes
- shared/living.js — mobile navigation, scroll reveals, accessible interactive estimator, inquiry-copy flow
- el-dogo/index.html — client-specific branding, content, imagery and estimator configuration

The experience runs as static HTML/CSS/JS with **no build tools, subscriptions, third-party code library, server, or database**.

## Three design skins

Set the HTML attribute to select a visual palette:

- data-theme="spa" — sage, cream, Playfair + DM Sans (current EL DOGO concept)
- data-theme="bold" — warm terracotta and editorial contrast (future boutiques / lifestyle)
- data-theme="modern" — crisp slate and blue (future services / contractors)

These are *color-system starting points*, not three finished distinct layouts. Each vertical should have its own composition, imagery and content while retaining the shared functional engine.

## Add a second customer

1. Duplicate **el-dogo/index.html** into **client-slug/index.html**.
2. Update business name, hero headline, location, real services, links, reviews, imagery and alt text.
3. Change data-theme and any approved client-specific CSS variables.
4. Replace the inline MOONRISE_LIVING configuration with the customer's verified services and pricing; reuse or adapt the shared interactive module.
5. Use the same shared/living.css and shared/living.js in the sibling path.
6. Test mobile widths (375, 768, 1440px), links, keyboard focus, contrast and reduced-motion preference.
7. Review client content and approve any charges, quotes or service guarantees before launch.
8. Launch to a NEW preview URL. Do not overwrite a previously approved client design without direction.

## Honest demo pricing

EL DOGO pricing values in the configuration are **illustrative placeholders only**, and the page labels them clearly. Do not use them on an official business website. Actual rates, add-ons, policies and availability require approval by the business owner. We intentionally do not collect pet owner information or process bookings here. "Copy visit details" simply copies a draft message to the visitor's clipboard; the visitor chooses whether to send it via the business Facebook page.

## Quick turnaround workflow

- Lead research & brand audit: 20–30 minutes.
- Personalized hero + one signature interaction: target 60–120 minutes after the engine is finalized.
- Send **homepage preview only** as an independent concept; avoid building a full custom site before a paid deposit.
- After deposit: complete services, reviews, contact, mobile QA, SEO basics and launch.
- Offer optional recurring maintenance, agreed content updates and reporting. Define revision limits and deliverables in the proposal.

Targets are operational goals, not guaranteed billable times.

## Business safeguards

- No "Call Now" or click-to-call CTA.
- No invented reviews, rates, awards, metrics or endorsements.
- Respect prefers-reduced-motion and maintain keyboard navigation.
- No backend or analytics scripts by default; optional gtag events only when measurement is explicitly installed.
- Reuse approved images rather than creating unrelated or inaccurate business imagery.
- Keep original client demos intact during experimentation.
- For the live client version, choose professional hosting that permits commercial use; the Github path here is a design preview, not a client production deployment.

## Future verticals

1. Wellness/spa: choose treatment -> contact flow.
2. Contractor: choose service/problem -> quote-ready request.
3. Boutique: curated lookbook -> featured product inquiry.

Start with one strong demo and reuse what works; avoid 3D, heavy plugins and custom AI agents unless a client separately pays for them.
