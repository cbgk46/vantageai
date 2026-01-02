# AI Consulting Website

A professional AI consulting website built with Next.js 14, optimized for cold outreach credibility and lead generation.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Raleway/Outfit (headings), Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── home/               # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── CredibilityStatement.tsx
│   │   ├── IndustryProblems.tsx
│   │   ├── Framework.tsx
│   │   ├── Proof.tsx
│   │   ├── WhyTrustMe.tsx
│   │   └── FinalCTA.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
└── ...
```

## Color Palette

- **Primary**: Deep Slate (#0f172a)
- **Primary Accent**: Warm Coral (#f87171)
- **Secondary Accent**: Cool Teal (#2dd4bf)

## Features

- ✅ Fully responsive design
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized
- ✅ Modern, professional design
- ✅ All 7 homepage sections implemented

## Next Steps

1. Add professional headshot to `/public/headshot.jpg` (update WhyTrustMe component)
2. Add remaining pages (Services, Industries, Assessment, etc.)
3. Set up analytics (Google Analytics, LinkedIn Insight Tag)
4. Deploy to Vercel

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then push to your repository and connect to Vercel.

