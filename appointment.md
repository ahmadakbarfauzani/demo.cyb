# Product Requirements Document: Admin Dashboard - Appointments Management (Frontend UI)

## 1. Executive Summary

**Objective:** Develop the frontend user interface for the Appointments Management page within the Admin Dashboard. This page serves as the primary control center for the admin to view, filter, and manage all incoming booking schedules from clients.

**Design Philosophy:** Strictly adhere to the premium dark-mode identity established for the public-facing website. The UI must avoid standard, clunky admin templates by utilizing solid black/charcoal backgrounds, crisp white typography, ultra-thin borders, and muted gold/tan accents to ensure a cohesive, high-end brand experience.

## 2. Target Audience & User Goals

* **Target Audience:** Business owners and operational managers (Admins).
* **User Goals:**
* View a complete, chronologically ordered list of upcoming and past bookings.
* Search for specific clients or filter the list by status (e.g., viewing only "Pending" requests).
* Seamlessly update the booking status after confirming details with the client via WhatsApp.
* Launch direct WhatsApp chats with clients straight from the data table.



## 3. UI Layout & Architecture

This page shares the same core layout architecture as the Dashboard Overview page:

* **Left Sidebar (Navigation):** Fixed position on the left. The `[Icon] Appointments` menu item is now in its active state (white text with a thin gold left-border highlight).
* **Main Content Area:** Occupies the remaining right-side viewport, vertically scrollable, utilizing generous padding to maintain an exclusive, uncluttered aesthetic.

## 4. Core UI Components (Content Area)

### 4.1. Header & Controls (Top Bar)

* **Page Title:** `APPOINTMENTS` (Using the established eyebrow typography: uppercase, small font size, wide letter-spacing, muted gold).
* **Search Bar:**
* A thin outline dark grey box featuring a subtle magnifying glass icon.
* Placeholder text: "Search client name or service..." (rendered in muted grey).


* **Status Filter (Dropdown):**
* A thin outline dropdown menu to filter the table rows (Options: `All`, `Pending`, `Confirmed`, `Completed`, `Cancelled`).



### 4.2. Main Appointments Data Table

A clean, minimalist table displaying the booking history and upcoming schedule.

* **Table Styling:** Transparent background. Row dividers use a solid, very dark grey line (`1px solid #222`). No vertical dividers between columns.
* **Table Columns:**
* **BOOKING ID:** Compact unique identifier (e.g., `#CYB-001`).
* **CLIENT INFO:** Displays the client's Name (bold white) with their WhatsApp Number directly below it (smaller, muted grey).
* **SERVICE & PRICE:** Service name (e.g., "Custom Tattoo") and total estimated price ("Rp 1.500.000").
* **DATE & TIME:** Scheduled date and time slot.
* **LOCATION:** Area (e.g., "Seminyak") and specific address details.
* **STATUS:** Visual status badge.
* **ACTIONS:** Quick-access interactive buttons.



### 4.3. Status Badges Design

To maintain the minimalist look, avoid chunky solid color blocks. Use thin outline borders or bold text paired with a colored indicator dot:

* 🟡 **PENDING:** Gold/yellow outline or text (Requires admin action).
* 🟢 **CONFIRMED:** Muted green outline or text (Schedule locked).
* ⚪ **COMPLETED:** Muted grey/white outline or text (Session finished).
* 🔴 **CANCELLED:** Muted dark red outline or text (Booking aborted).

### 4.4. Quick Action Column

Positioned at the far right of every row, containing two interactive elements:

* **WhatsApp Button:** An outlined WhatsApp icon. On hover, the outline transitions to accent gold or green. Clicking this routes the admin directly to `wa.me` with the client's phone number.
* **Edit / Status Toggle:** A thin outline three-dot menu (`...`) or a compact dropdown allowing the admin to quickly change the row's status (e.g., flipping "Pending" to "Confirmed" without leaving the page).

## 5. Responsiveness & State Management

* **Row Hover Effect:** When the cursor hovers over a table row, the row's background should smoothly transition to a very subtle charcoal (`#111111` or `#1a1a1a`) to help the user's eye track across the data.
* **Mobile Adaptation (<1024px):** Traditional data tables are illegible on mobile screens. On smaller viewports, the table must transform into a **Card View Grid**. Each booking becomes an individual, vertically stacked card containing the client details, with the status badge and action buttons anchored at the bottom of the card.
* **Empty State:** If a filter yields no results or the database is empty, display elegantly styled, centered text within the table area: *"No appointments found."*

## 6. Implementation Phasing

| Phase | Milestone | Description |
| --- | --- | --- |
| **Phase 1** | Table Structure & Header | Construct the HTML/CSS skeleton for the top control bar (Search & Filter) and the base table element. |
| **Phase 2** | Data Table Styling | Apply the thin border styling and column typography (bold for names, grey for secondary details). |
| **Phase 3** | Interactive UI Components | Build the specialized CSS classes for the Status Badges and the action icon buttons (WhatsApp/Edit). |
| **Phase 4** | Mobile Adaptation & Hover States | Configure media queries to transition the table into the Card View on mobile devices, and implement the subtle row hover transitions. |

Are there any specific data points or custom columns you need added to the client information section in this table?