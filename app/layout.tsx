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
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  },
  openGraph: {
    title: 'Ocean Breeze Cleaning | Health-Focused Cleaning Services',
    description: 'Science-backed cleaning services for healthier homes and workplaces.',
    url: 'https://breezify.me',
    siteName: 'Ocean Breeze Cleaning',
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