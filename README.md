# TrendwatchAI Landing Page

Modern Next.js 14 landing page for TrendwatchAI — AI-powered competitor tracking platform for Reels, TikTok & Shorts.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![License](https://img.shields.io/badge/License-Commercial-green)

---

## 📋 Table of Contents

- [Requirements](#-requirements)
- [Quick Start (Local Development)](#-quick-start-local-development)
- [Build for Production](#-build-for-production)
- [Deployment Guide](#-deployment-guide)
  - [Vercel (Recommended)](#option-1-vercel-recommended--free)
  - [GitHub Pages](#option-2-github-pages-free)
  - [VPS / Dedicated Server](#option-3-vps--dedicated-server-nginx)
  - [Other Hosting](#option-4-other-static-hosting)
- [Customization](#-customization-guide)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## 💻 Requirements

Before you begin, ensure you have the following installed:

| Software | Version            | Download Link                      |
| -------- | ------------------ | ---------------------------------- |
| Node.js  | 18.0 or higher     | [nodejs.org](https://nodejs.org)   |
| npm      | 9.0 or higher      | Included with Node.js              |
| Git      | Any recent version | [git-scm.com](https://git-scm.com) |

**Check your versions:**

```bash
node --version   # Should show v18.x.x or higher
npm --version    # Should show 9.x.x or higher
git --version    # Should show git version x.x.x
```

---

## 🚀 Quick Start (Local Development)

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/trendwatch-nextjs.git
cd trendwatch-nextjs
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (React, Next.js, TypeScript, etc.)

### Step 3: Start Development Server

```bash
npm run dev
```

### Step 4: Open in Browser

```
http://localhost:3000
```

You should see the landing page. Any changes you make to the code will automatically refresh the browser.

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

This command:

1. Compiles TypeScript to JavaScript
2. Optimizes all assets (CSS, images)
3. Creates a static `out/` folder with all files

**Test the production build locally:**

```bash
npx serve out
```

Then open `http://localhost:3000` to verify everything works.

---

## 🌐 Deployment Guide

### Option 1: Vercel (Recommended — Free)

Vercel is the company behind Next.js. Deployment is automatic and free.

**Steps:**

1. **Create Vercel account:**

   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import project:**

   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Done!**
   - Your site is live at `https://your-project.vercel.app`
   - Every push to `main` branch auto-deploys

**Custom domain:**

- Go to Project Settings → Domains
- Add your domain (e.g., `trendwatch.ai`)
- Update DNS records as instructed

---

### Option 2: GitHub Pages (Free)

Host directly on GitHub for free.

**Steps:**

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**

   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select "GitHub Actions"

3. **Create workflow file:**

   The project already includes `.github/workflows/deploy.yml` — no action needed!

4. **Wait for deployment:**
   - Go to Actions tab to see progress
   - Your site will be at `https://USERNAME.github.io/REPO_NAME`

**Custom domain:**

- Create file `public/CNAME` with your domain:
  ```
  trendwatch.ai
  ```
- Update DNS: Add CNAME record pointing to `USERNAME.github.io`

---

### Option 3: VPS / Dedicated Server (Nginx)

For full control, deploy to your own server.

**Prerequisites:**

- Ubuntu 20.04+ server
- SSH access
- Domain pointed to server IP

**Step 1: Connect to server**

```bash
ssh root@your-server-ip
```

**Step 2: Install Node.js**

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Step 3: Install Nginx**

```bash
sudo apt update
sudo apt install nginx -y
```

**Step 4: Clone and build project**

```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/trendwatch-nextjs.git
cd trendwatch-nextjs
npm install
npm run build
```

**Step 5: Configure Nginx**

Create config file:

```bash
sudo nano /etc/nginx/sites-available/trendwatch
```

Paste this configuration:

```nginx
server {
    listen 80;
    server_name trendwatch.ai www.trendwatch.ai;

    root /var/www/trendwatch-nextjs/out;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

**Step 6: Enable site**

```bash
sudo ln -s /etc/nginx/sites-available/trendwatch /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**Step 7: Add SSL (HTTPS)**

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d trendwatch.ai -d www.trendwatch.ai
```

**Updating the site:**

```bash
cd /var/www/trendwatch-nextjs
git pull
npm install
npm run build
```

---

### Option 4: Other Static Hosting

The `out/` folder can be uploaded to any static hosting:

| Service                       | How to Deploy                                                               |
| ----------------------------- | --------------------------------------------------------------------------- |
| **Netlify**                   | Drag & drop `out` folder to [netlify.com](https://netlify.com)              |
| **Cloudflare Pages**          | Connect GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com) |
| **AWS S3**                    | Upload `out` folder, enable static website hosting                          |
| **Firebase Hosting**          | `firebase init` → `firebase deploy`                                         |
| **DigitalOcean App Platform** | Connect GitHub repo                                                         |

---

## ✏️ Customization Guide

### Change Text Content

All text is in component files under `src/components/`:

| File                 | Content                              |
| -------------------- | ------------------------------------ |
| `Hero.tsx`           | Main headline, subtitle, CTA buttons |
| `ValueProps.tsx`     | 4 value proposition cards            |
| `HelpingSection.tsx` | "How we help" section                |
| `Features.tsx`       | Feature cards with screenshots       |
| `Pricing.tsx`        | Pricing plans and features           |
| `Bonuses.tsx`        | Bonus offers                         |
| `FAQ.tsx`            | Frequently asked questions           |
| `Footer.tsx`         | Footer links and copyright           |

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: #6366f1; /* Main accent (buttons, links) */
  --primary-dark: #4f46e5; /* Hover state */
  --secondary: #1e1b4b; /* Dark text */
  --background: #ffffff; /* Page background */
}

[data-theme="dark"] {
  --primary: #818cf8; /* Lighter for dark mode */
  --background: #0f0a1f; /* Dark background */
}
```

### Change Images

**Option A: Use URLs**
Replace image URLs directly in component files.

**Option B: Use local images**

1. Add images to `/public/images/` folder
2. Reference as `/images/your-image.png` in code

### Change Contact Links

Search and replace in all files:

- `t.me/olegmazunin` → Your Telegram username
- Email addresses
- Social media links

### Add Google Calendar

In `BookSection.tsx`, replace the iframe URL:

```tsx
<iframe
  src="https://calendar.google.com/calendar/appointments/YOUR_CALENDAR_ID"
  ...
/>
```

---

## 📁 Project Structure

```
trendwatch-nextjs/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages auto-deploy
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (meta tags, fonts)
│   │   ├── page.tsx        # Main page (assembles components)
│   │   └── globals.css     # Global styles & CSS variables
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with animation
│   │   ├── ValueProps.tsx  # Value propositions
│   │   ├── Features.tsx    # Features with lightbox
│   │   ├── Pricing.tsx     # Pricing cards
│   │   ├── FAQ.tsx         # Accordion FAQ
│   │   ├── Footer.tsx      # Footer
│   │   ├── ThemeProvider.tsx # Dark/light theme
│   │   └── *.module.css    # Component styles
│   └── context/
│       └── ThemeContext.tsx # Theme state management
├── public/                  # Static files (favicon, images)
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

---

## 🛠️ Tech Stack

| Technology        | Purpose                            |
| ----------------- | ---------------------------------- |
| **Next.js 14**    | React framework with App Router    |
| **TypeScript**    | Type-safe JavaScript               |
| **CSS Modules**   | Scoped component styles            |
| **React Context** | Theme state management             |
| **next/image**    | Optimized image loading            |
| **Static Export** | Pre-rendered HTML for fast loading |

---

## ❓ Troubleshooting

### "Module not found" error

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use

```bash
npm run dev -- -p 3001
```

### Images not loading

- Check that image URLs are accessible
- For local images, ensure they're in `/public` folder
- Check `next.config.js` has correct `remotePatterns`

### Build fails on GitHub Pages

- Ensure `.github/workflows/deploy.yml` exists
- Check Actions tab for error details
- Verify Node.js version in workflow matches local

### Dark mode not working

- Clear browser localStorage
- Check ThemeProvider wraps the app in `layout.tsx`

---

## 📄 License

**Commercial License**

This project is licensed for commercial use by the purchasing party.

✅ You may:

- Use for commercial purposes
- Modify the code
- Deploy to any hosting
- Use on multiple domains (owned by you)

❌ You may not:

- Resell the source code
- Redistribute as a template
- Remove copyright notices

© 2026 All rights reserved.
