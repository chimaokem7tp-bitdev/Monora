import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'destructive'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantClass = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      ghost: 'btn-ghost',
      outline: 'btn-outline',
      destructive: 'btn-destructive',
    }[variant]

    const sizeClass = {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    }[size]

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`btn ${variantClass} ${sizeClass} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
