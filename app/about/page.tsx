import type { Metadata } from 'next'
import { CheckCircle, Wrench, Clock, Shield } from 'lucide-react'
import CTASection from '@/components/CTASection'
import { SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Black Hills Euro provides mobile European maintenance and diagnostics in Rapid City, SD. Service by scheduled appointment at your location, specializing exclusively in European vehicles.',
}

const HOW_WE_OPERATE = [
  {
    icon: <Clock size={22} />,
    title: 'By Appointment, at Your Location',
    body: 'Service is by scheduled appointment only. Call or text to arrange a time, and we come to your home, office, or wherever the car is parked.',
  },
  {
    icon: <Wrench size={22} />,
    title: 'European Vehicles Only',
    body: 'BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Volvo, Land Rover. We carry the right tools and fluids for these platforms specifically — not a general shop that handles everything.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Straight Pricing, No Surprises',
    body: 'We tell you what the job costs before we start. If we find something else while we\'re in there, we tell you and you decide whether to proceed.',
  },
]

const WHY_US = [
  'European vehicles only — the right tools, fluids, and parts for each platform',
  'Factory-level diagnostic tools for every module, not just generic fault codes',
  'Manufacturer-spec fluids — correct grade and viscosity for your engine',
  'Service by scheduled appointment — call or text to arrange a time',
  'We come to your home or office within 25 miles of Rapid City',
  'Straight quote before any work starts',
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">About</span>
          <h1 className="section-title max-w-2xl mb-4">
            European Auto Repair That Works Around Your Life
          </h1>
          <p className="text-[#8a8a8a] text-lg max-w-2xl leading-relaxed">
            Black Hills Euro is a mobile maintenance and diagnostics service for European vehicles in Rapid City, South Dakota. We started in 2024 to give local drivers a better option than the dealership or a general shop — one that comes to them, by appointment.
          </p>
        </div>
      </section>

      {/* Why It Exists */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Why We Exist</span>
              <h2 className="text-2xl font-bold text-white mb-6">The Problem We Solve</h2>
              <div className="space-y-4 text-[#8a8a8a] text-sm leading-relaxed">
                <p>
                  If you own a BMW, Audi, or Mercedes-Benz in Rapid City, your options are limited. The dealership is expensive and slow. A routine service can mean a full day out of your week. A general shop is faster, but European cars have specific oil grades, battery coding requirements, and electronics that most shops aren't set up for.
                </p>
                <p>
                  Black Hills Euro is the third option. We come to wherever your car is parked, by scheduled appointment, so you don't have to plan your day around a shop, and we focus exclusively on European vehicles so we have the right tools for the job.
                </p>
                <p>
                  No waiting room. No drop-off. No half-day appointment on a Tuesday.
                </p>
              </div>
            </div>

            <div>
              <span className="section-label">How We Operate</span>
              <h2 className="text-2xl font-bold text-white mb-6">What Makes This Different</h2>
              <div className="space-y-5">
                {HOW_WE_OPERATE.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="text-gold shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-[#777] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Honest Case for Trust */}
      <section className="py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Why Trust Us</span>
            <h2 className="section-title">What We Commit To</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              We're a new business. We earn trust by being straightforward about what we do and following through on every job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WHY_US.map((item) => (
              <div key={item} className="flex items-start gap-3 card py-4">
                <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-[#ccc] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Who We Help</span>
            <h2 className="section-title">The Customer This Is Built For</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Anyone in the Rapid City area who owns a European vehicle and doesn't want to lose a workday getting it serviced.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Working Professionals',
                desc: 'We come to your home or office, so you don\'t have to leave work early, take PTO, or arrange a ride home from the shop.',
              },
              {
                title: 'Military Families',
                desc: 'Box Elder and the Ellsworth AFB corridor is part of our service area. Scheduling by appointment makes it easier to work around irregular schedules.',
              },
              {
                title: 'Anyone Who Values Their Time',
                desc: 'Dropping a car off is a logistics problem. We remove it. If you\'d rather spend that hour on something else, we\'re the right call.',
              },
            ].map((group) => (
              <div key={group.title} className="card">
                <h3 className="text-white font-semibold mb-3 text-sm">{group.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area note */}
      <section className="py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card border-[#2a2a2a] flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold text-sm mb-1">Service Area</p>
              <p className="text-[#777] text-sm leading-relaxed">
                We cover a 25-mile radius from Rapid City — including Box Elder, Summerset, Blackhawk, Piedmont, Rapid Valley, and New Underwood. Not sure if you're in range? Text us your zip.
              </p>
            </div>
            <a href={SITE.smsHref} className="btn-outline shrink-0">
              Text Your Zip
            </a>
          </div>
        </div>
      </section>

      <CTASection
        headline="Questions? Just Ask."
        subheadline={`Call or text us at ${SITE.phone}. We'll tell you whether we can help, what it will cost, and when we can be there.`}
      />
    </>
  )
}
