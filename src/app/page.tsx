import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Megaphone,
  PenLine,
  Send,
  Share2,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPosts } from '@/lib/task-data'
import { siteContent } from '@/config/site.content'
import type { SitePost } from '@/lib/site-connector'
import { HOME_PAGE_OVERRIDE_ENABLED, HomePageOverride } from '@/overrides/home-page'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
    openGraphTitle: siteContent.home.metadata.openGraphTitle,
    openGraphDescription: siteContent.home.metadata.openGraphDescription,
    image: SITE_CONFIG.defaultOgImage,
    keywords: [...siteContent.home.metadata.keywords],
  })
}

function getPostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const contentImage = typeof post?.content === 'object' && post?.content && Array.isArray((post.content as any).images)
    ? (post.content as any).images.find((url: unknown) => typeof url === 'string' && url)
    : null
  const logo = typeof post?.content === 'object' && post?.content && typeof (post.content as any).logo === 'string'
    ? (post.content as any).logo
    : null
  return mediaUrl || contentImage || logo || '/site-media/freepik-main.png'
}

export default async function HomePage() {
  if (HOME_PAGE_OVERRIDE_ENABLED) {
    return <HomePageOverride />
  }

  const mediaDistributionPosts = await fetchTaskPosts('mediaDistribution', 8, {
    allowMockFallback: true,
    fresh: false,
    revalidate: 120,
  })
  const updatesRoute =
    SITE_CONFIG.tasks.find((task) => task.key === 'mediaDistribution')?.route || '/updates'
  const featuredUpdates = mediaDistributionPosts.slice(0, 6)

  const pricingPlans = [
    {
      name: 'Silver',
      price: '$79',
      features: ['250+ publishers', 'SEO-friendly distribution', 'Basic analytics'],
      logos: ['Google News', 'Yahoo', 'Bing'],
      highlighted: false,
    },
    {
      name: 'Gold',
      price: '$149',
      features: ['700+ premium outlets', 'Priority editorial review', 'Rich analytics dashboard'],
      logos: ['Google News', 'Yahoo Finance', 'MSN'],
      highlighted: true,
    },
    {
      name: 'Platinum',
      price: '$249',
      features: ['1200+ placements', 'Media pickup tracking', 'Industry category targeting'],
      logos: ['Benzinga', 'MarketWatch', 'AP News'],
      highlighted: false,
    },
    {
      name: 'Platinum Plus',
      price: '$349',
      features: ['Global media routing', 'White-glove support', 'Campaign consulting'],
      logos: ['Reuters', 'Business Insider', 'Bloomberg'],
      highlighted: false,
    },
  ]

  const benefits = [
    {
      icon: Megaphone,
      title: 'Wider Visibility',
      description: 'Distribute one release to broad media and publisher surfaces instantly.',
    },
    {
      icon: Target,
      title: 'Targeted Reach',
      description: 'Route releases by industry and audience intent for better fit.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Lift',
      description: 'Build search presence through indexed press placement assets.',
    },
    {
      icon: PenLine,
      title: 'Editorial Support',
      description: 'Get writing and structure guidance before publication goes live.',
    },
    {
      icon: Share2,
      title: 'Social Amplification',
      description: 'Use one workflow for press publication and social distribution.',
    },
    {
      icon: Users,
      title: 'Brand Trust',
      description: 'Showcase brand authority with consistent media distribution coverage.',
    },
    {
      icon: Send,
      title: 'Fast Turnaround',
      description: 'Publish time-sensitive business updates without workflow delays.',
    },
    {
      icon: FileText,
      title: 'Detailed Reporting',
      description: 'Track placements, clicks, and coverage footprint in one place.',
    },
  ]
  const services = [
    { title: 'PR Writing', icon: PenLine },
    { title: 'Distribution', icon: Send },
    { title: 'Target Audience', icon: Target },
    { title: 'Marketing', icon: TrendingUp },
  ]

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}${SITE_CONFIG.defaultOgImage}`,
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <ContentImage
              src="/site-media/freepik-home-hero.png"
              alt="Press distribution hero background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,16,38,0.9)_12%,rgba(245,0,79,0.72)_58%,rgba(255,175,0,0.64)_100%)]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                Media Press Release Platform
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Send your news to thousands of digital publishers instantly
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85">
                Publish brand announcements, product launches, and company stories through a high-velocity media distribution workflow designed for modern PR teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={updatesRoute}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFAF00] px-6 py-3 text-sm font-semibold text-[#101828] transition hover:-translate-y-0.5 hover:bg-[#ffc03b]"
                >
                  Submit Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F5004F]">Pricing</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111827]">Choose your press distribution plan</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl border p-6 transition duration-300 ${
                  plan.highlighted
                    ? 'scale-[1.02] border-[#F5004F] bg-[#fff6fa] shadow-[0_20px_60px_rgba(245,0,79,0.22)]'
                    : 'border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-[#F5004F] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-4xl font-semibold text-[#111827]">{plan.price}</p>
                <ul className="mt-5 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 text-[#F5004F]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {plan.logos.map((logo) => (
                    <span key={logo} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                      {logo}
                    </span>
                  ))}
                </div>
                <Link
                  href="/pricing"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${
                    plan.highlighted
                      ? 'bg-[#F5004F] text-white hover:bg-[#d70044]'
                      : 'bg-[#0f2340] text-white hover:bg-[#1f3557]'
                  }`}
                >
                  Buy Now
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f9fafb] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-[-0.04em]">Every release includes powerful benefits</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <item.icon className="h-8 w-8 text-[#F5004F]" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F5004F]">About Top24Headline</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Media-focused distribution with editorial quality control</h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              Top24Headline is built for founders, PR teams, and agencies that need reliable publisher coverage without bloated workflows. We blend strong newsroom formatting with SaaS speed, so your releases stay readable and discoverable.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              From planning to distribution and reporting, each stage is optimized for modern media publishing requirements.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F5004F]">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_22px_50px_rgba(15,23,42,0.1)]">
            <ContentImage src="/site-media/freepik-main.png" alt="Team meeting" fill className="object-cover" />
          </div>
        </section>

        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0">
            <ContentImage
              src="/site-media/freepik-home-hero.png"
              alt="Services background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0c1f3fe6]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold tracking-[-0.04em] text-white">Services</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-sm">
                  <item.icon className="h-8 w-8 text-[#FFAF00]" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f3f4f6] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 grayscale">
              {['BBC', 'Forbes', 'Bloomberg', 'Yahoo', 'MSN', 'Business Insider', 'Reuters'].map((logo) => (
                <span key={logo} className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-3xl font-semibold tracking-[-0.04em]">Trusted by growing brands</h2>
            <div className="flex gap-2">
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['StartUpHive', 'Northline Tech', 'FinEdge', 'RetailMint'].map((client) => (
              <article key={client} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-lg font-semibold text-slate-700">{client}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0f2340] py-16 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-full border border-white/20">
              <ContentImage
                src="/site-media/freepik-main.png"
                alt="Testimonial avatar"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">What clients say</h2>
            <p className="mt-5 text-base leading-8 text-slate-200">
              “Top24Headline helped us land quality media pickup in less than 24 hours. The platform is fast, professional, and the reporting is exactly what our PR team needed.”
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FFAF00]">
              Aisha Khan, Communications Lead
            </p>
          </div>
        </section>

        <section className="bg-[#F5004F] py-14">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">Get media-ready updates in your inbox</h2>
              <p className="mt-2 text-sm text-white/90">Weekly PR trends, editorial tips, and release strategy insights.</p>
            </div>
            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border border-white/40 bg-white/15 px-5 text-sm text-white placeholder:text-white/75"
              />
              <button type="submit" className="h-12 rounded-full bg-[#FFAF00] px-6 text-sm font-semibold text-[#111827] transition hover:bg-[#ffc03b]">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F5004F]">Latest News</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Recent press releases</h2>
            </div>
            <Link href={updatesRoute} className="text-sm font-semibold text-[#F5004F] hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredUpdates.map((post) => (
              <Link
                key={post.id}
                href={`${updatesRoute}/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <ContentImage src={getPostImage(post)} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-xl font-semibold">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                    {post.summary || 'Press release coverage and editorial update.'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
