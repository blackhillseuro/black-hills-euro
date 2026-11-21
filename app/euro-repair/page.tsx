import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Mobile Audi, VW, Porsche, Volvo & Euro Service – Rapid City, SD',
  description:
    'Mobile Audi, Volkswagen, Porsche, Volvo, and Land Rover maintenance and diagnostics in Rapid City, SD. VCDS and OE-level diagnostics. We come to you in Rapid City and nearby communities.',
}

const EURO_BRANDS = [
  {
    name: 'Audi',
    notes: 'A4, A6, A8, Q5, Q7, TT, and more. VCDS diagnostics, DSG service, oil spec 502.00 / 504.00.',
  },
  {
    name: 'Volkswagen',
    notes: 'Golf, Jetta, Passat, Tiguan, Atlas. VCDS coding, DSG / S-Tronic fluid service, PD / TDI engines.',
  },
  {
    name: 'Porsche',
    notes: 'Cayenne, Macan, Panamera. Porsche PIWIS-compatible diagnostics, IMS bearing awareness, brake service.',
  },
  {
    name: 'Volvo',
    notes: 'S60, S90, XC60, XC90, V60. VIDA/DICE-compatible diagnostics, brake service, suspension, oil service.',
  },
  {
    name: 'Land Rover',
    notes: 'Range Rover Sport, Discovery, Defender. SDD diagnostics, air suspension, differential service.',
  },
]

const EURO_SERVICES = [
  'Oil service with manufacturer-spec fluid',
  'Brake pad and rotor replacement',
  'DSG / S-Tronic / dual-clutch fluid service',
  'Battery replacement and coding',
  'VCDS and OE-level module diagnostics',
  'Suspension: control arms, tie rods, sway bar links',
  'Cooling system: water pump, thermostat, coolant flush',
  'Spark plugs, air and cabin filter service',
  "Pre-purchase inspection at seller's location",
  'Timing belt / chain inspection and service',
]

const EURO_FAQS = [
  {
    question: 'Do you use VCDS for Audi and VW?',
    answer:
      "Yes. VCDS (Ross-Tech) gives us the same access to Audi and Volkswagen modules as the dealer's ODIS system. We can read fault codes, check live data, perform adaptations, and code new components.",
  },
  {
    question: 'Can you service a Porsche Cayenne or Macan?',
    answer:
      'Yes. We service Cayenne and Macan for oil changes, brakes, suspension, and diagnostics. We use PIWIS-compatible tools for fault reading and adaptation. Text us your year and trim to confirm before booking.',
  },
  {
    question: 'What about Land Rover air suspension?',
    answer:
      "We can diagnose Land Rover air suspension faults with SDD-compatible tools. Component replacement depends on which part has failed — we'll be upfront about what can be done on-site.",
  },
  {
    question: 'Do you work on diesel Volkswagens (TDI)?',
    answer:
      'Yes. We service TDI engines including oil changes (VW 507.00 spec), fuel filter service, and diagnostics. We do not perform DPF regen or emissions-related resets.',
  },
  {
    question: 'Can you service a Volvo XC90?',
    answer:
      'Yes. We service Volvo XC60, XC90, S60, S90, and V60 for oil changes, brakes, filters, and diagnostics using VIDA/DICE-compatible scan tools.',
  },
]

export default function EuroRepairPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">European Specialist</span>
          <h1 className="section-title max-w-3xl mb-4">
            Mobile Audi, VW, Porsche, Volvo &amp; Land Rover Service – Rapid City, SD
          </h1>
          <p className="text-[#8a8a8a] text-lg max-w-2xl leading-relaxed">
            Beyond BMW and Mercedes, we specialize in the full spectrum of European makes. OE-level diagnostics, manufacturer-spec fluids, and on-site service in Rapid City and nearby communities.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Vehicles Serviced</span>
            <h2 className="section-title">Makes We Work On</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EURO_BRANDS.map((brand) => (
              <div key={brand.name} className="card">
                <h3 className="text-white font-semibold text-lg mb-2">{brand.name}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{brand.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Services</span>
            <h2 className="section-title">What We Handle On-Site</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EURO_SERVICES.map((item) => (
              <div key={item} className="flex items-start gap-3 card py-4">
                <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-[#ccc] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={EURO_FAQS} label="Euro FAQ" title="European Repair Questions" />

      <CTASection
        headline="Service for Your European Vehicle"
        subheadline="Call or text with your make, model, and what's going on — we'll give you a straight answer and a fair price."
      />
    </>
  )
}
