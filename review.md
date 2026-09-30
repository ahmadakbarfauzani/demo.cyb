Here is a comprehensive Product Requirements Document (PRD) to build the testimonials and reviews section based on the design provided in image_fd6f73.jpg.

---

# Product Requirements Document: "Word on the Street" Reviews Section

## 1. Executive Summary

**Objective:** Develop and implement a high-converting social proof section for the barbershop landing page. The goal of this section is to build immediate trust with prospective clients by showcasing perfect 5-star ratings and authentic client testimonials in a sleek, easily scannable format.

**Current State Analysis:**
The design shown in image_fd6f73.jpg operates as a dedicated trust-building block. It uses a dark mode aesthetic with a bold typography-driven header and a 3-column grid of review cards. Each card highlights the client's quote, name, location, and the specific service they received.

## 2. Target Audience & User Goals

* **Target Audience:** New website visitors who are evaluating the barbershop's credibility, skill level, and reliability before booking a mobile appointment.
* **User Goals:** Quickly verify that the service is highly rated, read authentic experiences from real clients in recognizable locations (e.g., Bali, Canggu, Ubud), and feel reassured about the quality of the cut.

## 3. UI/UX Layout & Components

The section is divided into two primary structural blocks: the Header block and the Testimonial Cards block.

### 3.1. Header Section

* **Eyebrow Text:** Must display "WORD ON THE STREET" in a small, wide-tracked, muted uppercase font.


* **Main Headline:** Must display "FRESH CUTS, HAPPY CHAIRS.".


* **Trust Signal / Sub-headline:** Centered beneath the headline, display a row of five solid gold stars followed by the text "A PERFECT 5.0 FROM CLIENTS ACROSS BALI".



### 3.2. Testimonial Card Component

The UI features three prominent review cards arranged in a horizontal row. Each card must be built as a reusable component containing the following elements:

* **Container Styling:** A dark background with a very subtle, thin border to separate it from the main page background.


* **Quote Icon:** A large, muted quotation mark icon ("") positioned at the top left of the card interior.


* **Star Rating:** Five small gold stars placed directly above the review text.


* **Review Body:** The client's testimonial text rendered in a clean, legible sans-serif font (light grey/white).


* **Reviewer Identity Block (Bottom of Card):**
* **Avatar:** A circular monogram displaying the reviewer's initials (e.g., "MD", "TR", "AP"). Support an active/highlight state (e.g., a glowing gold border) for the center card avatar.


* **Name:** The reviewer's first name and last initial (e.g., "Marco D.", "Tom R.", "Aldi P.").


* **Location & Service Tag:** Muted, small uppercase text displaying the neighborhood and the service received, separated by a hyphen (e.g., "UBUD - SKIN FADE", "SEMINYAK - HAIRCUT", "CANGGU - HAIRCUT").





## 4. Functional Requirements

* **Data Structure:** The CMS must support a "Reviews" content type with the following fields:
* Client Name (String)
* Client Initials for Avatar (String, max 2 chars)
* Location (String)
* Service Type (String)
* Review Text (Text Area)
* Star Rating (Integer, default 5)


* **Content Limits:** Review body text should be restricted to a maximum character count (approx. 200-250 characters) to ensure the cards maintain a uniform height in the grid.



## 5. Non-Functional Requirements

* **Responsive Behavior:**
* **Desktop:** Display as a static 3-column grid as shown in the mockup.


* **Tablet/Mobile:** Convert the 3-column grid into a horizontal swipeable carousel or a vertical stack to prevent the text from becoming too narrow to read.


* **Accessibility (a11y):** Ensure the contrast ratio between the review text and the dark card background meets WCAG AA standards. The star ratings must include an `aria-label` (e.g., "5 out of 5 stars") for screen readers.

## 6. Implementation Phasing

| Phase | Milestone | Description |
| --- | --- | --- |
| **Phase 1** | CMS & Data Model | Create the review schema in the database/CMS and populate it with the initial three reviews (Marco, Tom, Aldi).

 |
| **Phase 2** | UI Component Build | Develop the reusable Testimonial Card component, including the quote icon, star SVGs, and monogram avatars.

 |
| **Phase 3** | Layout Assembly | Build the CSS Grid layout and implement the "WORD ON THE STREET" header block.

 |
| **Phase 4** | Responsive Testing | Ensure the layout degrades gracefully on mobile devices (via stacking or a touch-friendly carousel). |