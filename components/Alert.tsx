import React from 'react'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'info' | 'success' | 'warning' | 'error'
  children: React.ReactNode
  title?: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className = '', type = 'info', title, children, ...props }, ref) => {
    const typeClass = {
      info: 'alert-info',
      success: 'alert-success',
      warning: 'alert-warning',
      error: 'alert-error',
    }[type]

    return (
      <div ref={ref} className={`alert ${typeClass} ${className}`} {...props}>
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        {children}
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export default Alert
