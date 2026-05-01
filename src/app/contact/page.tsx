import Link from 'next/link'
import { Phone } from 'lucide-react'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <header>
        <div className="bg-[#132f55] text-white">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
            <p className="inline-flex items-center gap-1.5 font-medium">
              <Phone className="h-3 w-3" />
              +1 888-880-9539
            </p>
            <div className="flex items-center gap-0">
              <Link href="/register" className="px-4 py-3 hover:bg-[#1b3f70]">
                Sign Up
              </Link>
              <Link href="/login" className="px-4 py-3 hover:bg-[#1b3f70]">
                Login
              </Link>
              <Link href="/updates" className="bg-[#1783d0] px-5 py-3 font-semibold hover:bg-[#0f73bb]">
                Submit Release
              </Link>
            </div>
          </div>
        </div>
        <div className="border-b border-[#e1e1e1] bg-white">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#86d44a] text-xs font-bold text-white">24</span>
              <span className="text-xl font-bold text-[#1c5a9d]">24-7 PressRelease</span>
            </Link>
            <nav className="hidden items-center gap-6 text-xs font-medium text-[#666] md:flex">
              <Link href="/about" className="hover:text-[#1783d0]">Company</Link>
              <Link href="/pricing" className="hover:text-[#1783d0]">Pricing</Link>
              <Link href="/updates" className="hover:text-[#1783d0]">News</Link>
              <Link href="/help" className="hover:text-[#1783d0]">Resources</Link>
              <Link href="/contact" className="font-semibold text-[#1a1a1a]">Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-8 text-center">
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-[#0978c7]">Contact Us</h1>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-sm border border-[#dddddd] bg-[#ececec] p-5">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#565656]">Contact Name *</label>
                  <input className="h-11 w-full border border-[#d9d9d9] bg-white px-3 text-sm" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#565656]">Phone Number</label>
                  <input className="h-11 w-full border border-[#d9d9d9] bg-white px-3 text-sm" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#565656]">Email *</label>
                <input className="h-11 w-full border border-[#d9d9d9] bg-white px-3 text-sm" />
              </div>
              <p className="text-xs font-semibold text-[#777777]">Help Us Understand Your Needs A Little More.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#565656]">What type of organization are you? *</label>
                  <select className="h-10 w-full border border-[#d9d9d9] bg-white px-3 text-sm text-[#777777]">
                    <option>Please Select</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#565656]">Subject: How may we help you? *</label>
                  <select className="h-10 w-full border border-[#d9d9d9] bg-white px-3 text-sm text-[#777777]">
                    <option>Please Select</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#565656]">Message / Comment *</label>
                <textarea className="min-h-[110px] w-full border border-[#d9d9d9] bg-white px-3 py-2 text-sm" />
              </div>
              <div className="mx-auto mt-1 w-full max-w-[280px] border border-[#d8d8d8] bg-white px-4 py-3">
                <div className="flex items-center justify-between text-xs text-[#555]">
                  <span>I'm not a robot</span>
                  <span className="text-[#999]">reCAPTCHA</span>
                </div>
              </div>
              <button type="submit" className="mx-auto mt-2 inline-flex h-10 items-center justify-center bg-[#1587d3] px-10 text-sm font-semibold text-white hover:bg-[#0e74b6]">
                Submit Now
              </button>
            </form>
          </div>

          <aside className="space-y-8 pt-1">
            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1d]">Telephone Hours:</h2>
              <p className="mt-2 text-sm text-[#5f5f5f]">Monday to Friday</p>
              <p className="text-sm text-[#5f5f5f]">8:30am to 5:00pm Pacific (PDT)</p>
            </div>

            <div className="border-t border-[#e1e1e1] pt-6">
              <h2 className="text-lg font-semibold text-[#1d1d1d]">Toll Free Telephone:</h2>
              <p className="mt-2 text-sm text-[#5f5f5f]">1-888-880-9539</p>
              <p className="text-sm text-[#5f5f5f]">(646) 417-8294</p>
            </div>

            <div className="border-t border-[#e1e1e1] pt-6">
              <h2 className="text-lg font-semibold text-[#1d1d1d]">US Address:</h2>
              <p className="mt-2 text-sm leading-7 text-[#5f5f5f]">
                Suite 1400 - 506 Second Avenue
                <br />
                Seattle, WA
                <br />
                98104, USA
              </p>
            </div>

            <div className="border-t border-[#e1e1e1] pt-6">
              <h2 className="text-lg font-semibold text-[#1d1d1d]">Canada Address:</h2>
              <p className="mt-2 text-sm leading-7 text-[#5f5f5f]">
                Suite 203 - 901 West 3rd St.
                <br />
                North Vancouver, BC
                <br />
                V7P 3P9, Canada
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-12 overflow-hidden rounded-lg bg-[linear-gradient(120deg,#0f6cb0_0%,#1086d4_75%)] px-8 py-9 text-white">
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.03em]">
            Please take a moment to check out our FAQs
          </h2>
          <p className="mt-2 text-base text-white/95">for quick answers to common questions.</p>
          <Link href="/help" className="mt-6 inline-flex bg-white px-5 py-2 text-sm font-semibold text-[#0f6cb0] hover:bg-[#f3f8fc]">
            VIEW FAQs
          </Link>
        </section>
      </main>

      <footer className="mt-14 bg-[linear-gradient(180deg,#132f55_0%,#102747_100%)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#86d44a] text-sm font-bold text-white">24</span>
              <span className="text-2xl font-bold">24-7 PressRelease</span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/85">
              <p>+1 888-880-9539</p>
              <p>8:30am to 5:00pm Pacific (Mon - Fri)</p>
              <p>Suite 1400 - 506 Second Avenue Seattle, WA 98104</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Products</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Pricing Plans</li>
              <li>Agency Program</li>
              <li>Writing Services</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>About Us</li>
              <li>Who Uses Us</li>
              <li>Meet The Team</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Knowledge Base</li>
              <li>RSS</li>
              <li>News Widget</li>
              <li>For Journalists</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Contact Us</li>
              <li>Content Guidelines</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-white/75 sm:px-6 md:flex-row lg:px-8">
            <p>2004-2026 24-7 Press Release Newswire. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/sitemap">Site Map</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
