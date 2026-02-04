import React from 'react'

// Divider Component
interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', className = '', ...props }, ref) => {
    const orientationClass = orientation === 'vertical' ? 'h-full w-px' : 'divider'
    return <div ref={ref} className={`${orientationClass} ${className}`} {...props} />
  }
)
Divider.displayName = 'Divider'

// Flex Component
interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({
    direction = 'row',
    align = 'center',
    justify = 'start',
    gap = 'md',
    className = '',
    ...props
  }, ref) => {
    const directionClass = direction === 'col' ? 'flex-col' : 'flex-row'
    const alignClass = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    }[align]
    const justifyClass = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    }[justify]
    const gapClass = {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    }[gap]

    return (
      <div
        ref={ref}
        className={`flex ${directionClass} ${alignClass} ${justifyClass} ${gapClass} ${className}`}
        {...props}
      />
    )
  }
)
Flex.displayName = 'Flex'

// Stack Component (Column layout)
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ gap = 'md', className = '', ...props }, ref) => {
    const gapClass = {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    }[gap]

    return (
      <div
        ref={ref}
        className={`flex flex-col ${gapClass} ${className}`}
        {...props}
      />
    )
  }
)
Stack.displayName = 'Stack'

// Text Component
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'foreground' | 'muted' | 'primary' | 'secondary' | 'accent' | 'destructive'
  truncate?: boolean
  children: React.ReactNode
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({
    size = 'base',
    weight = 'normal',
    color = 'foreground',
    truncate = false,
    className = '',
    ...props
  }, ref) => {
    const sizeClass = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    }[size]

    const weightClass = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    }[weight]

    const colorClass = {
      foreground: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      destructive: 'text-destructive',
    }[color]

    const truncateClass = truncate ? 'truncate' : ''

    return (
      <p
        ref={ref}
        className={`${sizeClass} ${weightClass} ${colorClass} ${truncateClass} ${className}`}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'

// Section Component
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'muted' | 'primary'
  children: React.ReactNode
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ size = 'md', variant = 'default', className = '', ...props }, ref) => {
    const sizeClass = {
      sm: 'section-sm',
      md: 'section',
      lg: 'section-lg',
    }[size]

    const variantClass = {
      default: 'bg-background',
      muted: 'bg-muted/30',
      primary: 'bg-primary/5',
    }[variant]

    return (
      <section
        ref={ref}
        className={`${sizeClass} ${variantClass} ${className}`}
        {...props}
      />
    )
  }
)
Section.displayName = 'Section'

// Badge Group Component
interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`flex flex-wrap gap-2 ${className}`} {...props} />
  )
)
BadgeGroup.displayName = 'BadgeGroup'
