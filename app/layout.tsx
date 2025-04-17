import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { ThemeProvider } from 'next-themes'

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
  themeColor: '#0f172a', // Dark theme color
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 