# Code Cinema Studios - Web Application

Modern digital agency and studio web platform combining high-performance software engineering, real-time interactive game design, photorealistic cinematics, and strategic engineering consulting.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Typography**: Orbitron (Headings/Display) & Inter (Body/UI) via Google Fonts
- **Icons**: [Lucide React](https://lucide.dev/)
- **Canvas FX**: Custom HTML5 Web Canvas cybernetic particle network with mouse repulsion & reactive node linkages
- **State Management**: Reactive React hooks for dynamic scoping calculations, filterable showcase state, and accessible modal overlays

---

## 📁 Component Directory Structure

```
code-cinema-studios/
├── index.html                  # Entry document with typography & meta SEO
├── vite.config.js              # Vite config with React & Tailwind v4 plugins
├── package.json
└── src/
    ├── main.jsx                # Application root mount
    ├── App.jsx                 # Master page layout & shared inquiry state
    ├── index.css               # Design tokens, glassmorphism, glow utilities
    ├── data/
    │   ├── projects.js         # Showcase portfolio dataset with case studies
    │   └── services.js         # Core pillars & competency descriptors
    └── components/
        ├── Navbar.jsx          # Glassmorphism header, cyber scorpion branding & drawer
        ├── HeroCanvas.jsx      # Interactive particle mesh canvas component
        ├── Hero.jsx            # Studio headline, metrics & primary CTAs
        ├── Services.jsx        # 4 Core Pillar cards with interactive glow
        ├── Showcase.jsx        # Dynamic filterable portfolio grid
        ├── ProjectModal.jsx    # Accessible modal dialog with architecture details
        ├── ScopeEstimator.jsx  # Interactive sprint timeline & roadmap calculator
        ├── Philosophy.jsx      # Studio manifesto & precision tech graphic
        ├── Contact.jsx         # Consultation inquiry form with auto-prefill
        └── Footer.jsx          # Studio directory, socials & legal disclosures
```

---

## 🚀 Development & Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Accessible at [http://localhost:5173/](http://localhost:5173/)

### 3. Build for Production
```bash
npm run build
```
Generates optimized output in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```
