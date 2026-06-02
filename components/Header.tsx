'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Phone, Menu, X, MessageSquare } from 'lucide-react'
import { SITE } from '@/lib/siteData'

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none shrink-0" onClick={() => setOpen(false)}>
            <span className="text-base font-bold text-white tracking-widest uppercase">Black Hills</span>
            <span className="text-xs font-semibold text-gold tracking-[0.25em] uppercase">Euro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-gold'
                    : 'text-[#aaa] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href={SITE.phoneHref} className="hidden lg:flex btn-primary text-sm py-2.5 px-5">
            <Phone size={14} />
            {SITE.phone}
          </a>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <a href={SITE.phoneHref} className="text-gold" aria-label="Call us">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0f0f0f] border-t border-[#2a2a2a]">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 px-2 text-sm border-b border-[#1e1e1e] transition-colors ${
                  pathname === item.href ? 'text-gold' : 'text-[#ccc] hover:text-white'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 flex gap-3">
              <a href={SITE.phoneHref} className="btn-primary flex-1">
                <Phone size={15} />
                Call
              </a>
              <a href={SITE.smsHref} className="btn-outline flex-1">
                <MessageSquare size={15} />
                Text
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
