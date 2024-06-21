import { cn } from '@/lib/utils'
import { ComponentProps, PropsWithChildren } from 'react'

type SidebarNavProps = ComponentProps<'nav'>

export const SidebarNav = ({
  children,
  className,
  ...props
}: PropsWithChildren<SidebarNavProps>) => {
  return (
    <nav className={cn(className)} {...props}>
      {children}
    </nav>
  )
}
