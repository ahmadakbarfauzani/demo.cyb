Here is a refined and more detailed Product Requirements Document (PRD) for the Admin Dashboard Main Page, emphasizing the premium dark-mode aesthetic to match the frontend, with a strict focus on frontend UI/UX requirements.

---

# Product Requirements Document: Admin Dashboard - Main Overview (Frontend UI)

## 1. Executive Summary

**Objective:** Develop the frontend user interface for the Admin Dashboard's Main Overview page. This page acts as the central command hub for managing premium mobile appointments (Tattoo, Piercing, Barber services).

**Design Philosophy:** The admin dashboard must inherit the premium, minimalist dark-mode aesthetic of the client-facing website. Instead of a generic, cluttered admin template, the UI will utilize solid black/dark charcoal backgrounds, stark white typography, thin border outlines, and muted gold/tan accents to maintain brand consistency.

## 2. Target Audience & User Goals

* **Target Audience:** Business owners and operational managers (e.g., CYB / NobleCuts admin team).
* **User Goals:** Quickly monitor daily business health, identify pending bookings that need WhatsApp confirmation, and view today's mobile service schedule at a glance without navigating through multiple pages.

## 3. UI Layout & Architecture

The layout will use a modern CSS Grid/Flexbox architecture divided into two main structural elements: a fixed left sidebar and a scrollable main content area.

### 3.1. Left Sidebar Navigation

* **Visual Style:** Dark charcoal background (`#111111`) with a 1px solid dark grey right border to separate it from the main content.
* **Brand Header:** "CYB ADMIN" in bold, condensed uppercase letters.
* **Menu Items:**
* `[Icon] Overview` (Active state: White text with a thin gold left border highlight).
* `[Icon] Appointments` (Muted grey text).
* `[Icon] Services & Pricing` (Muted grey text).
* `[Icon] Logout` (Positioned at the very bottom).



### 3.2. Top Header Bar

* **Title:** "OVERVIEW" in the signature eyebrow typography (uppercase, wide letter-spacing, muted gold).
* **User Context:** Displays the current date (e.g., "Thursday, Oct 1, 2026") and a minimalist admin profile avatar on the far right.

## 4. Core UI Components (Main Content Area)

### 4.1. Key Performance Indicator (KPI) Cards

A horizontal grid of 4 metric cards at the top of the dashboard.

* **Styling:** Transparent backgrounds with thin, dark grey borders (`1px solid #333`). Hovering over a card slightly brightens the border to gold.
* **Card 1: Pending Confirmations** (Highlighted). Features a subtle gold glow/accent. Shows a large number (e.g., `5`) and a label "Require WhatsApp Action".
* **Card 2: Total Bookings (This Month).** E.g., `124`.
* **Card 3: Estimated Revenue.** E.g., `Rp 45.500.000`.
* **Card 4: Completed Sessions.** E.g., `112`.

### 4.2. Recent Appointments Table (Widget)

A simplified, elegant data table showing the 5 most recent form submissions.

* **Table Container:** Thin outline box matching the KPI cards.
* **Headers:** `CLIENT`, `SERVICE`, `DATE & TIME`, `LOCATION`, `STATUS`. (Uppercase, small, muted grey).
* **Row Data:** White text for easy reading. E.g., "Alex Rivers | Custom Tattoo | 10/01/2026 @ 09:00 | Seminyak".
* **Status Badges:**
* `PENDING`: Outline badge with yellow/gold text.
* `CONFIRMED`: Outline badge with green text.
* `COMPLETED`: Outline badge with muted grey text.


* **Footer Action:** A transparent button at the bottom of the table: "VIEW ALL APPOINTMENTS →".

### 4.3. Today's Schedule Timeline (Widget)

A vertical timeline component displaying the day's itinerary for the mobile artists/barbers.

* **Styling:** A vertical gold line connecting schedule nodes.
* **Nodes:**
* `09:00 AM` - Alex Rivers (Villa Moonlight, Canggu) - Piercing
* `02:00 PM` - Sarah Jenkins (The W Hotel, Seminyak) - Fine-line Tattoo


* **Empty State:** If no appointments exist for the day, display elegant italicized text: *"No mobile sessions scheduled for today."*

## 5. Non-Functional & Interaction Requirements

* **Aesthetic Consistency:** Strictly avoid default browser styling (no bright blue links, no default 3D button shadows). Buttons and inputs must use the thin-outline and diamond (`◇`) accent styling established in the frontend PRD.
* **Responsive Behavior:**
* **Desktop (>1024px):** Fixed 250px sidebar, remaining width for the main dashboard grid.
* **Tablet/Mobile (<1024px):** The sidebar hides behind a "Hamburger" menu icon in the top header. The KPI cards stack into a 2x2 grid (tablet) or 1x4 column (mobile). The data table enables horizontal scrolling (overflow-x: auto) to prevent breaking the layout.


* **Mock Data:** The frontend developer must populate the UI with realistic mock data (Indonesian Rupiah formats, Bali locations, and realistic service names) to simulate a fully populated production environment.

## 6. Implementation Phasing

| Phase | Milestone | Description |
| --- | --- | --- |
| **Phase 1** | Global Layout & CSS Variables | Set up the grid skeleton (Sidebar + Main Content). Define CSS variables for colors (Black, Charcoal, Muted Gold, White) and fonts. |
| **Phase 2** | Navigation & Header | Build the sidebar navigation links with active/hover states, and the top context header. |
| **Phase 3** | KPI Grid & Styling | Implement the 4 top metric cards with the thin-border aesthetic and hover transitions. |
| **Phase 4** | Data Table & Timeline | Code the recent appointments table with color-coded status badges, and build the vertical timeline widget for today's schedule. |
| **Phase 5** | Mobile Optimization | Add media queries to collapse the sidebar into a hamburger menu and ensure all widgets stack elegantly on mobile screens. |