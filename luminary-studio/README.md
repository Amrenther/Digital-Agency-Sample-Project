<div align="center">
  <br />
  <br />

  <h1 align="center">🌟 Luminary Studio</h1>

  <p align="center">
    A premium, modern Digital Design Agency homepage built with Next.js 13+ App Router, Tailwind CSS, and Framer Motion.
  </p>

  <p align="center">
    <a href="#features"><strong>Features</strong></a> ·
    <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#architecture"><strong>Architecture</strong></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

<br />

## 🚀 Overview

**Luminary Studio** is a fictional digital design agency portfolio. It demonstrates modern web development best practices, delivering a highly performant, accessible, and visually stunning user experience. 

Designed with a sleek "dark mode by default" aesthetic, it features smooth scroll-triggered animations, interactive hover states, and responsive layouts to showcase creative work effectively.

---

## ✨ Features

- **Full-Screen Animated Hero**: Dynamic gradient orbs and pure CSS floating geometric shapes.
- **Service Offerings Grid**: Animated cards showcasing agency capabilities with subtle hover glows.
- **Dynamic Portfolio Grid**: A responsive masonry-style grid featuring project thumbnails with sleek gradient hover overlays revealing project details.
- **Interactive Contact Form**: Client-side validated form with loading states and a Framer Motion animated success toast notification.
- **Dark/Light Mode Toggle**: Built-in theme switcher that persists user preference in `localStorage`.
- **Responsive Glassmorphism Navigation**: A sticky header that blurs the background on scroll, complete with a mobile-friendly hamburger drawer menu.
- **Performance Optimized**: Uses `next/image` for image optimization and `next/font` to prevent Cumulative Layout Shift (CLS).
- **SEO Ready**: Configured with Next.js Metadata API for Title, Meta Description, Open Graph, and Twitter Cards.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | [Next.js 13+ (App Router)](https://nextjs.org/) | React framework providing SSR, SSG, and file-based routing. |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Static typing for cleaner, more reliable, and maintainable code. |
| **Styling** | [Tailwind CSS (v4)](https://tailwindcss.com/) | Utility-first CSS framework for rapid UI development without leaving the HTML. |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | Declarative animation library for React, handling scroll reveals and micro-interactions. |
| **Fonts** | [Google Fonts](https://fonts.google.com/) | `Inter` for body text and `Syne` for bold, modern headings. |

---

## 🏁 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (Version 18.17.0 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/luminary-studio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd luminary-studio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Architecture

The project is structured around the Next.js App Router pattern, emphasizing separation of concerns between UI components and static data.

```text
luminary-studio/
├── app/
│   ├── layout.tsx           # Global HTML shell, SEO metadata, Font configuration
│   ├── page.tsx             # Main landing page assembling all section components
│   └── globals.css          # Global Tailwind directives and CSS variables
├── components/
│   ├── Contact.tsx          # Contact form section
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section with animations
│   ├── Navbar.tsx           # Navigation bar (desktop & mobile)
│   ├── Portfolio.tsx        # Project showcase grid
│   ├── Services.tsx         # Agency services grid
│   └── ThemeToggle.tsx      # Dark/Light mode switch button
├── lib/
│   ├── data.ts              # Centralized static data (services, projects)
│   └── ThemeProvider.tsx    # React Context provider for theme management
└── public/
    └── portfolio/           # Static image assets for the portfolio
```

### Design Pattern Highlights
- **Client Components**: Because the site relies heavily on `framer-motion` animations and browser APIs (`window`, `localStorage`), most components in the `/components` directory are marked with `"use client"`.
- **Data Abstraction**: To keep JSX clean, all text copy for services and portfolio projects is abstracted into `lib/data.ts`. This makes the application easily adaptable to a Headless CMS in the future.
- **CSS Theming**: Instead of relying purely on complex Tailwind dark mode classes on every element, light mode is implemented via an efficient CSS override in `globals.css` that targets the `.light` class on the `<html>` tag.

---

## 🎨 Color Palette & Typography

**Typography:**
- **Headings**: Syne (Weights: 700, 800)
- **Body**: Inter (Weights: 400, 500, 600)

**Core Colors:**
- **Background**: `#0a0f1e` (Deep Navy)
- **Primary Accent**: `#22d3ee` (Cyan-400)
- **Secondary Accent**: `#a855f7` (Purple-500)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Built with ❤️ by Luminary Studio
</div>
