import type { Metadata } from 'next'
import { Phone, MessageSquare, Mail, Clock, MapPin, AlertCircle } from 'lucide-react'
import { SITE, SERVICE_AREAS } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Contact – Schedule After-Hours Euro Service',
  description:
    'Contact Black Hills Euro to schedule after-hours European maintenance and diagnostics in Rapid City, SD. Call or text to book. We come to your home or office.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Get in Touch</span>
          <h1 className="section-title max-w-xl mb-4">
            Schedule Your Service
          </h1>
          <p className="text-[#8a8a8a] text-lg max-w-xl leading-relaxed">
            The fastest way to book is a call or text. Tell us your vehicle, what's going on, and your location — we'll take it from there.
          </p>
        </div>
      </section>

      {/* Main Contact */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Call / Text */}
            <div className="card flex flex-col gap-6">
              <div>
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">Fastest Response</p>
                <h2 className="text-2xl font-bold text-white">Call or Text</h2>
              </div>
              <p className="text-[#777] text-sm leading-relaxed">
                Calling or texting gets you a same-day response in most cases. Let us know your vehicle make, model, year, and what's happening — we'll give you a straight answer.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={SITE.phoneHref}
                  className="btn-primary text-base py-4 justify-center"
                >
                  <Phone size={18} />
                  Call {SITE.phone}
                </a>
                <a
                  href={SITE.smsHref}
                  className="btn-outline text-base py-4 justify-center"
                >
                  <MessageSquare size={18} />
                  Text {SITE.phone}
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="card">
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={18} className="text-gold shrink-0" />
                  <h3 className="text-white font-semibold">Email</h3>
                </div>
                <p className="text-[#777] text-sm mb-3">
                  For non-urgent questions or parts inquiries.
                </p>
                <a href={SITE.emailHref} className="text-gold text-sm hover:underline">
                  {SITE.email}
                </a>
              </div>

              {/* Hours */}
              <div className="card">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-gold shrink-0" />
                  <h3 className="text-white font-semibold">Hours</h3>
                </div>
                <ul className="space-y-2 text-[#777] text-sm">
                  <li>{SITE.hours.weekdays}</li>
                  <li>{SITE.hours.saturday}</li>
                  <li>{SITE.hours.sunday}</li>
                </ul>
              </div>

              {/* Location */}
              <div className="card">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={18} className="text-gold shrink-0" />
                  <h3 className="text-white font-semibold">Location</h3>
                </div>
                <p className="text-[#777] text-sm leading-relaxed">
                  No physical shop — we come to you. Home, office, or any accessible location within our service area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Have Ready */}
      <section className="py-16 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Before You Call</span>
            <h2 className="section-title">What to Have Ready</h2>
            <p className="section-subtitle">
              Having this info speeds up your booking significantly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Year, make, and model of your vehicle',
              'VIN (if available — helps confirm the exact vehicle and parts)',
              'Your zip code or general area',
              "A brief description of what's happening",
              'Any warning lights that are on',
              'Preferred days and times for service',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 card py-4">
                <AlertCircle size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-[#ccc] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area reminder */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Rapid City &amp; Nearby Communities</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
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
            Don't see your city?{' '}
            <a href={SITE.smsHref} className="text-gold hover:underline">
              Text us your zip
            </a>{' '}
            — we'll let you know.
          </p>
        </div>
      </section>
    </>
  )
}
