# A Little Reminder for You 💙

A beautiful, cute, soft, romantic single-page apology website created with love.

Designed with a dreamy pastel-blue romance aesthetic, soft floating clouds, sparkling stars, floating hearts, an adorable bespoke teddy bear holding a heart, and an interactive hug button that bursts with love.

---

## 🎨 Colour Palette

- **Main background:** `#EAF5FF`
- **Secondary background:** `#F5FAFF`
- **Soft baby blue:** `#D6EBFF`
- **Pastel blue:** `#B8D8F5`
- **Primary blue:** `#80B9E8`
- **Deep accent blue:** `#477FAF`
- **Heading colour:** `#35658F`
- **Body text:** `#60778C`
- **Card background:** `#FFFFFF`
- **Soft shadow:** `rgba(86, 145, 190, 0.12)`

---

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (smooth romantic entrance animations, drifting clouds, floating hearts, teddy bear breathing & bounce, heart burst)
- **Lucide React**

---

## 📂 Project Structure

```
sorryyy/
├── index.html                           # Romantic Google Fonts & mobile viewport setup
├── package.json                         # Dependencies & scripts
├── postcss.config.js                    # PostCSS configuration
├── tailwind.config.js                   # Custom dreamy blue palette & animations
├── tsconfig.json                        # TypeScript configuration
├── tsconfig.node.json                   # TypeScript Node configuration
├── vite.config.ts                       # Vite configuration
└── src/
    ├── App.tsx                          # Single-screen responsive container
    ├── index.css                        # Dreamy blue ambient styling & base styles
    ├── main.tsx                         # React entry point
    └── components/
        ├── ApologyCard.tsx              # Heartfelt apology message card with dividers
        ├── BackgroundDecorations.tsx    # Drifting clouds, floating blue hearts, stars & bubbles
        ├── Footer.tsx                   # Romantic note footer
        ├── Header.tsx                   # "A LITTLE NOTE FOR YOU ♡", greeting & subtitle
        ├── HugInteraction.tsx           # Interactive hug section, speech bubble & heart burst
        └── TeddyBear.tsx                # Bespoke SVG teddy bear holding a blue heart
```

---

## 🚀 Quick Start & Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.

### 4. Preview the production build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploying to Vercel

1. **Option A (GitHub):**
   - Push this repository to GitHub.
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Select your repository.
   - Framework Preset will automatically detect **Vite**.
   - Click **Deploy**.

2. **Option B (Vercel CLI):**
   ```bash
   npm i -g vercel
   vercel
   ```

### Deploying to Netlify

1. **Option A (Netlify Drag & Drop):**
   - Run `npm run build`.
   - Drag and drop the `dist/` folder directly onto [Netlify Drop](https://app.netlify.com/drop).

2. **Option B (GitHub):**
   - Connect your GitHub repository in Netlify.
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click **Deploy**.
