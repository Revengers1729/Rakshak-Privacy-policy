# Rakshak — Autonomous Personal Safety Ecosystem

Official landing page and showcase for **Rakshak**, an autonomous personal safety application and technology ecosystem.

## 🚀 Quick Start (Local Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The built static files will be in the `dist/` directory.

---

## 🌐 Hosting on GitHub Pages

This project is pre-configured for GitHub Pages hosting:

### Option 1: Automatic Deployment via GitHub Actions (Recommended)

1. **Create a new repository** on GitHub.
2. **Push your code** to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Rakshak landing page"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site whenever you push to `main`!

### Option 2: Manual / Custom Hosting (Vercel, Netlify, Cloudflare Pages)

Because `vite.config.ts` uses relative asset resolution (`base: './'`), the output `dist/` directory can be uploaded and served from any static web host or subdirectory without path configuration issues.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Motion
- **Build Tool**: Vite 6
