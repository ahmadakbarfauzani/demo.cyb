# Product Requirements Document: Admin Dashboard - Services & Pricing (Frontend UI)

## 1. Executive Summary

**Objective:** Develop the frontend user interface for the "Services & Pricing" settings page within the Admin Dashboard. This page allows the admin to view, add, edit, and manage the catalog of services (e.g., Tattoos, Piercings, Barbering) and location-based transport fees.

**Design Philosophy:** The UI must maintain the established premium dark-mode aesthetic—solid black/charcoal backgrounds, stark white typography, ultra-thin grey borders, and muted gold/tan accents. The interface should feel like a high-end digital ledger rather than a standard backend form.

## 2. Target Audience & User Goals

* **Target Audience:** Admin and operational managers.
* **User Goals:**
* Easily update service prices without writing code.
* Add new services to the catalog or temporarily hide unavailable ones.
* Manage the transport fee zones (e.g., updating the surcharge for outer Bali areas).



## 3. UI Layout & Architecture

* **Left Sidebar (Navigation):** Fixed on the left. The `[Icon] Services & Pricing` menu item is in the active state (white text, thin gold left-border highlight).
* **Main Content Area:** A vertically scrollable dashboard area with a two-section layout (Services Catalog and Transport Zones).

## 4. Core UI Components

### 4.1. Header & Primary Action

* **Page Title:** `SERVICES & PRICING` (Eyebrow styling: small, uppercase, wide letter-spacing, muted gold).
* **Primary Action Button:** A button in the top right reading `+ ADD NEW SERVICE`.
* *Styling:* Thin gold outline, white text, subtle gold hover fill.



### 4.2. Services Catalog (Grid/List View)

A structured list or grid displaying all current offerings.

* **Item Card/Row:** Transparent background with a thin dark grey border (`1px solid #333`).
* **Data Points Displayed:**
* **Category Badge:** E.g., `TATTOO`, `PIERCING`, `GROOMING` (small grey outline pill).
* **Service Name:** Bold white text (e.g., "Custom Fine-Line Tattoo").
* **Price:** Prominent muted gold text (e.g., "Rp 800.000").
* **Description Snippet:** Muted grey text previewing the service details.


* **Action Icons:** Thin outline icons for `Edit (Pencil)` and `Delete (Trash)` aligned to the right of each item.

### 4.3. Transport Zones Section

A secondary list placed below the Services Catalog to manage location fees.

* **Section Title:** `LOCATION SURCHARGES` (Eyebrow styling).
* **Zone Item:** Displays Area Name (e.g., "Ubud") and the associated fee (e.g., "+ Rp 150.000" or "FREE"). Includes a quick `Edit` icon.

### 4.4. "Add/Edit Service" Modal (Slide-over or Popup)

When the admin clicks "Add New Service" or "Edit", a modal appears.

* **Overlay:** A dark, semi-transparent background blur (`backdrop-filter: blur`).
* **Modal Container:** Solid charcoal (`#111111`) box with a thin gold border.
* **Form Inputs (Matching Login/Booking forms):**
* `SERVICE NAME` (Thin outline text input).
* `CATEGORY` (Thin outline dropdown).
* `BASE PRICE` (Thin outline numeric input).
* `DESCRIPTION` (Thin outline textarea).


* **Modal Actions:** `CANCEL` (grey text link) and `SAVE CHANGES` (Diamond-accented gold/charcoal button).

## 5. Interaction & State Management

* **Hover States:** Cards/rows slightly lighten in background color on hover. Edit/Delete icons change to gold and red, respectively, when hovered.
* **Delete Confirmation:** Clicking delete triggers a secondary warning modal ("Are you sure you want to delete this service?") to prevent accidental data loss.
* **Mobile Adaptation:** The grid layout transitions to a stacked, single-column view on viewports under 1024px.

---

# Developer Instructions: Connecting the Frontend Pages (Routing)

To transform these static mockup pages into a clickable, navigable frontend prototype, you must link them together. The method depends on the technology stack you are using.

### Scenario A: Plain HTML/CSS/JS (Static Files)

If you are building this using standard `.html` files, you need 4 files: `login.html`, `dashboard.html`, `appointments.html`, and `pricing.html`.

**1. Connecting the Sidebar Links (Navigation)**
In your sidebar component across `dashboard.html`, `appointments.html`, and `pricing.html`, use standard `<a>` (anchor) tags to route between files:

```html
<!-- Inside your Sidebar HTML -->
<nav class="sidebar-menu">
  <!-- Link to Dashboard -->
  <a href="dashboard.html" class="menu-item">
    <span class="icon">⊞</span> Overview
  </a>
  
  <!-- Link to Appointments -->
  <a href="appointments.html" class="menu-item active">
    <span class="icon">📋</span> Appointments
  </a>
  
  <!-- Link to Services & Pricing -->
  <a href="pricing.html" class="menu-item">
    <span class="icon">⚙️</span> Services & Settings
  </a>

  <!-- Link back to Login (Logout Action) -->
  <a href="login.html" class="menu-item logout">
    <span class="icon">🚪</span> Logout
  </a>
</nav>

```

**2. Connecting the Login Button**
Since the login page uses a form button rather than a standard link, use a simple JavaScript redirect to simulate a successful login:

```html
<!-- Inside login.html -->
<button id="login-btn" class="diamond-btn">SECURE LOGIN</button>

<script>
  document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents form submission refresh
    // Redirect to the dashboard main page
    window.location.href = "dashboard.html";
  });
</script>

```

### Scenario B: React.js / Next.js (Modern Frameworks)

If you are using React (with `react-router-dom`) or Next.js, you will use their built-in Link components to prevent full page reloads, ensuring a smooth, app-like experience.

**React Router Example:**

```jsx
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar-menu">
      <Link to="/dashboard" className="menu-item">Overview</Link>
      <Link to="/appointments" className="menu-item">Appointments</Link>
      <Link to="/pricing" className="menu-item">Services & Settings</Link>
      <Link to="/" className="menu-item logout">Logout</Link>
    </nav>
  );
}

```

**Next.js Example:**

```jsx
import Link from 'next/link';

function Sidebar() {
  return (
    <nav className="sidebar-menu">
      <Link href="/dashboard" className="menu-item">Overview</Link>
      <Link href="/appointments" className="menu-item">Appointments</Link>
      <Link href="/pricing" className="menu-item">Services & Settings</Link>
      <Link href="/login" className="menu-item logout">Logout</Link>
    </nav>
  );
}

```

By applying these routing methods, the admin can start at the Login page, authenticate (simulated), land on the Dashboard Overview, and use the sidebar to seamlessly click through to the Appointments and Pricing pages.