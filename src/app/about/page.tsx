import Link from 'next/link'
import { BarChart3, Building2, Globe2, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG } from '@/lib/site-config'

const metrics = [
  { label: 'Press Releases Distributed', value: '52K+' },
  { label: 'Publisher Network Reach', value: '3.2K+' },
  { label: 'Average Turnaround', value: '< 24 hrs' },
]

const pillars = [
  {
    icon: Globe2,
    title: 'Publisher Reach',
    description: 'Built to route releases across digital publisher ecosystems with speed and structure.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Reporting',
    description: 'Track campaign-level visibility and coverage performance from a single dashboard flow.',
  },
  {
    icon: Users,
    title: 'Editorial Support',
    description: 'Combine SaaS delivery speed with editorial-grade release formatting and QA.',
  },
  {
    icon: Building2,
    title: 'Brand Authority',
    description: 'Position your business updates with a consistent, professional newsroom experience.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F5004F]">About Us</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#111827]">
              We help brands scale media visibility through reliable press distribution
            </h1>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              {SITE_CONFIG.name} is a media press release platform designed for modern businesses that need fast,
              professional, and high-reach distribution. Our mission is simple: make quality media publication
              accessible for every growing brand.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex rounded-full bg-[#F5004F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#d70044]">
                Talk to Us
              </Link>
              <Link href="/pricing" className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
            <ContentImage src="/site-media/contact-reference.png" alt="Team collaboration" fill className="object-cover" />
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          {metrics.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-semibold text-[#0f2340]">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#111827]">What defines our product</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1">
                <item.icon className="h-8 w-8 text-[#F5004F]" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
