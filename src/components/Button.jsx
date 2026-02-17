import React from 'react'

const Button = ({className = '', size = 'default', children, ...props}) => {
    const baseClass = 'relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:bg-primary text-primary-foreground hover:bg-primary/90 bg-primary shadow-primary/25 '
    const sizeClass = {
      sm: 'px-4 py-2 text-sm',
      default: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    const classes = `${baseClass} ${sizeClass[size]} ${className}`
    return (

<button className={classes} {...props}>
        <span className='relative flex items-center justify-center gap-2'>{children}</span>
    </button>
  )
}

export default Button