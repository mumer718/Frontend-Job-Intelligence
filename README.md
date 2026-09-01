# Job Market Intelligence System — Frontend Deployment

A responsive SaaS frontend prototype for the **Job Market Intelligence System**, built with native web standards.

## 🚀 Overview

This folder contains the complete, self-contained static website for the Job Market Intelligence System. It features:
- **Hero & Module Navigation**: Interactive introduction with quick search suggestions.
- **Jobs Database**: Real-time multi-criteria filtering (keyword, country, work mode, category, salary sorting), quick preset filter tabs, and pagination.
- **Job Detail View**: Comprehensive view with skills breakdown, source badges, and direct posting link navigation.
- **Categories & Companies Intelligence**: Visual cards for domain specializations and hiring organization metrics.
- **Market Analytics Dashboard**: Interactive statistics including programming language share, work mode breakdown, skill frequencies, weekly volume trend SVG chart, and salary metrics.
- **Contact Form**: Client-side validated feedback interface.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic markup, single-page application structure.
- **CSS3**: Modern SaaS design system with CSS custom properties (variables), grid layout, and responsive flexboxes.
- **Vanilla JavaScript (ES6+)**: SPA hash router, dynamic DOM rendering, client-side filtering/sorting/pagination, and state management.

---

## 📦 File Structure

```text
frontend/
├── index.html         # Main SPA entry point
├── css/
│   └── styles.css     # Production CSS design tokens & component styles
└── js/
    └── app.js         # Single-page router, controllers, & mock API layer
```

---

## 💻 How to Run Locally

Since this is a static site with no build steps or bundlers required:

### Option 1: Direct File Access
Simply double-click `index.html` or open it in any web browser.

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
cd frontend
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🌐 Deploying to Static Web Hosting

To deploy this frontend to a static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, Firebase Hosting):

### Option A: Deploying `frontend/` Folder Only
Select `frontend/` as your publishing/root directory in your host settings.

### Option B: GitHub Pages
1. Push this repository to GitHub.
2. Go to **Repository Settings** -> **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** (e.g., `main`).
4. Set folder to `/frontend` or configure GitHub Actions to publish `frontend/`.

---

## 🔌 API Architecture & Backend Integration

The frontend operates in **Standalone Static Mode** out-of-the-box using built-in mock data (`MockJobAPI`).

If a Flask API backend is running, you can connect the frontend to live endpoints by setting `window.JOB_API_BASE_URL` before `app.js` executes:

```html
<script>
    window.JOB_API_BASE_URL = 'https://api.yourdomain.com/api';
</script>
<script src="js/app.js"></script>
```

If the live API is unreachable, the system automatically falls back to local static data without breaking the UI.
