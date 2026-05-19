'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedFlipWord from '@/components/ui/AnimatedFlipWord'

export default function HeroSection() {
  const { scrollY } = useScroll()

  const imageY = useTransform(scrollY, [0, 1000], [0, 120])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 md:px-12"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative z-10">
          {/* Subtitle with primaryLight bg matching episode category chips */}
          <div className="mb-12 inline-block rounded-full bg-primaryLight px-3 py-1 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-white">
              Conversations About Migration & Homeland.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <h1 className="heading-font text-5xl font-extrabold leading-tight text-primary md:text-7xl">
              እውነተኛ
            </h1>

            <AnimatedFlipWord />
          </div>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Sidet Ena Hager is a powerful talk show reconnecting diaspora
            Ethiopians with their roots through emotional stories of migration,
            identity, lost dreams, living dreams, and unexpected opportunities
            across continents.
          </p>

          <button className="mt-10 rounded-xl bg-secondary px-8 py-4 text-left font-bold text-primary shadow-glow transition hover:bg-primary hover:text-white">
            <div className="text-base">Nominate a Guest</div>
            <div className="text-xs opacity-80">
              Recommend for Interview
            </div>
          </button>
        </div>

        <motion.div
          style={{ y: imageY }}
          className="relative flex justify-center"
        >
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-1/3 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          <Image
            src="/assets/yhoannes-cover.png"
            alt="Yohannes Gebreab"
            width={700}
            height={900}
            className="pointer-events-none relative z-10 h-auto w-full max-w-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}