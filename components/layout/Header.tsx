'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollHeader } from '@/lib/hooks/useScrollHeader'

export default function Header() {
  const scrolled = useScrollHeader(50)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass-header py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="#hero">
          <Image
            src={scrolled ? '/assets/sidet-ena-hager-logo_W.png' : '/assets/sidet-ena-hager-logo.png'}
            alt="Sidet Ena Hager"
            width={180}
            height={72}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className={`flex items-center gap-8 text-base font-semibold uppercase tracking-[0.15em] ${
          scrolled ? 'text-white' : 'text-primary'
        }`}>
          <Link
            href="#latest-episodes"
            className="transition hover:text-secondary"
          >
            Episodes
          </Link>

          <Link
            href="#about-show"
            className="transition hover:text-secondary"
          >
            About
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}