import { type Metadata } from 'next'
import glob from 'fast-glob'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s · Evership',
    default: 'Developers · Evership',
  },
  description: 'Build powerful shipping workflows with the Evership API. Access endpoints for creating shipments, tracking parcels, retrieving labels, and integrating with your e-commerce stack.',
  keywords: [
    'Evership API',
    'shipping API',
    'e-commerce integration',
    'parcel tracking',
    'shipping labels',
    'logistics API',
    'South Africa shipping',
    'courier integration',
    'shipping workflow',
    'delivery API'
  ],
  authors: [{ name: 'Evership' }],
  creator: 'Evership',
  publisher: 'Evership',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://developers.evership.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://developers.evership.co.za',
    title: 'Developers · Evership',
    description: 'Build powerful shipping workflows with the Evership API. Access endpoints for creating shipments, tracking parcels, retrieving labels, and integrating with your e-commerce stack.',
    siteName: 'Evership Developers',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Evership API Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developers · Evership',
    description: 'Build powerful shipping workflows with the Evership API. Access endpoints for creating shipments, tracking parcels, retrieving labels, and integrating with your e-commerce stack.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-[var(--color-obsidian-950)]">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
