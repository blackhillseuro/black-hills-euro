import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'
import ServiceCard from '@/components/ServiceCard'
import { SERVICES, SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Services – After-Hours European Maintenance & Diagnostics',
  description:
    'After-hours European maintenance and diagnostics in Rapid City, SD. Oil changes, brakes, diagnostics, battery coding, suspension, pre-purchase inspection, and more for BMW, Mercedes, Audi, VW, Porsche, Volvo, and Land Rover.',
}

const INCLUDED = [
  'No shop visit — we come to you',
  'Factory-level diagnostic tools',
  'OEM-quality parts on every job',
  'Honest about what can and cannot be done on-site',
  'Upfront pricing before we start',
  'Same-week scheduling available',
  'Euro-spec fluids and products only',
  'Full service documentation provided',
]


export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">What We Offer</span>
          <h1 className="section-title max-w-2xl mb-4">After-Hours European Service</h1>
          <p className="text-[#8a8a8a] text-lg max-w-2xl leading-relaxed">
            Full-service European auto repair without the shop visit. We handle maintenance, diagnostics, and common repairs at your home or office in Rapid City and nearby communities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Our Standard</span>
            <h2 className="section-title">What Every Service Includes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 card py-4">
                <CheckCircle size={16} className="text-gold shrink-0" />
                <span className="text-[#ccc] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure section */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure If We Can Help?</h2>
          <p className="text-[#8a8a8a] leading-relaxed mb-6">
            Text us what's going on and we'll give you a straight answer. Most European car problems are something we can handle on-site.
          </p>
          <a href={SITE.smsHref} className="btn-outline">
            Text Us Your Question
          </a>
        </div>
      </section>

      <CTASection />
    </>
  )
}
