import { Phone, MessageSquare } from 'lucide-react'
import { SITE } from '@/lib/siteData'

interface CTASectionProps {
  headline?: string
  subheadline?: string
}

export default function CTASection({
  headline = 'Ready to Book?',
  subheadline = 'Call or text to schedule an appointment at your location.',
}: CTASectionProps) {
  return (
    <section className="bg-[#141414] border-y border-[#2a2a2a] py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <span className="section-label">Call or Text to Book</span>
        <h2 className="section-title">{headline}</h2>
        <p className="section-subtitle">{subheadline}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href={SITE.phoneHref} className="btn-primary py-4 px-8 text-base w-full sm:w-auto">
            <Phone size={18} />
            Call {SITE.phone}
          </a>
          <a href={SITE.smsHref} className="btn-outline py-4 px-8 text-base w-full sm:w-auto">
            <MessageSquare size={18} />
            Send a Text
          </a>
        </div>
      </div>
    </section>
  )
}
