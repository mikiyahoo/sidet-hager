interface SectionHeadingProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2
        className={`heading-font text-4xl font-bold ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      <div className="mt-3 h-1 w-16 bg-secondary" />
      {subtitle && (
        <p
          className={`mt-4 max-w-xl text-base leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}