'use client'

const team = [
  {
    name: 'Yohannes Gebreab',
    role: 'Host and Managing Director',
    image: '/assets/yhonannes.png',
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
    <section className="relative w-full overflow-hidden bg-primary px-6 py-24 md:px-12 lg:px-16 xl:px-24">
      {/* Decorative bg blobs */}
      <div
        className="pointer-events-none absolute -right-[120px] -top-[120px] h-[520px] w-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(30,67,128,0.55) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ── Header ── */}
        <header className="mb-14">
          <p className="mb-4 inline-flex items-center gap-2.5 font-body text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">
            <span className="block h-[2px] w-7 rounded-sm bg-secondary" />
            The Crew
          </p>

          <h2 className="heading-font text-[clamp(32px,4vw,52px)] font-black leading-[1.05] tracking-[-0.02em] text-white">
            Meet our <span className="text-secondary">team</span>
          </h2>

          <p className="mt-4 max-w-[560px] font-body text-[15px] font-light leading-relaxed text-white/50">
            A passionate group of professionals dedicated to bringing you
            authentic stories, bold conversations, and fresh perspectives from
            the heart of the community.
          </p>
        </header>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-optional opacity-0"
              style={{
                animation: `cardIn 0.7s cubic-bezier(0.22,1,0.36,1) ${0.08 + index * 0.1}s forwards`,
              }}
            >
              {/* Photo */}
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-center-top transition-transform duration-[550ms] ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="pointer-events-none absolute inset-0 transition-all duration-500"
                style={{
                  background:
                    'linear-gradient(to top, rgba(13,21,44,0.96) 0%, rgba(13,21,44,0.60) 38%, rgba(13,21,44,0.0) 70%)',
                }}
              />

              {/* Accent dot top-left */}
              <span className="absolute left-4 top-4 h-2 w-2 scale-0 rounded-full bg-secondary opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />

              {/* Yellow accent left border */}
              <span className="absolute bottom-0 left-0 z-10 h-0 w-[3px] rounded-r-sm bg-secondary transition-all duration-[400ms] ease-out group-hover:h-full" />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 pb-[18px]">
                <h3 className="heading-font text-base font-bold text-white tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-xs font-normal tracking-wide text-white/55">
                  {member.role}
                </p>

                {/* Social icons */}
                <div className="mt-3.5 flex translate-y-1.5 gap-2 opacity-75 transition-all duration-350 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href="#"
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition-all duration-[220ms] hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-primary"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452H16.89v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.974 1.974 0 110-3.948 1.974 1.974 0 010 3.948zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition-all duration-[220ms] hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-primary"
                    aria-label={`${member.name} Instagram`}
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition-all duration-[220ms] hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-primary"
                    aria-label={`${member.name} Twitter/X`}
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Keyframes (injected once) ── */}
      <style jsx>{`
        @keyframes cardIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        article {
          transform: translateY(36px);
        }
      `}</style>
    </section>
  )
}