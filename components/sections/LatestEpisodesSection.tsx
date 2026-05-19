'use client'

import { useState } from 'react'
import ReactPlayer from 'react-player'
import { motion, AnimatePresence } from 'framer-motion'
import { mockEpisodes } from '@/lib/data/mockEpisodes'

const categories = [
  'Migration Journeys',
  'Lost & Living Dreams',
  'Misassumptions',
  'Identity',
  'Reflections',
]

export default function LatestEpisodesSection() {
  const [expanded, setExpanded] = useState(false)
  const featured = mockEpisodes.find((e) => e.isFeatured) || mockEpisodes[0]
  const remaining = mockEpisodes.filter((e) => e.id !== featured.id).slice(0, 4)

  return (
    <section
      id="latest-episodes"
      className="min-h-screen bg-backgroundLight px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-font text-4xl font-black text-primary">
          Latest Broadcasts
        </h2>

        {/* Featured episode - tall */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-2xl min-h-[360px]">
            <ReactPlayer
              url={featured.videoUrl}
              width="100%"
              height="100%"
              controls
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="w-max rounded-full bg-primaryLight px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {featured.category}
            </span>

            <span className="mt-4 text-sm text-gray-500">
              {new Date(featured.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </span>

            <h3 className="heading-font mt-4 text-4xl font-black text-primary">
              {featured.title}
            </h3>

            <p className="mt-6 text-base leading-relaxed text-gray-600">
              {featured.shortDetail}
            </p>
          </div>
        </div>

        {/* Remaining episodes - cards with embedded video */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {remaining.map((episode) => (
            <div
              key={episode.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-video bg-gray-900 overflow-hidden">
                <ReactPlayer
                  url={episode.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>

              <div className="p-5">
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {episode.category}
                </span>

                <h4 className="heading-font mt-3 text-lg font-black text-primary leading-tight">
                  {episode.title}
                </h4>

                <p className="mt-2 text-xs text-gray-400">
                  {new Date(episode.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mx-auto mt-16 block rounded-2xl bg-primary px-10 py-4 font-bold text-white transition hover:bg-primaryLight"
        >
          Visit More Episodes
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-16 overflow-hidden"
            >
              <div className="grid gap-8 lg:grid-cols-3">
                {categories.map((category) => (
                  <div key={category} className="rounded-2xl bg-white p-8">
                    <h4 className="heading-font text-2xl font-black text-primary">
                      {category}
                    </h4>

                    <ul className="mt-6 space-y-4">
                      <li className="text-gray-600">
                        The emotional reality behind migration.
                      </li>
                      <li className="text-gray-600">
                        The emotional reality behind migration.
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}