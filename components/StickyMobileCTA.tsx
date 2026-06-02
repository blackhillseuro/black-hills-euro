import { Phone, MessageSquare } from 'lucide-react'
import { SITE } from '@/lib/siteData'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0f0f0f]/95 backdrop-blur border-t border-[#2a2a2a] px-4 py-3 flex gap-3">
      <a href={SITE.phoneHref} className="btn-primary flex-1">
        <Phone size={16} />
        Call
      </a>
      <a href={SITE.smsHref} className="btn-outline flex-1">
        <MessageSquare size={16} />
        Text
      </a>
    </div>
  )
}
