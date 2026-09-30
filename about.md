# Product Requirements Document: "About Me / Your Barber" Section

## 1. Executive Summary

**Objective:** Create an engaging, narrative-driven "About Me" section to build trust, establish craft expertise, and forge a personal connection between the client and the lead barber (Sunny).

**Current State Analysis:**
The design shown in image_fde6fb.jpg uses a sleek, editorial dark-mode aesthetic. The layout features a 2-column asymmetric structure: a portrait image with a signature overlay on the left, paired with narrative copy and a primary action button on the right.

## 2. Target Audience & User Goals

* **Target Audience:** Prospective clients seeking an intimate, high-end, or mobile barber experience who value personal craftsmanship and expertise.
* **User Goals:** Learn who is coming to their home/villa, evaluate the barber's experience level, and feel confident in booking a personal session.

## 3. UI Layout & Component Breakdown

### 3.1. Left Column (Visual Block)

* **Barber Portrait:** A high-resolution vertical portrait container displaying the barber (Sunny) in action or professional attire.


* **Signature Watermark Overlay:** A dynamic dynamic script font/SVG of the barber's signature ("Sunny") overlapping the bottom-left corner of the photo frame to add a personal, editorial touch.



### 3.2. Right Column (Content Block)

* **Eyebrow Text:** `YOUR BARBER` rendered in small, tracked-out, uppercase sans-serif.


* **Main Headline:** `THE HANDS BEHIND CYB.` set in a bold, condensed uppercase font.


* **Bio Narrative (Paragraph 1):** Introduces Sunny's origin story, transition to mobile barbering in Bali, and high-level craft philosophy.


* **Bio Narrative (Paragraph 2):** Highlights specific technical skills (seamless fades, facial mapping for beards, straight-razor finish) and the one-on-one premium experience.


* **Call-to-Action (CTA) Button:** An outlined border button reading `BOOK WITH CYB` with subtle diamond border accents.



### 3.3. Global Section Elements

* **Dividers:** Minimalist top and bottom horizontal rule lines centered with small diamond icons (`◇`) to define section boundaries.


* **Floating Action Button (FAB):** Persistent WhatsApp button fixed in the bottom right corner.



## 4. Content & Copy Requirements

| Element | Exact Text Copy |
| --- | --- |
| **Eyebrow** | `YOUR BARBER`<br> |
| **Headline** | `THE HANDS BEHIND CYB.`<br> |
| **Body Paragraph 1** | "Meet Sunny. Years behind the chair and thousands of fades later, he packed the whole shop into a kit and took it mobile across Bali. Classic barbering, clean lines, and a finish that actually holds."

 |
| **Body Paragraph 2** | "His thing is the details: fades that blend seamless, beards mapped to your face, and a straight-razor finish that feels like a proper ritual. One client at a time, full focus, and the chair comes to you."

 |
| **CTA Label** | `BOOK WITH CYB`<br> |
| **Signature** | `Sunny` (Script/Handwritten styling)

 |

## 5. Technical & Non-Functional Requirements

* **Responsive Behavior:**
* **Desktop (1024px+):** 2-column horizontal split as shown in mockup (Image left 45%, Text right 55%).


* **Tablet (768px - 1023px):** Maintain 2-column layout with reduced padding and adjusted font sizes.
* **Mobile (< 768px):** Convert to a single vertical stack. The image block (with signature overlay) renders on top, followed by the text block and CTA button below.


* **Interactions & Hover States:**
* **CTA Button:** On hover, background fills with accent color (e.g., gold or warm grey) and text shifts contrast smoothly (0.3s ease-in-out transition).
* **Image Effect:** Subtle inner shadow or subtle zoom effect on the barber portrait upon section entry.


* **Performance:** Image container must utilize `srcset` for responsive serving and webp format with lazy loading to maintain page speed.

## 6. Implementation Phasing

| Phase | Milestone | Description |
| --- | --- | --- |
| **Phase 1** | Component Markup | Construct the HTML/JSX structure for the 2-column grid and structural dividers.

 |
| **Phase 2** | Typography & Overlay | Implement exact typography weights, script font overlay for signature, and text styling.

 |
| **Phase 3** | Responsive Tuning | Configure mobile vertical stacking and touch-friendly CTA sizing.

 |
| **Phase 4** | Interaction & Routing | Connect the `BOOK WITH CYB` button and WhatsApp FAB to booking/messaging triggers.

 |