import clsx from 'clsx'
import Link from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

const variantStyles = {
  primary: 'text-purple-900 bg-yellow-500 hover:bg-yellow-600',
  secondary:
    'text-purple-900 bg-purple-200 hover:text-white hover:bg-purple-600',
  accent: 'text-white bg-purple-600 hover:bg-purple-500'
} as const

const sizeStyles = {
  sm: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg'
} as const

type ButtonVariant = keyof typeof variantStyles
type ButtonSize = keyof typeof sizeStyles

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

interface ButtonAsButtonProps
  extends
    BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never
}

interface ButtonAsLinkProps
  extends
    BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export function Button({
  variant = 'primary',
  size = 'lg',
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'font-medium cursor-pointer relative leading-normal inline-flex items-center justify-center duration-300 ease-in-out rounded-full outline-hidden group'

  const finalClassName = clsx(
    baseClasses,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={finalClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    )
  }

  // Otherwise render as button
  return (
    <button
      className={finalClassName}
      type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type || 'button'}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
