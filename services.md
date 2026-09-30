Here is a comprehensive Product Requirements Document (PRD) to redesign and elevate the layout of the services page based on the current design shown in image_fc82d7.jpg.

---

# Product Requirements Document: Services Page Layout Upgrade

## 1. Executive Summary

**Objective:** Redesign the current barbershop services page to feature a more structured, modern, and conversion-optimized layout. The goal is to move away from floating text blocks toward a sleek, card-based interface that clearly defines each offering and encourages immediate booking.

**Current State Analysis:**
The current design in image_fc82d7.jpg utilizes a dark background. The header consists of a small "SERVICES" eyebrow, a bold "EVERY CUT, DIALED IN." headline, and a descriptive subheadline indicating this is a mobile, appointment-only service where travel is included. The layout displays five services mapped out with large golden/orange numbers (#1 through #5). The services are presented in a loose text grid (two columns for the first four services, and the fifth centered at the bottom) detailing the title, price in Rupiah, and a short description. A WhatsApp floating action button (FAB) is located in the bottom right corner.

## 2. Target Audience & User Goals

* **Target Audience:** Prospective and returning clients looking to understand the pricing and details of the mobile barbershop services before booking.
* **User Goals:** Quickly scan available services, easily identify pricing and inclusions, and find a frictionless way to book a specific service.

## 3. Proposed UX/UI Improvements (The "Better Layout")

The current loose text-grid lacks structural boundaries, which can make it hard to scan. We will implement the following layout upgrades:

* **Card-Based UI:** Encapsulate each of the five services into its own distinct container (a "card") with a subtle background color (e.g., rich charcoal `#1A1A1A`) and a delicate border or shadow. This creates visual grouping and makes the text easier to read against the dark theme.


* **Iconography & Visual Anchors:** While the large #1 to #5 numbers establish an order, they take up valuable visual hierarchy. We will replace or supplement these numbers with minimalist, premium line-art icons (e.g., scissors for haircuts, a straight razor for shaves) to visually communicate the service instantly.


* **Clear Call-to-Action (CTA):** Currently, the only way to book is via the global WhatsApp icon. The new layout will introduce a subtle "Book This" text link or icon button directly inside each service card.


* **Optimized Grid Structure:** Instead of an awkward 2-2-1 layout, we will use a responsive CSS Grid. On large screens, a 3-column layout for the top three most popular services, followed by a 2-column layout for the remaining two, creates a much more balanced and deliberate aesthetic.



## 4. Functional Requirements

### 4.1. Header Section

* **Typography:** Retain the exact copy: "SERVICES" (eyebrow), "EVERY CUT, DIALED IN." (headline), and the subheadline explaining the mobile/travel aspect.


* **Alignment:** Keep the header center-aligned but restrict the maximum width of the subheadline to 600px so it wraps cleanly and remains legible.

### 4.2. Service Menu Components

The platform must support structured data for the five existing services:

* **Service 1:** "TATTOO" - Price TBD (e.g., Hourly Rate / From Rp 800K) - Custom designs, fine-line, and traditional blackwork by resident artists. Strict hygiene standards.

* **Service 2:** "PIERCING" - Price TBD (e.g., From Rp 250K) - Professional ear and body piercing using sterilized, implant-grade titanium jewelry.


* **Card Layout Elements:** Each card must programmatically display:
* Service Title (Bold, Uppercase).
* Price Badge (e.g., a small contrasting pill shape in the top right of the card).
* Description Text (Muted grey, smaller font weight).
* Hover Interaction: On mouse hover (desktop), the card elevates slightly (Y-axis translation) and the border color shifts to a premium accent color (e.g., gold or muted silver).



### 4.3. Floating Action Button (FAB)

* **WhatsApp Integration:** Maintain the green WhatsApp FAB.


* **Enhancement:** Ensure the FAB includes a clear `aria-label` for accessibility and a tooltip reading "Message to Book" for desktop users.

## 5. Non-Functional Requirements

* **Responsive Design:**
* **Desktop (1024px+):** Card grid layout (e.g., 3-column top row, 2-column bottom row, or an offset masonry look).
* **Tablet (768px - 1023px):** Strict 2-column grid.
* **Mobile (< 768px):** 1-column vertical stack with 16px padding between cards.


* **Accessibility:** Ensure high contrast ratios between the text (white/light grey) and the dark card backgrounds.
* **Performance:** Minimal DOM elements; utilize CSS for all hover and layout shift animations to maintain 60fps performance.

## 6. Implementation Phasing

| Phase | Milestone | Description |
| --- | --- | --- |
| **Phase 1** | Data Structure & Routing | Set up the data model for the 5 services (Title, Price, Description, Image/Icon).

 |
| **Phase 2** | UI Framework & CSS Grid | Build the base responsive grid and the individual Card UI components. |
| **Phase 3** | Typography & Header | Implement the header text and format the price badges within the cards.

 |
| **Phase 4** | Interaction & Polish | Add hover states to the cards, integrate the CTA links, and finalize the WhatsApp FAB layout.

 |