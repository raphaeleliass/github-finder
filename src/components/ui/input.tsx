import clsx from 'clsx'
import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        'rounded-md px-2 ring-1 py-2 w-full ring-neutral-900 focus:ring-2 placeholder:text-neutral-700 focus:ring-neutral-900 text-neutral-950 focus:border-none focus:outline-none',
        className
      )}
    />
  )
}

export default Input
