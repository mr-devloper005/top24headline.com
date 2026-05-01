'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const topLinks = [
    { key: 'about', name: 'About', href: '/about' },
    { key: 'terms', name: 'Terms of Service', href: '/terms' },
    { key: 'privacy', name: 'Privacy Policy', href: '/privacy' },
    { key: 'contact', name: 'Contact', href: '/contact' },
  ]
  const bottomLinks = [
    { key: 'home', name: 'Home', href: '/' },
    { key: 'contact-bottom', name: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-[#1a1a1a]">
      <div className="hidden h-9 items-center justify-center border-b border-[#e7e7e7] px-4 md:flex">
        <nav className="flex items-center gap-6">
          {topLinks.map((task) => {
            const isActive = isActiveLink(task.href)
            return (
              <Link
                key={task.key}
                href={task.href}
                className={cn(
                  'text-xs font-medium transition-colors',
                  isActive ? 'text-[#111111]' : 'text-[#4b4b4b] hover:text-[#111111]'
                )}
              >
                {task.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:hidden">
        <Link href="/" className="text-xl font-bold uppercase tracking-[0.2em] text-[#111111]">
          Top 24 Headline
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div className="hidden border-y border-[#e7e7e7] py-6 text-center md:block">
        <Link href="/" className="inline-flex">
          <h1 className="font-serif text-[52px] font-semibold uppercase leading-none tracking-[0.22em] text-black">
            TOP 24 HEADLINE
          </h1>
        </Link>
      </div>

      <div className="hidden h-12 items-center justify-center border-b border-[#e7e7e7] md:flex">
        <nav className="flex items-center gap-8">
          {bottomLinks.map((task) => {
            const isActive = isActiveLink(task.href)
            return (
              <Link
                key={task.key}
                href={task.href}
                className={cn(
                  'text-xs font-semibold uppercase tracking-[0.12em] transition-colors',
                  isActive ? 'text-[#89a8c2]' : 'text-[#3e3e3e] hover:text-[#89a8c2]'
                )}
              >
                {task.name}
              </Link>
            )
          })}
          <Link href="/search" className="text-[#3e3e3e] transition-colors hover:text-[#89a8c2]">
            <Search className="h-4 w-4" />
          </Link>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-2 px-4 py-4">
            {[...topLinks, ...bottomLinks].map((task) => {
              const isActive = isActiveLink(task.href)
              return (
                <Link
                  key={task.key}
                  href={task.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn('flex rounded-xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? 'bg-[#eef3f7] text-[#6f8fae]' : 'text-gray-600 hover:bg-gray-50')}
                >
                  {task.name}
                </Link>
              )
            })}
            <Link href="/search" onClick={() => setIsMobileMenuOpen(false)} className="flex rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Search
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
