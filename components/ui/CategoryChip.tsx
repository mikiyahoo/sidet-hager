import { cn } from '@/lib/utils/cn'

interface CategoryChipProps {
  label: string
  variant?: 'dark' | 'light'
  className?: string
}

export default function CategoryChip({
  label,
  variant = 'dark',
  className,
}: CategoryChipProps) {
  return (
    <span
      className={cn(
        'w-max rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest',
        variant === 'dark'
          ? 'bg-primaryLight text-white'
          : 'bg-secondary/10 text-primary',
        className
      )}
    >
      {label}
    </span>
  )
}