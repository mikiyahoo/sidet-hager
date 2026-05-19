import { cn } from '@/lib/utils/cn'
import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
}

export default function CTAButton({
  children,
  variant = 'primary',
  className,
  onClick,
}: CTAButtonProps) {
  const baseStyles =
    'rounded-xl px-8 py-4 font-bold text-left transition hover:scale-[1.02]'

  const variants = {
    primary:
      'bg-secondary text-primary shadow-glow hover:bg-white',
    secondary:
      'bg-primary text-white hover:bg-primaryLight',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg px-6 py-3',
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  )
}