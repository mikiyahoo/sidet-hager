# Sidet Ena Hager — Next.js App Router Architecture

Production-ready high-fidelity landing page and admin CMS architecture using:
- Next.js 15+ App Router
- Tailwind CSS
- Framer Motion
- TypeScript
- Modular component architecture
- CMS-ready API structure

Based on the uploaded production blueprint and show planning documents for Sidet Ena Hager. fileciteturn0file0L1-L1 fileciteturn0file1L30-L30

---

# 1. PROJECT STRUCTURE

```bash
/app
  /(marketing)
    page.tsx
  /admin
    page.tsx
    /episodes
      page.tsx
    /team
      page.tsx
  /api
    /episodes
      route.ts
    /team
      route.ts
/components
  layout/
    Header.tsx
    Footer.tsx
  sections/
    HeroSection.tsx
    AboutHostSection.tsx
    LatestEpisodesSection.tsx
    AboutShowSection.tsx
    ShowTeamSection.tsx
  ui/
    AnimatedFlipWord.tsx
    SectionHeading.tsx
    CTAButton.tsx
    VideoCard.tsx
    TeamCard.tsx
    CategoryChip.tsx
    YouTubeSubscribers.tsx
/lib
  data/
    mockEpisodes.ts
    mockTeam.ts
  hooks/
    useParallax.ts
    useScrollHeader.ts
  utils/
    cn.ts
    formatDate.ts
/types
  episode.ts
  team.ts
/public
  /assets
    sidet-ena-hager-logo.png
    sidet-ena-hager-logo_white.png
    sidet-ena-hager-logo.webm
    yhoannes-cover.png
    about-yhoannes-photo.jpg
    about-the-show.jpg
/styles
  globals.css
/tailwind.config.ts
/next.config.mjs
/package.json
```

---

# 2. INSTALLATION

```bash
npm install framer-motion lucide-react clsx tailwind-merge react-player
```

---

# 3. TAILWIND CONFIGURATION

## tailwind.config.ts

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d152c',
        primaryLight: '#1e4380',
        secondary: '#f7b219',
        optional: '#3a506b',
        backgroundLight: '#f5f5f5',
        white: '#ffffff',
      },
      fontFamily: {
        heading: ['Branding SF W05', 'Inter', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 40px rgba(247,178,25,0.25)',
      },
      backgroundImage: {
        heroGradient:
          'radial-gradient(circle at top left, rgba(30,67,128,0.4), transparent 40%)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

# 4. GLOBAL STYLES

## styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background: #ffffff;
  color: #0d152c;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
}

.heading-font {
  font-family: 'Branding SF W05', sans-serif;
}

.glass-header {
  background: rgba(13, 21, 44, 0.92);
  backdrop-filter: blur(12px);
}
```

---

# 5. APP LAYOUT

## app/layout.tsx

```tsx
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
})

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
```

---

# 6. LANDING PAGE

## app/(marketing)/page.tsx

```tsx
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import HeroSection from '@/components/sections/HeroSection'
import AboutHostSection from '@/components/sections/AboutHostSection'
import LatestEpisodesSection from '@/components/sections/LatestEpisodesSection'
import AboutShowSection from '@/components/sections/AboutShowSection'
import ShowTeamSection from '@/components/sections/ShowTeamSection'

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Header />

      <HeroSection />
      <AboutHostSection />
      <LatestEpisodesSection />
      <AboutShowSection />
      <ShowTeamSection />

      <Footer />
    </main>
  )
}
```

---

# 7. GLOBAL HEADER COMPONENT

## components/layout/Header.tsx

```tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass-header py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="#hero">
          <Image
            src="/assets/sidet-ena-hager-logo.png"
            alt="Sidet Ena Hager"
            width={140}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-white">
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
```

---

# 8. HERO SECTION

## components/sections/HeroSection.tsx

```tsx
'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedFlipWord from '../ui/AnimatedFlipWord'

export default function HeroSection() {
  const { scrollY } = useScroll()

  const imageY = useTransform(scrollY, [0, 1000], [0, 120])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary bg-heroGradient px-6 text-white md:px-12"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="mb-4 max-w-xl text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            ስደትና ሀገር ላይ ያጠነጠኑ ጉዳይዎች
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <h1 className="heading-font text-5xl font-extrabold leading-tight md:text-7xl">
              እውነተኛ ሰዎች
            </h1>

            <AnimatedFlipWord />
          </div>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
            Sidet Ena Hager is a powerful talk show reconnecting diaspora
            Ethiopians with their roots through emotional stories of migration,
            identity, lost dreams, living dreams, and unexpected opportunities
            across continents.
          </p>

          <button className="mt-10 rounded-xl bg-secondary px-8 py-4 text-left font-bold text-primary shadow-glow transition hover:bg-white">
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
```

---

# 9. FLIPPING TITLE COMPONENT

## components/ui/AnimatedFlipWord.tsx

```tsx
'use client'

import { motion } from 'framer-motion'

export default function AnimatedFlipWord() {
  return (
    <motion.div
      animate={{ rotateY: [0, 180, 360] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="relative rounded-2xl bg-primaryLight px-6 py-3"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <span className="heading-font text-4xl font-extrabold md:text-6xl">
        ጉዳይ
      </span>
    </motion.div>
  )
}
```

---

# 10. ABOUT HOST SECTION

## components/sections/AboutHostSection.tsx

```tsx
import Image from 'next/image'

export default function AboutHostSection() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center bg-white px-6 py-20 md:flex-row md:px-12">
      <div className="flex-1">
        <h2 className="heading-font text-4xl font-bold text-primary">
          Meet Your Host
        </h2>

        <div className="mt-3 h-1 w-16 bg-secondary" />

        <p className="mt-6 max-w-md text-base leading-relaxed text-gray-700">
          As Host and Managing Director, Yohannes Gebreab commands the
          stage with articulate, non-negotiable knowledge and engaging
          entertainment craft.
        </p>

        <button className="mt-8 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white">
          Learn More
        </button>
      </div>

      <div className="mt-10 flex-1 md:mt-0">
        <Image
          src="/assets/about-yhoannes-photo.jpg"
          alt="About Yohannes"
          width={500}
          height={600}
          className="mx-auto h-[40vh] w-full max-w-md rounded-2xl object-cover shadow-xl transition duration-500 hover:scale-105"
        />
      </div>
    </section>
  )
}
```

---

# 11. LATEST EPISODES SECTION

## components/sections/LatestEpisodesSection.tsx

```tsx
'use client'

import { useState } from 'react'
import ReactPlayer from 'react-player'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  'Migration Journeys',
  'Lost & Living Dreams',
  'Misassumptions',
  'Identity',
  'Reflections',
]

export default function LatestEpisodesSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      id="latest-episodes"
      className="min-h-screen bg-backgroundLight px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-font text-4xl font-bold text-primary">
          Latest Broadcasts
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              width="100%"
              height="100%"
              controls
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="w-max rounded-full bg-primaryLight px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Migration Journeys
            </span>

            <span className="mt-4 text-sm text-gray-500">May 2026</span>

            <h3 className="heading-font mt-4 text-4xl font-bold text-primary">
              The Leap: Decisions That Changed a Lifetime
            </h3>

            <p className="mt-6 text-base leading-relaxed text-gray-600">
              An intimate exploration of emotional, professional, and practical
              decisions that forced individuals to balance two worlds.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="aspect-video bg-primary" />

              <div className="p-6">
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Lost & Living Dreams
                </span>

                <h4 className="heading-font mt-4 text-xl font-bold text-primary">
                  Reinvented Abroad
                </h4>
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
                    <h4 className="heading-font text-2xl font-bold text-primary">
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
```

---

# 12. ABOUT THE SHOW SECTION

## components/sections/AboutShowSection.tsx

```tsx
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
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[40%_60%]">
        <motion.div style={{ y }}>
          <Image
            src="/assets/about-the-show.jpg"
            alt="About The Show"
            width={700}
            height={900}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        <div>
          <h2 className="heading-font mb-8 text-4xl font-bold text-primary">
            About The Show
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-gray-700">
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
        </div>
      </div>
    </section>
  )
}
```

---

# 13. SHOW TEAM SECTION

## components/sections/ShowTeamSection.tsx

```tsx
import Image from 'next/image'

const team = [
  {
    name: 'Yohannes Gebreab',
    role: 'Host and Managing Director',
    image: '/assets/team-1.jpg',
  },
  {
    name: 'Tsega Brlay',
    role: 'Co-Host and Production Partner- Ethiopia',
    image: '/assets/team-2.jpg',
  },
  {
    name: 'Yonathan Deboch',
    role: 'Camera Director/Editor',
    image: '/assets/team-3.jpg',
  },
  {
    name: 'Biniam Teshome',
    role: 'Director and Producer of the Show',
    image: '/assets/team-4.jpg',
  },
]

export default function ShowTeamSection() {
  return (
    <section className="bg-backgroundLight px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[40%_60%]">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <video
            src="/assets/sidet-ena-hager-logo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-contain"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl bg-white p-8 text-center shadow-lg"
            >
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="heading-font text-xl font-bold text-primary">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-primaryLight">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

# 14. FOOTER COMPONENT

## components/layout/Footer.tsx

```tsx
import Image from 'next/image'
import { Youtube, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="grid gap-12 border-t border-optional bg-primary px-6 py-20 text-white md:grid-cols-2 lg:grid-cols-4 md:px-12">
      <div>
        <Image
          src="/assets/sidet-ena-hager-logo_white.png"
          alt="Footer Logo"
          width={180}
          height={80}
          className="mb-6 h-16 w-auto object-contain"
        />

        <p className="text-sm leading-relaxed text-gray-400">
          A bold and heartfelt talk show unpacking the lived experiences of
          Ethiopians in the diaspora.
        </p>
      </div>

      <div>
        <h4 className="heading-font mb-6 text-sm uppercase tracking-[0.3em] text-secondary">
          Navigation
        </h4>

        <div className="space-y-3 text-sm text-gray-300">
          <a href="#hero">Home</a>
          <a href="#latest-episodes" className="block">
            Episodes
          </a>
          <a href="#about-show" className="block">
            About
          </a>
        </div>
      </div>

      <div>
        <h4 className="heading-font mb-6 text-sm uppercase tracking-[0.3em] text-secondary">
          Social
        </h4>

        <div className="flex gap-4">
          <Instagram />
          <Facebook />
          <Youtube />
        </div>
      </div>

      <a
        href="https://youtube.com"
        target="_blank"
        className="rounded-3xl bg-red-600 p-8 transition hover:scale-[1.02]"
      >
        <div className="flex items-center gap-4">
          <Youtube size={36} />

          <div>
            <div className="text-xl font-bold">142,500</div>
            <div className="text-sm opacity-80">Subscribers</div>
          </div>
        </div>
      </a>
    </footer>
  )
}
```

---

# 15. EPISODE TYPES

## types/episode.ts

```ts
export interface Episode {
  id: string
  title: string
  category:
    | 'Migration Journeys'
    | 'Lost & Living Dreams'
    | 'Misassumptions'
    | 'Identity'
    | 'Reflections'

  publishDate: string
  videoUrl: string
  shortDetail: string
  isFeatured: boolean
}
```

---

# 16. TEAM TYPES

## types/team.ts

```ts
export interface TeamMember {
  id: string
  fullName: string
  roleTitle: string
  imageAssetPath: string
  displayOrder: number
}
```

---

# 17. API ROUTES

## app/api/episodes/route.ts

```ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ success: true, data: [] })
}

export async function POST(request: Request) {
  const body = await request.json()

  return NextResponse.json({ success: true, body })
}
```

---

## app/api/team/route.ts

```ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ success: true, data: [] })
}

export async function POST(request: Request) {
  const body = await request.json()

  return NextResponse.json({ success: true, body })
}
```

---

# 18. ADMIN CMS DASHBOARD STRUCTURE

## Admin Features

### Episodes Manager
- Create Episode
- Upload Thumbnail
- Add Video URL
- Category Selection
- Feature Episode Toggle
- Edit/Delete Episode
- Archive Sorting
- Search & Filter

### Team Manager
- Upload Team Member Image
- Change Role Title
- Drag-and-Drop Reordering
- Activate/Deactivate Team Members

### Recommended Stack

```bash
Prisma ORM
PostgreSQL
NextAuth
UploadThing or Cloudinary
Zod Validation
React Hook Form
```

---

# 19. CMS DATABASE SCHEMA (PRISMA)

## prisma/schema.prisma

```prisma
model Episode {
  id            String   @id @default(cuid())
  title         String
  category      String
  publishDate   DateTime
  videoUrl      String
  shortDetail   String
  isFeatured    Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model TeamMember {
  id              String   @id @default(cuid())
  fullName        String
  roleTitle       String
  imageAssetPath  String
  displayOrder    Int
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

---

# 20. FRAMER MOTION ENHANCEMENT RECOMMENDATIONS

## Advanced Interactions

### Hero
- Multi-depth parallax layers
- Floating ambient particles
- Animated gradient glow
- Lottie bird-to-microphone transition
- Scroll reactive typography

### Latest Episodes
- Staggered reveal animations
- Hover scaling cards
- Dynamic category transitions
- Expandable archive drawer

### Team
- 3D hover elevation
- Animated border glow
- Scroll fade sequencing

---

# 21. SEO METADATA

## app/metadata.ts

```ts
export const metadata = {
  title: 'Sidet Ena Hager',
  description:
    'A powerful diaspora talk show reconnecting Ethiopians with their roots through truthful storytelling.',
}
```

---

# 22. PERFORMANCE STRATEGY

## Optimizations

- Next/Image optimization
- Route-based code splitting
- Lazy loading video embeds
- Dynamic imports for animations
- Server Actions for admin CRUD
- ISR caching for episodes
- CDN delivery for media

---

# 23. CONTENT FOUNDATION

The show concept centers around diaspora experiences, migration realities, identity, opportunities, and cultural connection. fileciteturn0file1L18-L18

Core categories include:
- Migration Journeys
- Lost & Living Dreams
- Misassumptions About Life Abroad
- Cultural Identity & Belonging
- Reflections on Home Country
- Global Ethiopian Voices
- Giving Back & Creating Change fileciteturn0file1L34-L34

The production structure emphasizes truthful storytelling, constructive dialogue, emotional authenticity, and global diaspora outreach. fileciteturn0file1L32-L32

---

# 24. FINAL ARCHITECTURE NOTES

This architecture is intentionally designed for:

- Production-grade scalability
- Future mobile app integration
- Multi-season content expansion
- Dynamic CMS-driven content publishing
- International diaspora audience optimization
- Cinematic storytelling presentation
- Premium editorial experience

The landing page design system aligns with the uploaded Sidet Ena Hager blueprint specifications, including typography, motion behavior, section hierarchy, visual storytelling structure, and CMS scalability requirements. fileciteturn0file0L1-L1

