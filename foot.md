# Product Requirements Document: Frontend Footer Component

## 1. Executive Summary

**Objective:** Develop a fully responsive, high-converting frontend footer component based on the provided design mockup. This footer serves as the final informational anchor of the landing page, providing critical operational details (service areas, operating hours), secondary navigation, and direct conversion pathways (WhatsApp booking).

**Current State Analysis:**
The design depicted in image_fdf6bd.jpg utilizes a premium dark-mode aesthetic with a two-column primary structure and a distinct sub-footer. The typography relies on a mix of muted, wide-tracked uppercase eyebrows, bold condensed headlines, and highly legible body copy.

## 2. UI Layout & Component Breakdown

### 2.1. Main Footer: Left Column (Locations & Contact)

This column establishes the service boundaries and contact methods.

* **Header Elements:**
* Eyebrow: "WHERE WE GO".


* Headline: "ACROSS BALI.".




* **Location Grid:** A flex/grid layout of location tags, each enclosed in a subtle, thin border. The tags are: NUSA DUA, ULUWATU, SEMINYAK, CANGGU, UBUD, and "& AROUND".


* **Travel Policy Section:**
* Eyebrow: "TRAVEL INCLUDED".


* Body text: "Transport is built into the price across these areas. Further out? Message us and we'll make it work.".




* **Contact Links:**
* Instagram block: "INSTAGRAM" eyebrow followed by the link "@cyb_bali".


* WhatsApp block: "WHATSAPP" eyebrow followed by the link "Tap to book →".





### 2.2. Main Footer: Right Column (Hours & Booking)

This column outlines availability and houses the primary call-to-action.

* **Header Elements:**
* Eyebrow: "HOURS".


* Headline: "BY APPOINTMENT.".




* **Schedule List:** A structured list displaying the days of the week (Mon through Sun) left-aligned, and the corresponding hours ("10 AM – 10 PM") right-aligned along a defined axis.


* **CTA Button:** An outlined button reading "BOOK ON WHATSAPP". The button features decorative diamond accents (`◇`) integrated into the border design.



### 2.3. Sub-Footer (Bottom Bar)

Separated from the main footer by a subtle horizontal divider line.

* **Brand & Copyright (Left-aligned):**
* A circular logo containing the "CYB" monogram next to the bold text "CYB".


* Copyright text positioned below the logo: "© 2026 CYB Mobile Barbershop - Bali. All rights reserved.".




* **Secondary Navigation (Right-aligned):** A horizontal list of text links displaying "Canggu", "Seminyak", "Uluwatu", "Ubud", "Nusa Dua", and "Journal".



### 2.4. Global Floating Element

* **WhatsApp FAB:** A persistent, circular green WhatsApp icon fixed in the bottom right corner of the viewport.



## 3. Frontend Functional & Interaction Requirements

* **Responsive Layout Behavior:**
* **Desktop (>1024px):** Maintain the strict 2-column split for the main footer and the horizontal split for the sub-footer.


* **Tablet (768px - 1023px):** Adjust padding and scale down headline typography. The 2-column main footer may remain, but the sub-footer navigation should wrap if space is constrained.
* **Mobile (<768px):** Convert the main footer to a single-column vertical stack (Left column content stacks above Right column content). The sub-footer should center-align both the copyright block and the secondary navigation links (wrapping to multiple lines as needed).


* **Hover States (CSS):**
* **Location Tags:** On hover, the border color should transition to a solid accent color (e.g., gold or white) to indicate interactivity.
* **Text Links:** The Instagram ("@cyb_bali"), WhatsApp ("Tap to book →"), and secondary navigation links should change color or opacity upon hover.


* **CTA Button:** The "BOOK ON WHATSAPP" button must have a distinct hover state (e.g., background fill transition) to encourage clicks.




* **Link Routing:** All WhatsApp links (FAB, text link, and CTA button) must utilize the `wa.me` API with a pre-filled booking message.



## 4. Implementation Phasing

| Phase | Milestone | Description |
| --- | --- | --- |
| **Phase 1** | Structure & CSS Grid | Construct the HTML semantic tags (`<footer>`, `<section>`, `<nav>`) and establish the CSS Grid/Flexbox layouts for the 2-column design.

 |
| **Phase 2** | Typography & Spacing | Apply the exact typography styling, including uppercase text transforms, letter-spacing for eyebrows, and precise padding/margins between blocks.

 |
| **Phase 3** | UI Details & Sub-footer | Implement the bordered location tags, the schedule alignment, the decorative diamond CTA button, and the horizontal divider for the sub-footer.

 |
| **Phase 4** | Responsiveness & Polish | Configure media queries for mobile stacking, add CSS hover transitions, and finalize the fixed positioning of the WhatsApp FAB.

 |