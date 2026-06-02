# Black Hills Euro – Getting Started

## First-Time Setup

```bash
cd black-hills-euro
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

---

## The One File You Need to Edit First

**`lib/siteData.ts`** — everything is centralized here:

- `SITE.phone` and `SITE.phoneHref` — your real phone number
- `SITE.smsHref` — for the "Text Us" buttons
- `SITE.email` and `SITE.emailHref` — your real email
- `SITE.url` — your real domain (for SEO/sitemap)
- `SITE.hours` — your actual business hours
- `SERVICE_AREAS` — add or remove cities
- `SERVICES` — edit service names and descriptions

Every button, footer line, and CTA pulls from this file automatically.

---

## File Structure

```
black-hills-euro/
├── app/                        Next.js pages (App Router)
│   ├── layout.tsx              Global layout: header, footer, sticky CTA
│   ├── globals.css             Global styles + Tailwind utilities
│   ├── page.tsx                Home page
│   ├── services/page.tsx       Services overview
│   ├── bmw-repair/page.tsx     BMW-specific page
│   ├── mercedes-repair/page.tsx Mercedes-specific page
│   ├── euro-repair/page.tsx    Audi, VW, Porsche, Volvo, Land Rover
│   ├── service-area/page.tsx   Coverage area
│   ├── about/page.tsx          About the business
│   ├── contact/page.tsx        Contact info + booking
│   ├── sitemap.ts              Auto-generated sitemap.xml
│   └── robots.ts               Auto-generated robots.txt
│
├── components/                 Reusable building blocks
│   ├── Header.tsx              Sticky nav with mobile menu
│   ├── Footer.tsx              4-column footer
│   ├── CTASection.tsx          Call-to-action section (used on every page)
│   ├── FAQSection.tsx          Accordion FAQ (used on multiple pages)
│   ├── ServiceCard.tsx         Card for a single service
│   └── StickyMobileCTA.tsx     Fixed bottom bar on phones
│
└── lib/
    └── siteData.ts             ← EDIT THIS FIRST
```

---

## Common Edits

### Change the phone number
Open `lib/siteData.ts` and update:
```ts
phone: '(605) 555-0000',
phoneHref: 'tel:+16055550000',
smsHref: 'sms:+16055550000',
```

### Add a service area city
In `lib/siteData.ts`, add to `SERVICE_AREAS`:
```ts
export const SERVICE_AREAS = [
  'Rapid City',
  'Your New City',  // add here
  ...
]
```

### Change business hours
```ts
hours: {
  weekdays: 'Mon – Fri: 8:00 AM – 5:00 PM',
  saturday: 'Sat: Closed',
  sunday: 'Sun: Closed',
},
```

### Edit page copy
Each page is a single file in `app/`. The text is written inline — just find and edit the strings.

### Add a new FAQ
In `lib/siteData.ts`, add to `HOME_FAQS`:
```ts
{
  question: 'Your question here?',
  answer: 'Your answer here.',
},
```

Or add page-specific FAQs directly in the page file (see `bmw-repair/page.tsx` for an example).

---

## Deploying

The easiest free option is Vercel:

1. Push this folder to a GitHub repo
2. Go to vercel.com and import the repo
3. Vercel detects Next.js automatically — just click Deploy

Update `SITE.url` in `lib/siteData.ts` to your real domain after deploying.

---

## Color Scheme

Defined in `tailwind.config.ts`:
- **Gold accent**: `#c9a84c` (used for CTAs, highlights, icons)
- **Background**: `#0a0a0a`
- **Card surface**: `#141414`
- **Muted text**: `#8a8a8a`

To change the accent color, update `gold.DEFAULT` in `tailwind.config.ts`.
