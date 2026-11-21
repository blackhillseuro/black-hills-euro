import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Mobile BMW Maintenance & Diagnostics – Rapid City, SD',
  description:
    'Mobile BMW maintenance and diagnostics in Rapid City, SD. Oil service, brakes, battery coding, ISTA diagnostics, and more. BMW specialist — we come to you.',
}

const BMW_SERVICES = [
  'Oil service with BMW LL-01 / LL-04 spec oil',
  'Brake pad and rotor replacement',
  'Battery replacement with DME coding (AGM/EFB)',
  'CBS / service interval reset',
  'Coolant system service and thermostat',
  'Valve cover gasket and common oil leaks',
  'Suspension: control arms, tie rods, ball joints',
  'ISTA / factory-level diagnostics',
  'Air filter, cabin filter, spark plugs',
  'DSC / ABS and module fault diagnosis',
  'N52, N54, N55, B46, B58 engine service',
  "Pre-purchase inspection at seller's location",
]

const BMW_FAQS = [
  {
    question: 'Do you have BMW-specific diagnostic tools?',
    answer:
      'Yes. We use ISTA-compatible factory-level scan tools that read and clear every module in the car — not just generic OBD codes. This matters for BMW because many fault codes are module-specific and require BMW communication protocols.',
  },
  {
    question: 'Can you code a new BMW battery?',
    answer:
      'Absolutely. BMW requires battery registration when replacing AGM or EFB batteries. Skipping this step causes the charging system to run incorrectly and can shorten battery life. We code every battery replacement properly.',
  },
  {
    question: 'What BMW models do you service?',
    answer:
      "We service most BMW 1, 2, 3, 4, 5, 6, 7, and X Series from 2005 to present. Text us your year and model to confirm — we'll be straight with you about anything outside our scope.",
  },
  {
    question: 'Do you reset the CBS service indicator?',
    answer:
      "Yes. We reset the Condition Based Service indicator after every service so your dash shows accurate intervals and your BMW's service history stays clean.",
  },
  {
    question: 'Can you handle turbocharged BMW engines like the N54 or N55?',
    answer:
      'Yes. The N54 and N55 are among the most common engines we work on. We handle high-pressure fuel pump issues, charge pipe replacements, valve cover gaskets, and turbo-related diagnostics regularly.',
  },
]

export default function BMWRepairPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">BMW Specialist</span>
          <h1 className="section-title max-w-2xl mb-4">
            Mobile BMW Service in Rapid City, SD
          </h1>
          <p className="text-[#8a8a8a] text-lg max-w-2xl leading-relaxed">
            Proper BMW service without the dealer visit. We use BMW-spec products, ISTA-compatible diagnostics, and arrive wherever your car is parked in Rapid City and nearby communities.
          </p>
        </div>
      </section>

      {/* Services + Why */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Services list */}
            <div>
              <span className="section-label">What We Service</span>
              <h2 className="text-2xl font-bold text-white mb-8">Common BMW Services</h2>
              <ul className="space-y-3">
                {BMW_SERVICES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-[#ccc] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why it matters */}
            <div>
              <span className="section-label">Why It Matters</span>
              <h2 className="text-2xl font-bold text-white mb-6">
                BMW Needs More Than a Generic Shop
              </h2>
              <div className="space-y-4 text-[#8a8a8a] text-sm leading-relaxed">
                <p>
                  BMWs are among the most sophisticated vehicles on the road. They use proprietary communication buses, require oil that meets BMW's exact LL-01 or LL-04 specifications, and need battery coding every time one is replaced. A generic shop that skips these steps causes long-term damage.
                </p>
                <p>
                  Black Hills Euro works exclusively on European vehicles. We stock BMW LL-spec oil, carry compatible AGM batteries, and use diagnostic tools that communicate with every module in your car — from the DME to the body control units.
                </p>
                <p>
                  Whether you're at 30,000 miles or 150,000 miles, we bring the right knowledge and the right tools to your location. No drop-off. No loaner car needed.
                </p>
              </div>

              <div className="mt-8 card border-[#2a2a2a] bg-[#111]">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">Common BMW Issues We See</p>
                <ul className="space-y-1 text-[#777] text-sm">
                  <li>— N54 / N55 high-pressure fuel pump failure</li>
                  <li>— Valve cover gasket leaks (N52, N54)</li>
                  <li>— Cooling system failures (thermostat, water pump)</li>
                  <li>— Battery drain and coding issues</li>
                  <li>— Rear subframe control arm bushing wear</li>
                  <li>— VANOS / timing chain noise on N54</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={BMW_FAQS} label="BMW FAQ" title="BMW Repair Questions" />

      <CTASection
        headline="Schedule Your BMW Service"
        subheadline="Call or text to book. We come to your home or office anywhere in the Rapid City area."
      />
    </>
  )
}
