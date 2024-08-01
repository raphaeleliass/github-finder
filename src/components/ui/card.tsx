import clsx from 'clsx'
import React from 'react'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'flex justify-center items-center flex-col max-w-xs w-full gap-8 rounded-lg shadow-lg px-4 py-6',
      className
    )}
    {...props}
  />
))

Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('gap-2 w-full flex flex-col', className)}
    {...props}
  />
))

CardHeader.displayName = 'CardHeader'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('gap-2 flex flex-col w-full', className)}
    {...props}
  />
))

CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('gap-2 flex flex-col w-full', className)}
    {...props}
  />
))

CardFooter.displayName = 'CardFooter'

const Cardtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={clsx('font-semibold', className)} {...props} />
))

Cardtitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={clsx('text-sm', className)} {...props} />
))

CardDescription.displayName = 'CardDescription'

export { Card, CardHeader, CardContent, CardFooter, Cardtitle, CardDescription }
