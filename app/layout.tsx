import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from './footer'
import Header from './header'

import PageAnimatePresence from '@/app/components/HOC'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next JS App ROuter page Transition',
  description: 'Page Transition'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <PageAnimatePresence>{children}</PageAnimatePresence>
        <Footer />
      </body>
    </html>
  )
}
