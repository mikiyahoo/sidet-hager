'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

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
              <div className="h-[420px] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
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

            <h2 className="heading-font mt-4 text-4xl font-black text-primary md:text-5xl">
              Bridging Worlds
              <span className="block text-2xl font-normal text-primaryLight md:text-3xl">
                Through Authentic Stories
              </span>
            </h2>

            <div className="mt-6 h-1 w-20 bg-secondary" />

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

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div className="text-center">
                <div className="heading-font text-2xl font-black text-primary">45-60</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Min Episodes</div>
              </div>
              <div className="text-center">
                <div className="heading-font text-2xl font-black text-primary">5+</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Categories</div>
              </div>
              <div className="text-center">
                <div className="heading-font text-2xl font-black text-primary">Global</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Reach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}