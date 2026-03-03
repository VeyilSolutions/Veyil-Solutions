# Veyil Solutions - React Website

A modern React-based website for Veyil Solutions, converted from a static HTML/CSS/JS site.

## 🚀 Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Icon library
- **AOS** - Animate on Scroll library
- **Lottie-web** – JSON-based animations

## 📁 Project Structure

```
veyil-react/
├── public/
│   ├── img/
│   │   ├── logo.png
│   │   └── business.json        # Lottie animation
│   └── favicon.png
│
├── src/
│   ├── assets/                  # Imported images (ESM)
│   │   ├── Image.png
│   │   ├── Image.svg
│   │   └── Image.jpg
│
│   ├── components/              # Reusable UI components
│   │   ├── AboutProcessIndustries.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroGeometric.jsx
│   │   ├── InteractiveServices.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServiceCTA.jsx
│   │   ├── ServiceFeatures.jsx
│   │   ├── ServiceHero.jsx
│   │   ├── SocialIcons.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── Testimonials.jsx
│
│   ├── pages/                   # Route-level pages
│   │   ├── Home.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsConditions.jsx
│   │   ├── services/
│   │   │   ├── MobileAppDevelopment.jsx
│   │   │   ├── WebDesign.jsx
│   │   │   └── WebDevelopment.jsx
│   │   └── policies/
│   │       ├── CookiePolicy.jsx
│   │       ├── PrivacyPolicy.jsx
│   │       ├── TermsConditions.jsx
│   │       └── WorkProcess.jsx
│
│   ├── styles/
│   │   ├── index.css                  # Main UI Style
│   │   └── form.css                  # Form UI Style
│
│   ├── App.jsx                  # Main app & routes
│   └── main.jsx                 # Entry point
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .gitignore
└── README.md

```

## 🛠️ Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add assets:**
   Place static files in `public/img/`:
   - `Veyil logo.png` - Company logo
   - `1.png`, `2.png`, `3.png` - Team member photos
   - `business.json` - Lottie animation file
   - Service images (optional)
   Imported images (ESM) go inside `src/assets/`.

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Styling & Configuration

### Tailwind CSS
Custom colors and fonts are configured in `tailwind.config.js`:
- `navy`: #0A2540
- `teal`: #14B8A6
-  Fonts: 
      - Baloo Bhaijaan  
      - Poppins

### Contact Form

  - Uses a Google Apps Script backend
  - Endpoint can be updated in:
    ```bash
      src/pages/Contact.jsx
    ```

## 📱 Responsive Design

Optimized for all screen sizes:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Key Features

- Modular React architecture
- Fully responsive UI
- Interactive service accordion
- Animated hero (Framer Motion)
- AOS scroll animations
- Lottie animations
- SEO-friendly routing
- Clean, maintainable codebase

## 🚀 Deployment Guide

This project is built with Vite + React and can be deployed easily on modern hosting platforms.

## 1 🔷 Deploy on Vercel (Recommended)

Vercel is the best choice for React + Vite projects.

## Steps

1.  Push your project to GitHub
2.  Go to 👉 https://vercel.com
3.  Click New Project
4.  Import your GitHub repository
5.  Use these settings:

| Setting                                    | Value                |
| ------------------------------------------ | ---------------------|
| Framework                                  | **Vite**             |
| Build Command                              | `npm run build`      |
| Output Directory                           | `dist`               |
| Install Command                            | `npm install`         |

6.  Click Deploy

 - ✅ Automatic builds on every push
 - ✅ Free SSL & CDN
 - ✅ Fastest setup

## 2 🔷 Deploy on Netlify
**Option 1: Netlify UI (Recommended)**

1.  Push project to GitHub
2.  Go to 👉 https://netlify.com
3.  Click Add new site → Import from Git
4.  Select your repository
5.  Configure build settings:

| Setting                                    | Value                |
| ------------------------------------------ | -------------------- |
| Build command                              | `npm run build`      |
| Publish directory                          | `dist`               |


6.  Click Deploy site

**Option 2: Netlify CLI**

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```
## 3 🔷 Deploy on GitHub Pages

 GitHub Pages requires a **base path** configuration.

## Step 1: Update vite.config.js

```bash
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/veyil-react/", // repo name
});
```
## Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```
## Step 3: Update package.json

```bash
{
  "homepage": "https://your-username.github.io/veyil-react",
  "scripts": {
    "build": "vite build",
    "deploy": "gh-pages -d dist"
  }
}
```
## Step 4: Deploy

```bash
npm run build
npm run deploy
```

Your site will be live at:

```bash
https://your-username.github.io/veyil-react
```

## ⚠️ Important Notes (All Platforms)

*React Router Fix (Required)*

For Netlify & GitHub Pages, add a redirect rule.

## Netlify **(public/_redirects)**

```bash
/* /index.html 200
```

**GitHub Pages**

Use **HashRouter** OR configure SPA fallback.

## ✅ Recommended Platform Summary

| Platform         | Recommendation                       |
| ---------------- | ------------------------------------ |
| **Vercel**       | ⭐⭐⭐⭐⭐ Best (Fast, easy, auto-deploy) |
| **Netlify**      | ⭐⭐⭐⭐ Very good                       |
| **GitHub Pages** | ⭐⭐ Only for demos                    |


## 🏁 Final Recommendation

- 👉 Use Vercel for production
- 👉 Netlify for backups / client previews
- 👉 GitHub Pages only for demos

## 📝 License

© 2026 Veyil Solutions. All rights reserved.
