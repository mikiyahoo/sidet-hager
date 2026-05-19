import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Sidet Ena Hager',
  description:
    'A powerful diaspora talk show reconnecting Ethiopians with their roots through truthful storytelling.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>{children}</body>
    </html>
  )
}