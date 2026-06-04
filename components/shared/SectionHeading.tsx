interface SectionHeadingProps {
  tag?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  tag,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
            light
              ? 'bg-white/20 text-white'
              : 'bg-blue-100 text-blue-700'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-blue-100' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
