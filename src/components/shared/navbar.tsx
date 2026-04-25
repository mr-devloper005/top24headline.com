'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const releasesRoute =
    SITE_CONFIG.tasks.find((task) => task.key === 'mediaDistribution')?.route || '/updates'
  const navLinks = [
    { key: 'home', name: 'Home', href: '/' },
    { key: 'press-release', name: 'Press Release', href: releasesRoute },
    { key: 'about', name: 'About', href: '/about' },
    { key: 'latest-news', name: 'Latest News', href: '/latest-news' },
    { key: 'contact', name: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2f3338] bg-[linear-gradient(180deg,#2f3439_0%,#272c31_100%)] text-white shadow-[0_1px_0_rgba(255,255,255,0.04)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3 pr-4">
          <img
            src="/favicon.png?v=20260401"
            alt={`${SITE_CONFIG.name} logo`}
            width="48"
            height="48"
            className="h-10 w-10 rounded-md object-contain"
          />
          <div className="leading-tight">
            <p className="text-[28px] font-bold tracking-tight text-[#36d6ff]">Release-News</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85">
              Press Release Distribution
            </p>
          </div>
        </Link>

        <nav className="hidden flex-1 justify-center gap-8 md:flex">
          {navLinks.map((task) => {
            const isActive = isActiveLink(task.href)
            return (
              <Link
                key={task.key}
                href={task.href}
                className={cn(
                  'text-[17px] font-medium transition-colors',
                  isActive ? 'text-[#00d6ff]' : 'text-white/90 hover:text-[#00d6ff]'
                )}
              >
                {task.name}
              </Link>
            )
          })}
          <Link href="/search" className="text-white/90 hover:text-[#00d6ff]">
            <Search className="h-5 w-5" />
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <>
              <Link href="/login" className="rounded px-3 py-1.5 text-sm font-semibold text-white/90 hover:bg-white/10">
                Login
              </Link>
              <Link
                href="/register"
                className="rounded border border-[#00d6ff]/40 bg-[#00d6ff]/10 px-3 py-1.5 text-sm font-semibold text-[#b9f5ff] hover:bg-[#00d6ff]/20"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link href="/search" className="rounded-full p-2 text-white/90 hover:bg-white/10">
            <Search className="h-5 w-5" />
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#23282d] md:hidden">
          <div className="space-y-2 px-4 py-4">
            {navLinks.map((task) => {
              const isActive = isActiveLink(task.href)
              return (
                <Link
                  key={task.key}
                  href={task.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn('flex rounded-xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? 'bg-[#00d6ff] text-[#0a1f26]' : 'text-white/90 hover:bg-white/10')}
                >
                  {task.name}
                </Link>
              )
            })}
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex rounded-xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
              Login
            </Link>
            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="flex rounded-xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
