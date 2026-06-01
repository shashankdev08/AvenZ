# shashank.dev — Portfolio

A modern, dark-themed developer portfolio built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. Features 5 switchable premium themes, smooth micro-animations, lazy-loaded sections, and full accessibility support.

🔗 **Live**: [iamshashank.tiiny.site](https://iamshashank.tiiny.site/)

---

## ✨ Features

- **5 Premium Themes** — Noir & Gold, Arctic Aurora, Obsidian Fire, Stealth Carbon, Neon Synthwave — switchable via a palette dropdown, persisted in localStorage
- **Animated Hero** — Typing effect, floating particles, gradient text, shimmer CTA buttons, noise texture overlay
- **Scroll Animations** — Intersection Observer–powered fade-ins with staggered delays
- **Animated Counters** — Ease-out cubic counting triggered on scroll into view
- **Timeline** — Gradient vertical line with hoverable node icons for work experience
- **Animated Card Borders** — Gradient border glow on hover across project, stat, and certification cards
- **Scroll-to-Top** — Fixed button appears after 500px scroll
- **Section Dividers** — Gradient fade-in/out lines between each section
- **Responsive** — Fully responsive from mobile to ultrawide
- **Accessible** — `prefers-reduced-motion` support, `focus-visible` rings, `aria-label` attributes, semantic HTML
- **Code-Split** — React.lazy + Suspense for all below-the-fold sections
- **Debounced Scroll** — rAF-throttled scroll spy with passive listeners

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 19 + TypeScript               |
| Styling     | Tailwind CSS v4 + Custom CSS        |
| Build       | Vite 8                              |
| Icons       | Lucide React + Custom SVG           |
| Fonts       | Inter (sans) + Fira Code (mono)     |
| Deployment  | Static HTML (Tiiny.site / Vercel / Netlify) |

---

## 📂 Project Structure

```
Frontend/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── About.tsx        # Bio + animated stat counters
│   │   ├── AIExplorer.tsx   # AI tools & agent building section
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx      # Contact form + info cards
│   │   ├── Counter.tsx      # Animated number counter (React.memo)
│   │   ├── Experience.tsx   # Timeline with career history
│   │   ├── FadeIn.tsx       # Scroll-triggered fade-in wrapper (React.memo)
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx         # Full-screen hero with typing effect
│   │   ├── Navbar.tsx       # Sticky nav + theme switcher
│   │   ├── Projects.tsx     # Project cards grid
│   │   ├── Skills.tsx       # Categorized skill pills
│   │   └── SocialIcons.tsx  # Custom GitHub/LinkedIn SVG icons
│   ├── App.tsx              # Root layout + lazy loading + scroll spy
│   ├── index.css            # Themes, animations, utility classes
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/shashankdev08/Portfolio.git
cd Portfolio/Frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is written to `dist/`. Deploy the contents to any static host.

---

## 🎨 Themes

Switch themes via the 🎨 palette icon in the navbar. Each theme sets CSS custom properties on the `<html>` element:

| Theme            | Base          | Accent        | Vibe              |
|------------------|---------------|---------------|--------------------|
| Noir & Gold      | `#000000`     | `#d4a853`     | Luxury, elegant    |
| Arctic Aurora    | `#0d1117`     | `#22d3ee`     | Cool, professional |
| Obsidian Fire    | `#1a1a2e`     | `#f97316`     | Bold, energetic    |
| Stealth Carbon   | `#101010`     | `#ef4444`     | Minimal, stark     |
| Neon Synthwave   | `#0a0e1a`     | `#ec4899`     | Retro-futuristic   |

---

## ⚡ Performance

- **Code splitting** — 14 chunks via React.lazy (main bundle ~65 kB gzip)
- **Font preconnect** — DNS/TLS handshake starts before CSS loads
- **Passive scroll listeners** — No jank from scroll event handlers
- **GPU-accelerated animations** — `will-change: transform` on particles, hero gradient, cards
- **React.memo** — FadeIn and Counter components skip unnecessary re-renders
- **Build time** — ~1s production build

---

## 📬 Contact

- **Email**: [helloiamshashank@gmail.com](mailto:helloiamshashank@gmail.com)
- **LinkedIn**: [linkedin.com/in/shashankdev](https://linkedin.com/in/shashankdev)
- **GitHub**: [github.com/shashankdev08](https://github.com/shashankdev08)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
