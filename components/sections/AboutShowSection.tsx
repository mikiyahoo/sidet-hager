'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const symbols = ['=', '≠', '>', '<']

function AnimatedEquation() {
  const [index, setIndex] = useState(0)
   const [flipping, setFlipping] = useState(false)

  const next = useCallback(() => {
    setFlipping(true)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % symbols.length)
      setFlipping(false)
    }, 400)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 2500)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="mt-8 flex items-center justify-center gap-8 sm:gap-14 select-none">
      {/* ስደት */}
      <span className="amharic-font text-[clamp(48px,5vw,80px)] font-black leading-none text-primary">
        ስደት
      </span>

      {/* Circle with animated symbol */}
      <div
        className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-primary bg-secondary sm:h-32 sm:w-32"
        style={{
          transform: flipping ? 'scaleX(-1)' : 'scaleX(1)',
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <span
          className="heading-font text-[100px] font-black leading-none text-primary -mt-3"
          style={{
            transform: flipping ? 'scaleX(-1)' : 'scaleX(1)',
            transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {symbols[index]}
        </span>
      </div>

      {/* ሀገር */}
      <span className="amharic-font text-[clamp(48px,5vw,80px)] font-black leading-none text-primary">
        ሀገር
      </span>
    </div>
  )
}

export default function AboutShowSection() {
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 1500], [0, 80])

  
  return (
    <section
      id="about-show"
      className="bg-white px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Image side - pushed up with negative margin to align with text */}
          <motion.div style={{ y }} className="flex justify-start -mt-12">
            <div className="relative">
              <div className="h-[520px] w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/assets/about-the-show2.jpg"
                  alt="About The Show"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover object-[center_top]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-secondary/20 -z-10" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl bg-primaryLight/10 -z-10" />
            </div>
          </motion.div>

          {/* Text side */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              About The Show
            </p>

            <div className="mt-6 h-1 w-20 bg-secondary" />

            {/* Animated equation: ስደት [symbol] ሀገር */}
            <AnimatedEquation />

            <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-700">
              <p>
                Sidet ena Hager is a powerful diaspora talk show that dives deep
                into the lives of Ethiopians who have left their homeland in
                search of new beginnings.
              </p>

              <p>
                Shot in a warm, culturally inspired studio, and later expanding
                to a mobile set that travels globally, the show creates a unique
                emotional bridge between homeland memories and diaspora life.
              </p>

              <p>
                Episodes run between 45 minutes and 1 hour, with extended stories
                unfolding as multi-part weekly experiences.
              </p>
            </div>

            {/* Title restored below description */}
            <div className="mt-10">
              <h2 className="heading-font text-4xl font-black text-secondary md:text-5xl">
                Bridging Worlds
                <span className="block text-2xl font-normal text-primaryLight md:text-3xl">
                  Through Authentic Stories
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}