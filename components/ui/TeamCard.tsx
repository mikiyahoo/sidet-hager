'use client'

interface TeamCardProps {
  name: string
  role: string
  image: string
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:scale-[1.02]">
      <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-primaryLight to-primary">
        <span className="heading-font text-3xl font-bold text-white">
          {initials}
        </span>
      </div>

      <h3 className="heading-font text-xl font-bold text-primary">
        {name}
      </h3>

      <p className="mt-2 text-sm font-medium text-primaryLight">
        {role}
      </p>
    </div>
  )
}
