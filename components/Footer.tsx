import Link from 'next/link'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { SITE, SERVICE_AREAS } from '@/lib/siteData'

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="block text-base font-bold text-white tracking-widest uppercase">Black Hills</span>
              <span className="block text-xs font-semibold text-gold tracking-[0.25em] uppercase">Euro</span>
            </div>
            <p className="text-[#666] text-sm leading-relaxed">
              Mobile European maintenance and diagnostics for BMW, Mercedes-Benz, Audi, VW, Porsche, Volvo, and Land Rover owners in Rapid City and nearby communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Service Area</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-[#666] text-sm">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-[#666] text-sm hover:text-gold transition-colors">
                  <Phone size={14} className="shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="flex items-center gap-2.5 text-[#666] text-sm hover:text-gold transition-colors">
                  <Mail size={14} className="shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#666] text-sm">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <span>{SITE.appointments.message}</span>
              </li>
              <li className="flex items-start gap-2.5 text-[#666] text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Rapid City, SD &amp; nearby communities within ~25 miles</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#444] text-xs">
            &copy; {new Date().getFullYear()} Black Hills Euro. All rights reserved.
          </p>
          <p className="text-[#444] text-xs">
            Mobile European maintenance &amp; diagnostics &middot; Rapid City, SD
          </p>
        </div>
      </div>
    </footer>
  )
}
