Here is the Product Requirements Document (PRD) for the frontend booking form component, specifically adapted to utilize the premium, minimalist visual style from the reference image_6914b1.png.

---

# Product Requirements Document: Premium Booking Form (Frontend)

## 1. Executive Summary

**Objective:** Develop a client-facing booking form frontend that merges appointment scheduling functionality with a premium, minimalist dark-mode aesthetic.

**Visual Style Analysis:**
Based on the provided design in image_6914b1.png, the interface relies on a solid black background, high-contrast typography (stark white for main text, muted gold/tan for accents), and ultra-thin borders. To match this aesthetic, the form will avoid solid, chunky color blocks in favor of a clean, sophisticated outlined style.

## 2. Target Audience & User Goals

* **Target Audience:** Clients of premium services (e.g., mobile barber, private tattoo sessions) who expect an exclusive, fast, and frictionless digital experience.
* **User Goals:** Easily input booking details via a clean, distraction-free interface and submit them directly to WhatsApp for instant confirmation.

## 3. UI Design & Component Mapping

Since the reference image displays text blocks and buttons rather than form fields, we will adapt those exact styling rules to the input elements:

* **Label Typography (Mimicking "WHERE WE GO"):** Form input labels (e.g., "FULL NAME", "SELECT SERVICE") will adopt the eyebrow text style. Specs: uppercase lettering, small font size, wide letter-spacing, and a muted gold/tan color.


* **Form Title (Mimicking "ACROSS BALI."):** The main header will use a bold, large, white condensed sans-serif font. Example: "BOOK YOUR SESSION."


* **Input Field Style (Mimicking Location Tags):** Text inputs and dropdown menus will mirror the styling of the location tags (e.g., the boxes for "NUSA DUA" or "ULUWATU"). Specs: transparent background, white text input, and an ultra-thin dark grey or muted gold border.


* **Submit Button (Mimicking "BOOK ON WHATSAPP"):** The confirmation button will use a dark outline style with white text, featuring the small gold diamond (`◇`) decorative accents on the left and right interior edges of the button.


* **Floating Action Button (FAB):** The circular gold/tan WhatsApp button will remain fixed in the bottom right corner of the viewport as a secondary quick-contact method.



## 4. Form Specifications (Frontend Layout)

The layout will utilize a 2-column grid on desktop screens, mirroring the left-and-right text split seen in the design. The left column can house instructional text, while the right column contains the stacked form fields.

| Field Label | Input Style (Adapted from Design) |
| --- | --- |
| **FULL NAME** | Thin outline text box (Transparent background, white text). |
| **WHATSAPP NUMBER** | Thin outline text box (Numeric keyboard trigger on mobile). |
| **SELECT SERVICE** | Thin outline dropdown menu (White option text). |
| **DATE & TIME** | Thin outline datepicker/time select. |
| **LOCATION** | Dropdown menu for area selection (populated with areas like Seminyak, Canggu, Ubud, etc.).

 |

## 5. Non-Functional & Interaction Requirements

* **Hover Effects (Cursor Interaction):**
* On hover or focus, the ultra-thin borders of the input fields should transition to a brighter accent gold to provide clear visual feedback.
* Hovering over the diamond-accented submit button should trigger a subtle background color fill (e.g., dark grey or the accent gold) to encourage clicks.




* **Responsiveness:**
* **Desktop (>1024px):** 2-column grid layout.
* **Mobile (<768px):** All input elements span 100% width and stack vertically to ensure touch-friendly interaction.


* **Accessibility (a11y):** Ensure the contrast ratios between the placeholder text (which should be a muted white/grey) and the solid black background meet WCAG readability standards.

## 6. Implementation Phasing

| Phase | Milestone | Description |
| --- | --- | --- |
| **Phase 1** | Structure & CSS Reset | Build the semantic HTML structure and set the global background to solid black.

 |
| **Phase 2** | Typography Adaptation | Apply the wide letter-spacing and uppercase transforms to labels (matching "HOURS") and the bold condensed font to headers.

 |
| **Phase 3** | Input Components | Create the CSS classes for text inputs and dropdowns, strictly mimicking the thin-bordered tags (like "CANGGU").

 |
| **Phase 4** | Buttons & Polish | Implement the diamond-accented submit button, configure hover state transitions, and position the circular WhatsApp FAB in the bottom right.

 |