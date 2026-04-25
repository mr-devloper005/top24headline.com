import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F5004F]">Contact Us</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-[#111827]">We are here to help your release succeed</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-600">
            Share your campaign objective and our distribution team will guide your next release plan.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.1)]">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm" placeholder="Contact Name*" />
                <input className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm" placeholder="Phone Number" />
              </div>
              <input className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm" placeholder="Email*" />
              <div className="grid gap-4 sm:grid-cols-2">
                <select className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-500">
                  <option>What type of organization are you?</option>
                </select>
                <select className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-500">
                  <option>Subject: How may we help you?</option>
                </select>
              </div>
              <textarea className="min-h-[140px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Message / Comment*" />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f8ad8] px-6 text-sm font-semibold text-white hover:bg-[#0c75ba]">
                Submit Now
              </button>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#111827]">Telephone Hours:</h2>
              <p className="mt-2 text-sm text-slate-600">Monday to Friday</p>
              <p className="text-sm text-slate-600">8:30am to 5:00pm Pacific (PDT)</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#111827]">Contact Details</h2>
              <div className="mt-3 space-y-3 text-sm text-slate-600">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#F5004F]" /> +1 888-880-9539</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#F5004F]" /> info@top24headline.com</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#F5004F]" /> Seattle, WA 98104, USA</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#111827]">Need direct support?</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                For urgent release requests, email our editorial desk and include your preferred distribution date.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-10 rounded-3xl bg-[#0f8ad8] px-8 py-9 text-white">
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">Please take a moment to check our FAQs</h2>
          <p className="mt-2 text-sm text-white/90">Find quick answers to common release publishing questions.</p>
          <Link href="/help" className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0f8ad8] hover:bg-slate-100">
            View FAQs
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
