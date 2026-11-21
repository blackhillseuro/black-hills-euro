import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Mobile Mercedes-Benz Maintenance & Diagnostics – Rapid City, SD',
  description:
    'Mobile Mercedes-Benz maintenance and diagnostics in Rapid City, SD. Service A & B, brakes, XENTRY diagnostics, Airmatic, and more. We come to you — no dealership needed.',
}

const MB_SERVICES = [
  'Service A and Service B intervals',
  'Mercedes 229.5 / 229.51 / 229.52 spec oil',
  'Brake pad replacement with SBC/ESP reset',
  'Battery replacement and coding',
  'ASSYST / MBSA service indicator reset',
  'XENTRY-compatible module diagnostics',
  'Airmatic suspension fault diagnosis',
  'Transmission fluid service (7G-Tronic, 9G-Tronic)',
  'Coolant flush and thermostat',
  'Spark plugs, air filter, cabin filter',
  'Common oil leaks: valve cover, cam adjuster',
  "Pre-purchase inspection at seller's location",
]

const MB_FAQS = [
  {
    question: 'Can you perform the Mercedes Service A and Service B?',
    answer:
      'Yes. We carry Mercedes-spec 229.5 and 229.51 synthetic oil, OEM-compatible filters, and reset the service indicator through ASSYST or MBSA depending on your model. Your service history stays accurate.',
  },
  {
    question: 'Do you work on AIRMATIC suspension systems?',
    answer:
      "We diagnose Airmatic faults and handle component-level replacements where it can be done on-site. For compressor rebuilds or full strut replacement requiring a lift, we'll advise you honestly and refer to a trusted partner if needed.",
  },
  {
    question: 'What diagnostic tools do you use on Mercedes?',
    answer:
      'We use XENTRY-compatible diagnostics that communicate with all control modules in Mercedes vehicles — not just OBD II. This allows us to read live data, perform adaptations, and reset service counters the way the dealership does.',
  },
  {
    question: 'What Mercedes models do you service?',
    answer:
      'C-Class, E-Class, S-Class, CLA, CLS, GLA, GLC, GLE, ML, GL, SLK, and more from 2005 to present. Text us your VIN or model to confirm before booking.',
  },
  {
    question: 'Does Mercedes actually require specific oil grades?',
    answer:
      "Yes, and it's critical. Mercedes engines require oil that meets 229.5, 229.51, or 229.52 spec depending on the engine. Using off-spec oil — even high-quality oil — can damage seals and shorten engine life. We only use the correct oil for your specific model.",
  },
]

export default function MercedesRepairPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Mercedes-Benz Specialist</span>
          <h1 className="section-title max-w-2xl mb-4">
            Mobile Mercedes-Benz Service in Rapid City, SD
          </h1>
          <p className="text-[#8a8a8a] text-lg max-w-2xl leading-relaxed">
            Factory-correct service for your Mercedes at your location. We use genuine Mercedes-spec oil, OEM-quality parts, and XENTRY-level diagnostics — without the dealership markup or wait.
          </p>
        </div>
      </section>

      {/* Services + Why */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <span className="section-label">What We Service</span>
              <h2 className="text-2xl font-bold text-white mb-8">Common Mercedes Services</h2>
              <ul className="space-y-3">
                {MB_SERVICES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-[#ccc] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="section-label">The Difference</span>
              <h2 className="text-2xl font-bold text-white mb-6">
                Mercedes Quality, Without the Wait
              </h2>
              <div className="space-y-4 text-[#8a8a8a] text-sm leading-relaxed">
                <p>
                  Mercedes-Benz vehicles require oil that meets very specific viscosity and additive standards. Most quick-lube shops don't stock 229.5 or 229.51 spec oil. Using the wrong product shortens engine life and can cause seal degradation over time.
                </p>
                <p>
                  Beyond oil, your Mercedes has complex electronics that require XENTRY-level access. We can read live data, perform long-coding adaptations, and reset service counters the way the dealership does — at your driveway.
                </p>
                <p>
                  Our goal is to keep your Mercedes running the way it was designed to — reliably and for years — without the dealership scheduling lag or inflated labor rates.
                </p>
              </div>

              <div className="mt-8 card border-[#2a2a2a] bg-[#111]">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">Common Mercedes Issues We See</p>
                <ul className="space-y-1 text-[#777] text-sm">
                  <li>— Service A / B overdue (ASSYST warning)</li>
                  <li>— Airmatic suspension compressor fault</li>
                  <li>— Brake wear sensor warnings</li>
                  <li>— Cam adjuster / chain tensioner oil leaks</li>
                  <li>— Battery drain and parasitic draw</li>
                  <li>— 7G-Tronic transmission fluid overdue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={MB_FAQS} label="Mercedes FAQ" title="Mercedes-Benz Repair Questions" />

      <CTASection
        headline="Schedule Your Mercedes Service"
        subheadline="We come to your home or office in Rapid City and nearby communities. Call or text to schedule an appointment."
      />
    </>
  )
}
