# Titan Fitness Gym — Production Website

> Karachi's Premier Strength & Conditioning Gym Website  
> Built with Next.js 14, Tailwind CSS, EmailJS & Google reCAPTCHA v2

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** v9+ (comes with Node.js)

---

## 📦 Local Development Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Set Up Environment Variables

Copy the example env file:

```bash
cp .env.example .env.local
```

Then fill in your real values in `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — done!

---

## ⚙️ Environment Variable Setup Guide

### EmailJS Setup (for contact form)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
2. Create an **Email Service** (Gmail, Outlook, etc.) → copy the **Service ID**
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — Sender's name
   - `{{from_email}}` — Sender's email
   - `{{from_phone}}` — Sender's phone
   - `{{message}}` — Message body
   - `{{to_name}}` — Recipient name
4. Copy the **Template ID**
5. Go to **Account** → copy your **Public Key**

### Google reCAPTCHA v2 Setup

1. Go to [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Create a new site with **reCAPTCHA v2 (I'm not a robot checkbox)**
3. Add your domain (e.g., `titanfitnesspk.com` and `localhost` for dev)
4. Copy the **Site Key** (NOT the secret key)

> 💡 For testing locally, a public test key is included by default in the code.

### Google Maps (optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable **Maps Embed API**
3. Create API key and restrict it to your domain

---

## 🏗️ Project Structure

```
titan-fitness/
├── app/
│   ├── layout.tsx           # Root layout (Navbar, Footer, SEO)
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles + Tailwind
│   ├── not-found.tsx        # 404 page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── trainers/
│   │   └── page.tsx         # Trainers page
│   ├── membership/
│   │   └── page.tsx         # Membership & pricing
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky mobile-first navbar
│   │   └── Footer.tsx       # Full footer
│   ├── sections/
│   │   ├── HeroSection.tsx  # Hero with animated text
│   │   ├── StatsSection.tsx # Animated counter stats
│   │   ├── WhyChooseUs.tsx  # Feature highlights
│   │   ├── ServicesOverview.tsx # Services grid
│   │   ├── TrainersPreview.tsx  # Trainer cards
│   │   ├── TestimonialsSection.tsx # Testimonial slider
│   │   └── CTABanner.tsx   # Conversion banner
│   └── ui/
│       ├── PageHero.tsx     # Reusable page hero
│       ├── WhatsAppFloat.tsx # Floating WhatsApp button
│       ├── ContactForm.tsx  # EmailJS + reCAPTCHA form
│       └── MembershipForm.tsx # Membership sign-up form
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## 🌐 Deployment on Vercel

### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option B: GitHub + Vercel Dashboard

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Titan Fitness Gym"
   git remote add origin https://github.com/yourusername/titan-fitness.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**

3. Import your GitHub repository

4. Add **Environment Variables** in the Vercel dashboard:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY
   NEXT_PUBLIC_SITE_URL
   ```

5. Click **Deploy** — Vercel auto-detects Next.js!

---

## ✅ Production Build (Local Test)

```bash
npm run build
npm run start
```

---

## 🎨 Customization Guide

### Update Contact Information
Edit these files:
- `components/layout/Footer.tsx` — address, phone, email
- `app/contact/page.tsx` — contact info array
- `components/ui/WhatsAppFloat.tsx` — WhatsApp number
- `components/sections/CTABanner.tsx` — WhatsApp number & address

### Update Gym Information
- **Name/Brand**: Search for `Titan` across all files
- **Facebook Link**: Replace `https://m.facebook.com/titanfitnesspk/`
- **WhatsApp Number**: Replace `923001234567` across all files

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  accent: { DEFAULT: '#E63946' },  // Red — primary brand color
  gold: { DEFAULT: '#FFB703' },    // Gold — highlight color
}
```

### Update Images
All images use Unsplash URLs. Replace with your own:
- Use `next/image` component
- Add domain to `next.config.js` if using a different host

### Update Pricing
Edit `app/membership/page.tsx` — the `plans` array

---

## 📱 Mobile Features
- ✅ Sticky header with mobile hamburger menu
- ✅ Floating WhatsApp button with pulse animation
- ✅ Large tap-friendly buttons (44px+ touch targets)
- ✅ Mobile-optimized forms
- ✅ Responsive grid layouts

## ⚡ Performance Features
- ✅ `next/image` with automatic WebP conversion
- ✅ Priority loading for above-the-fold images
- ✅ Lazy loading for below-the-fold content
- ✅ Code splitting (automatic with Next.js App Router)
- ✅ Google Fonts loaded via `<link>` with `display=swap`

## 🔒 Security Features
- ✅ All API keys in environment variables
- ✅ Form validation (client-side)
- ✅ reCAPTCHA v2 on all forms
- ✅ Security headers via `vercel.json`
- ✅ No API keys exposed in source code

## 🔍 SEO Features
- ✅ Metadata API (Next.js 14)
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Structured H1/H2 hierarchy
- ✅ Canonical URLs
- ✅ Pakistani fitness keywords
- ✅ `robots` meta tags
- ✅ `site.webmanifest` for PWA

---

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📞 Support

For setup questions, email: **info@titanfitnesspk.com**  
WhatsApp: **+92 300 123 4567**  
Facebook: [Titan Fitness PK](https://m.facebook.com/titanfitnesspk/)

---

*Built with ❤️ for Titan Fitness Gym, Karachi, Pakistan 🇵🇰*
