import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'max'
  children: React.ReactNode
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = '', size = 'max', ...props }, ref) => {
    const sizeClass = {
      sm: 'container-sm',
      md: 'container-md',
      max: 'container-max',
    }[size]

    return (
      <div ref={ref} className={`${sizeClass} ${className}`} {...props} />
    )
  }
)

Container.displayName = 'Container'

export default Container
