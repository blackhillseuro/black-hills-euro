import type { Metadata } from 'next'
import { MapPin, Phone } from 'lucide-react'
import CTASection from '@/components/CTASection'
import { SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Service Area – Rapid City & Nearby Communities',
  description:
    'Black Hills Euro serves Rapid City and nearby communities within about 25 miles — including Box Elder, Summerset, Blackhawk, Piedmont, Rapid Valley, and New Underwood. After-hours European maintenance and diagnostics.',
}

const AREA_DETAILS = [
  'Rapid City',
  'Box Elder',
  'Summerset & Blackhawk',
  'Piedmont',
  'Rapid Valley',
  'New Underwood',
]

export default function ServiceAreaPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Where We Work</span>
          <h1 className="section-title max-w-2xl mb-4">
            Serving Rapid City &amp; Nearby Communities
          </h1>
          <p className="text-[#8a8a8a] text-lg max-w-2xl leading-relaxed">
            Black Hills Euro is based in Rapid City, SD and serves select nearby communities within about 25 miles. If you're unsure whether we reach your area, text us your zip code and we'll confirm.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Cities We Serve</span>
            <h2 className="section-title">Coverage Area</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {AREA_DETAILS.map((area) => (
              <div key={area} className="card flex items-center gap-3 py-4">
                <MapPin size={15} className="text-gold shrink-0" />
                <span className="text-white font-semibold text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Booking an Appointment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Call or Text',
                desc: "Tell us your vehicle, what's going on, and your general location. We'll confirm we can help.",
              },
              {
                step: '02',
                title: 'Pick a Time',
                desc: "We'll schedule a time that works for you, at your home, office, or wherever your car is.",
              },
              {
                step: '03',
                title: 'We Handle It',
                desc: 'We arrive, diagnose, and complete the work on-site. You stay in your routine.',
              },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <div className="text-gold text-2xl font-bold mb-3">{item.step}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Out of area note */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="card border-[#2a2a2a] text-center">
            <p className="text-white font-semibold mb-2">Outside Our Normal Coverage?</p>
            <p className="text-[#777] text-sm leading-relaxed mb-5">
              We occasionally travel beyond our standard area for larger jobs or established customers. Text us your location. The worst we can say is no, and we'll try to point you in the right direction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={SITE.smsHref} className="btn-primary">
                <Phone size={15} />
                Text Your Location
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Book in Your Area?"
        subheadline="Call or text us. We'll confirm availability and get you on the schedule."
      />
    </>
  )
}
