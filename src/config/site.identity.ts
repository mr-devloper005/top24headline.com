export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'e1qxc7k6ca',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Top 24 Headline',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Media press release network',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Top24Headline is a media distribution platform for press releases, newsroom announcements, and digital publisher reach.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'top24headline.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://top24headline.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/site-media/freepik-main.png',
} as const
