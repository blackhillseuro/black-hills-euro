'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Phone } from 'lucide-react'

export default function CallbackForm() {
  const [state, handleSubmit] = useForm('xwvyplwa')

  if (state.succeeded) {
    return (
      <div className="card text-center py-10">
        <div className="text-gold text-2xl font-bold mb-2">Got it.</div>
        <p className="text-[#ccc] text-sm leading-relaxed">
          We received your request and will reach out within a few hours during business hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cb-name" className="text-[#aaa] text-xs font-medium uppercase tracking-wider">
            Your Name
          </label>
          <input
            id="cb-name"
            name="name"
            type="text"
            required
            placeholder="First and last name"
            className="bg-[#111] border border-[#2a2a2a] rounded px-3 py-2.5 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#0066CC]"
          />
          <ValidationError field="name" errors={state.errors} className="text-red-400 text-xs" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cb-phone" className="text-[#aaa] text-xs font-medium uppercase tracking-wider">
            Phone Number
          </label>
          <input
            id="cb-phone"
            name="phone"
            type="tel"
            required
            placeholder="(605) 000-0000"
            className="bg-[#111] border border-[#2a2a2a] rounded px-3 py-2.5 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#0066CC]"
          />
          <ValidationError field="phone" errors={state.errors} className="text-red-400 text-xs" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cb-vehicle" className="text-[#aaa] text-xs font-medium uppercase tracking-wider">
          Your Vehicle
        </label>
        <input
          id="cb-vehicle"
          name="vehicle"
          type="text"
          required
          placeholder="e.g. 2018 BMW X5 N55"
          className="bg-[#111] border border-[#2a2a2a] rounded px-3 py-2.5 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#0066CC]"
        />
        <ValidationError field="vehicle" errors={state.errors} className="text-red-400 text-xs" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cb-issue" className="text-[#aaa] text-xs font-medium uppercase tracking-wider">
          What Is Going On?
        </label>
        <textarea
          id="cb-issue"
          name="issue"
          required
          rows={3}
          placeholder="Describe the issue or service you need"
          className="bg-[#111] border border-[#2a2a2a] rounded px-3 py-2.5 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#0066CC] resize-none"
        />
        <ValidationError field="issue" errors={state.errors} className="text-red-400 text-xs" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cb-zip" className="text-[#aaa] text-xs font-medium uppercase tracking-wider">
          Your ZIP Code
        </label>
        <input
          id="cb-zip"
          name="zip"
          type="text"
          required
          placeholder="57701"
          maxLength={10}
          className="bg-[#111] border border-[#2a2a2a] rounded px-3 py-2.5 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#0066CC]"
        />
        <ValidationError field="zip" errors={state.errors} className="text-red-400 text-xs" />
      </div>

      <ValidationError errors={state.errors} className="text-red-400 text-sm" />

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Phone size={15} />
        {state.submitting ? 'Sending...' : 'Request a Call Back'}
      </button>

      <p className="text-[#555] text-xs text-center">
        We typically respond within a few hours during business hours.
      </p>
    </form>
  )
}
