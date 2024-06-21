'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

type SidebarLinkProps = {
  className?: string
} & LinkProps

export const SidebarLink = ({
  className,
  ...props
}: PropsWithChildren<SidebarLinkProps>) => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return String(pathname).includes(path)
  }

  return (
    <Link
      {...props}
      data-active={isActive(String(props.href))}
      className={cn([
        'flex items-center rounded-md px-3 py-2 text-xs transition-colors duration-200 ease-in-out hover:bg-secondary data-[active=true]:bg-secondary',
        className,
      ])}
    />
  )
}
