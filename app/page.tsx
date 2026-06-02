import type { Metadata } from 'next'
import { CheckCircle, Phone, MessageSquare, MapPin } from 'lucide-react'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import CallbackForm from '@/components/CallbackForm'
import { SITE, SERVICES, SERVICE_AREAS, HOME_FAQS } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Black Hills Euro – After-Hours European Maintenance & Diagnostics | Rapid City, SD',
  description:
    'After-hours European maintenance and diagnostics in Rapid City, SD. BMW, Mercedes-Benz, Audi, VW, Porsche, Volvo, and Land Rover. We come to your home or office. Call or text to book.',
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoRepair'],
  name: 'Black Hills Euro',
  description:
    'After-hours European maintenance and diagnostics serving Rapid City and nearby communities. BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Volvo, and Land Rover.',
  telephone: SITE.phone,
  url: SITE.url,
  foundingDate: SITE.founded,
  areaServed: SERVICE_AREAS.map((area) => ({
    '@type': 'City',
    name: area,
    containedInPlace: { '@type': 'State', name: 'South Dakota' },
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
}

const TRUST_ITEMS = [
  { label: 'European Vehicles Only', sub: 'BMW, Mercedes, Audi, VW, Porsche, Volvo, Land Rover' },
  { label: 'We Come to You', sub: 'Home, office, or wherever your car is parked' },
  { label: 'Factory-Level Diagnostics', sub: 'OE scan tools — every module, not just check engine' },
  { label: '25-Mile Service Radius', sub: 'Rapid City and nearby communities within about 25 miles' },
]

const WHY_CHOOSE = [
  'No shop overhead. Rates that reflect it.',
  'OE-spec fluids and parts, not whatever is on the shelf',
  'Factory scan tools that access every module in your car',
  'Straight quote before we start — no surprise invoices',
  'Honest about scope — we tell you upfront if something needs a shop',
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: "Tell Us What's Going On",
    desc: "Share your vehicle, what's happening, and your location. We'll confirm we can help and give you a straight answer.",
  },
  {
    step: '02',
    title: 'Get a Quote and Schedule',
    desc: "We quote the job before scheduling. Pick a time that works — we come to your home, office, or wherever the car is.",
  },
  {
    step: '03',
    title: 'We Handle It On-Site',
    desc: "We show up, get the work done on-site, and let you know when it's finished. You stay in your routine.",
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Rapid City, SD</span>
          <h1 className="section-title max-w-2xl mb-5">
            After-Hours European Maintenance & Diagnostics
          </h1>
          <p className="text-[#8a8a8a] text-lg max-w-xl leading-relaxed mb-10">
            BMW, Mercedes-Benz, Audi, VW, Porsche, Volvo, and Land Rover. Factory-correct service at your home or office in Rapid City and nearby communities — done on evenings and weekends so you don't lose a workday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={SITE.phoneHref} className="btn-primary text-base py-4 px-8">
              <Phone size={17} />
              Call {SITE.phone}
            </a>
            <a href={SITE.smsHref} className="btn-outline text-base py-4 px-8">
              <MessageSquare size={17} />
              Send a Text
            </a>
            <a href="#request-call" className="btn-outline text-base py-4 px-8">
              Request a Call Back
            </a>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="py-10 px-4 sm:px-6 border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <p className="text-white text-sm font-semibold">{item.label}</p>
              <p className="text-[#666] text-xs leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        className="py-20 px-4 sm:px-6 relative"
        style={{
          backgroundImage: 'url(/images/mercedes-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(0, 0, 0, 0.72)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              On-site European auto repair with the right tools, the right fluids, and a straight quote before we start.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">The Process</span>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="card text-center">
                <div className="text-gold text-2xl font-bold mb-3">{item.step}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Why Black Hills Euro</span>
              <h2 className="section-title mb-6">Built for European Vehicles. Not for Everyone.</h2>
              <p className="text-[#777] text-sm leading-relaxed mb-8">
                We work on European vehicles only. That means we know what breaks on these cars, what it takes to fix them, and what the correct fluids and parts are.
              </p>
              <ul className="space-y-3">
                {WHY_CHOOSE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-[#ccc] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Hours</p>
              <ul className="space-y-1.5 text-[#777] text-sm">
                <li>{SITE.hours.weekdays}</li>
                <li>{SITE.hours.saturday}</li>
                <li>{SITE.hours.sunday}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">About the Owner</p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* TODO: Replace placeholder circle with a real photo */}
              <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] shrink-0 flex items-center justify-center">
                <span className="text-[#444] text-xs">Photo</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Jay Valentino</h3>
                <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
                  Owner &amp; Technician, Black Hills Euro
                </p>
                <p className="text-[#777] text-sm leading-relaxed">
                  I started Black Hills Euro to bring another honest and reliable European repair option to Rapid City. My background started with GM, then Mercedes-Benz at a dealership in California. I know European owners here do not always have a lot of local options, and good shops can get booked out because the demand is real. I am not here to replace anyone or oversell repairs — I just want to give people another dependable place to turn for maintenance, diagnostics, and straightforward work done the right way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callback Form */}
      <section id="request-call" className="py-20 px-4 sm:px-6 scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Not Ready to Call?</span>
            <h2 className="section-title">Request a Call Back</h2>
            <p className="section-subtitle">
              Fill this out and we will reach out within a few hours during business hours.
            </p>
          </div>
          <CallbackForm />
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={16} className="text-gold" />
            <h2 className="text-white font-semibold text-lg">Service Area</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-[#141414] border border-[#2a2a2a] rounded text-[#bbb] text-xs"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-[#555] text-sm">
            Based in Rapid City &middot; {SITE.serviceRadius} &middot;{' '}
            <a href={SITE.smsHref} className="text-gold hover:underline">
              Text your zip if you are unsure
            </a>
          </p>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="section-label">Follow the Work</span>
          <h2 className="text-2xl font-bold text-white mb-3">Find Us on Instagram</h2>
          <p className="text-[#777] text-sm leading-relaxed mb-8">
            Current jobs, finished work, and a look at what it actually takes to service these cars right. No filler.
          </p>
          <a
            href={SITE.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            @{SITE.instagram}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={HOME_FAQS} label="Common Questions" title="What People Ask Before Booking" />

      <CTASection
        headline="Ready to Book?"
        subheadline="Call or text with your vehicle and what is going on. We will give you a straight answer and a fair price."
      />
    </>
  )
}
