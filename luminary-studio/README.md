# 🌟 Luminary Studio — Digital Design Agency Homepage

A modern, professional Design Agency homepage built with **Next.js 13+ App Router**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Demo

> Run locally with `npm run dev` — see setup instructions below.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 13+ (App Router)** | React framework with SSR + file-based routing |
| **TypeScript** | Type safety and clean code |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Smooth animations and scroll reveals |
| **next/font** | Optimized Google Fonts (Inter + Syne) |
| **next/image** | Optimized image loading |

---

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm 9+ installed

### 1. Clone / Navigate to the project
```bash
cd "Digital Agency Sample Project/luminary-studio"
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 📁 Folder Structure

```
luminary-studio/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, ThemeProvider
│   ├── page.tsx          # Home page — assembles all sections
│   └── globals.css       # Tailwind base + custom CSS
├── components/
│   ├── Navbar.tsx        # Fixed top nav + hamburger menu + dark mode toggle
│   ├── Hero.tsx          # Full-screen animated hero section
│   ├── Services.tsx      # 4 service cards with animations
│   ├── Portfolio.tsx     # 6-project portfolio grid
│   ├── Contact.tsx       # Contact form with validation + success toast
│   ├── Footer.tsx        # Footer with links + social icons
│   └── ThemeToggle.tsx   # Dark/light mode toggle button
├── lib/
│   ├── data.ts           # Static data: services + portfolio projects
│   └── ThemeProvider.tsx # React context for dark/light mode
├── public/
│   └── portfolio/        # Portfolio project thumbnail images
└── README.md
```

---

## ✨ Features

### Core Sections
- **Hero** — Full-screen animated gradient with floating shapes, stats, and CTA buttons
- **Services** — 4 animated service cards (UI/UX, Web Dev, Branding, Digital Marketing)
- **Portfolio** — 6-project grid with hover overlay revealing title, category, tags
- **Contact** — Validated form with loading spinner and animated success toast

### Design & UX
- 🌙 **Dark/Light mode toggle** — persisted to `localStorage`
- 📱 **Fully responsive** — mobile-first with hamburger menu
- ✨ **Framer Motion animations** — scroll reveals, staggered cards, micro-interactions
- 🎨 **Premium dark theme** — deep navy (#0a0f1e) with cyan + purple accents
- 🔠 **Premium typography** — Inter (body) + Syne (headings)
- 🖱️ **Custom scrollbar** — cyan-to-purple gradient

### Technical
- 🔍 **SEO** — Title, meta description, Open Graph, Twitter Card metadata
- 🖼️ **next/image** — Optimized images with lazy loading
- 🔤 **next/font** — Zero layout shift font loading
- 📝 **TypeScript** throughout

---

## 💡 Assumptions & Notes

1. **Contact form**: Frontend-only — shows a success toast after 1.5s simulated delay. No backend email service is connected.
2. **Portfolio images**: 5 AI-generated images + 1 SVG illustration (due to image generation quota).
3. **Portfolio links**: "View Project" links are placeholder `#` hrefs — would link to individual project pages in a full implementation.
4. **Social links**: Placeholder `#` hrefs — would link to real social profiles.
5. **Agency name**: "Luminary Studio" — fictional name created for this assignment.

---

## 🎨 Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `#0a0f1e` | Main dark background |
| Darker BG | `#080c18` | Alternate sections |
| Primary | `#22d3ee` (cyan-400) | CTAs, accents, links |
| Accent | `#a855f7` (purple-500) | Secondary accents |
| Text | `rgba(255,255,255,0.7)` | Body text |

---

## 📄 License

This project was built as a design agency assignment. All rights reserved.
