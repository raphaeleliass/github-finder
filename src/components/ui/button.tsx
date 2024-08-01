import clsx from 'clsx'
import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex flex-row bg-blue-600 rounded-md text-white mx-auto px-4 py-3 hover:bg-blue-700 transition-all justify-center items-center',
        className
      )}
      {...props}
    />
  )
}

export default Button
