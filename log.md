Here is the Product Requirements Document (PRD) for the Admin Login Page, maintaining the premium, dark-mode aesthetic established for the rest of the application.

---

# Product Requirements Document: Admin Login Page (Frontend UI)

## 1. Executive Summary

**Objective:** Develop a secure, visually cohesive Admin Login Page that serves as the gateway to the dashboard. The design must strictly adhere to the premium, minimalist, dark-mode aesthetic (solid black background, thin borders, stark white text, and muted gold/tan accents) to ensure a seamless brand experience even for internal tools.

**Scope:** This document covers the front-end user interface, input validation styling, and interaction states required for the authentication gateway.

## 2. Target Audience & User Goals

* **Target Audience:** Authorized business owners, operational managers, and administrative staff (e.g., CYB / NobleCuts team).
* **User Goals:** Quickly and securely authenticate their credentials to access the admin dashboard without visual clutter or distractions.

## 3. UI Layout & Architecture

The layout will utilize a highly focused, distraction-free design.

* **Page Structure:** A single-column, vertically and horizontally centered layout (using CSS Flexbox or Grid) occupying 100% of the viewport height (`100vh`).
* **Background:** Solid black (`#000000`).
* **Login Container:** A sleek, centralized card or container. Instead of a heavy solid color block, it will use a very dark charcoal (`#111111`) or remain transparent with a subtle, ultra-thin dark grey border to frame the content.

## 4. Core UI Components

### 4.1. Branding & Header

* **Logo/Brand Title:** "CYB ADMIN" or "NOBLECUTS SECURE" centered at the top of the login container.
* **Typography:** Bold, condensed sans-serif, uppercase, white text.
* **Subtitle:** "Enter your credentials to access the dashboard." (Small, muted grey text).

### 4.2. Form Inputs

Matching the exact styling of the client-facing booking form:

* **Email / Username Input:**
* Label: `EMAIL ADDRESS` (Eyebrow style: small, uppercase, wide letter-spacing, muted gold).
* Input Box: Transparent background, white text, thin dark grey outline.


* **Password Input:**
* Label: `PASSWORD` (Eyebrow style).
* Input Box: Transparent background, dot-masked text, thin dark grey outline.
* Toggle: An eyeball icon (or "Show/Hide" text) on the right side of the input to toggle password visibility.



### 4.3. Secondary Actions

* **Remember Me:** A custom-styled checkbox with the label "Remember my device" (white/grey text). The checkbox should use a thin outline and fill with muted gold when checked.
* **Forgot Password:** A text link aligned to the right (or below the button) that says "Forgot Password?". Subtle hover effect (turns gold).

### 4.4. Primary Submit Button

* **Label:** `SECURE LOGIN`
* **Styling:** Matching the frontend booking button. Dark outline or dark charcoal fill, white text, featuring the signature small gold diamond (`◇`) decorative accents on the left and right interior edges.

## 5. States & Interactions

* **Focus State:** When an admin clicks into an input field, the ultra-thin dark grey border must transition to the brighter accent gold.
* **Error State:** If the login fails (wrong password/email), the input borders turn a muted red, and a sleek, inline error message appears below the input (e.g., "Invalid credentials. Please try again.").
* **Loading State:** Upon clicking the submit button, the button text changes to "AUTHENTICATING..." and the button becomes slightly dimmed/disabled to prevent double-clicking.
* **Responsive Behavior:** On mobile devices, the centralized container width expands to 90% of the screen, ensuring input fields are large enough for comfortable touch-typing.

## 6. Implementation Phasing

| Phase | Milestone | Description |
| --- | --- | --- |
| **Phase 1** | Base Layout & Centering | Set up the `100vh` solid black background and center the main login container using Flexbox/Grid. |
| **Phase 2** | Typography & Form Elements | Implement the branding header and the thin-bordered form inputs (Email, Password) using the established CSS variables. |
| **Phase 3** | Buttons & Utilities | Add the custom "Remember Me" checkbox, "Forgot Password" link, and the diamond-accented submit button. |
| **Phase 4** | State Management (CSS/JS) | Code the hover, focus, error, and loading states to ensure immediate and elegant visual feedback for the user. |