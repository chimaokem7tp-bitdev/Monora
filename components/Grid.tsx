import React from 'react'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 'auto'
  children: React.ReactNode
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className = '', cols = 'auto', ...props }, ref) => {
    const gridClass = {
      1: 'grid grid-cols-1',
      2: 'grid-2',
      3: 'grid-3',
      4: 'grid-4',
      'auto': 'grid-auto',
    }[cols]

    return (
      <div ref={ref} className={`${gridClass} ${className}`} {...props} />
    )
  }
)

Grid.displayName = 'Grid'

export default Grid
