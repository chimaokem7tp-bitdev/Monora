import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'destructive'
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = '', variant = 'primary', ...props }, ref) => {
    const variantClass = {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      accent: 'badge-accent',
      success: 'badge-success',
      warning: 'badge-warning',
      destructive: 'badge-destructive',
    }[variant]

    return (
      <div ref={ref} className={`badge ${variantClass} ${className}`} {...props} />
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
