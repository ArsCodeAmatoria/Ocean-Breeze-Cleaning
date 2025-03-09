import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ocean Breeze Cleaning | Health-Focused Cleaning Services',
  description: 'Discover how frequent professional cleaning reduces bacteria, germs, viruses, and improves health and air quality. Science-backed cleaning services for healthier homes and workplaces.',
  keywords: 'cleaning services, bacteria reduction, germ removal, healthy home, air quality improvement, professional cleaning, sanitization, eco-friendly cleaning',
  authors: [{ name: 'Ocean Breeze Cleaning' }],
  openGraph: {
    title: 'Ocean Breeze Cleaning | Health-Focused Cleaning Services',
    description: 'Science-backed cleaning services for healthier homes and workplaces.',
    url: 'https://oceanbreezecleaning.com',
    siteName: 'Ocean Breeze Cleaning',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ocean Breeze Cleaning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 