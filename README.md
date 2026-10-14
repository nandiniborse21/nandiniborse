# Nandini Brijlal Borse — Personal Portfolio

An editorial, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for showcasing academic credentials, core technical skillsets, and engineering projects with crisp typography and subtle micro-interactions.

---

## 🚀 Quick Start

To preview and run the website locally:

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start local development server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`) in your browser.

---

## ✏️ How to Customize Your Portfolio

All your details, links, text, and project information are organized in a single, centralized configuration file:

👉 **[`src/data/portfolioData.js`](file:///c:/Users/USER/OneDrive/Desktop/Portfolio/src/data/portfolioData.js)**

### Updating Your Information:
- **Email & Socials**: Open `portfolioData.js` and edit `email`, `linkedin`, and `github` links.
- **Projects**: Edit or add projects under the `projects` array with your own descriptions, GitHub repository URLs, and live demo links.
- **Resume**: Replace the sample `Nandini_Borse_Resume.pdf` file located in the [`public/`](file:///c:/Users/USER/OneDrive/Desktop/Portfolio/public) folder with your updated resume PDF.

---

## 🛠️ Project Architecture

```
Portfolio/
├── public/
│   ├── Nandini_Borse_Resume.pdf # Downloadable resume PDF
│   └── favicon.svg              # Brand monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Editorial fixed header & mobile menu
│   │   ├── Hero.jsx             # Hero section with status badges & CTA
│   │   ├── About.jsx            # Academic story & core engineering pillars
│   │   ├── Education.jsx        # B.Tech IT & Diploma (88.65%) timeline
│   │   ├── Skills.jsx           # Categorized skills & filter pills
│   │   ├── Projects.jsx         # Featured projects with tags & repo links
│   │   ├── Achievements.jsx     # Honors & academic distinction cards
│   │   ├── Contact.jsx          # 1-click email copy & interactive message form
│   │   ├── Footer.jsx           # Clean editorial footer & back-to-top
│   │   └── SocialIcons.jsx      # Clean vector SVG icons for GitHub, LinkedIn
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content
│   ├── App.jsx                  # Main application composition
│   ├── index.css                # Tailwind CSS & editorial typography
│   └── main.jsx                 # React root render
├── index.html                   # HTML entry with Google Fonts
└── package.json
```

---

## 🌐 Free Deployment Options

### Deploy to Vercel (Recommended):
1. Push this folder to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository—Vercel will detect Vite automatically.
4. Click **Deploy**!

### Deploy to GitHub Pages:
Run `npm run build` to generate the production bundle in `dist/`.
