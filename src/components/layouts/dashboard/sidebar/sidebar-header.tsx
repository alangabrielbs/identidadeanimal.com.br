import { cn } from '@/lib/utils'
import { ComponentProps, PropsWithChildren } from 'react'

type SidebarRootProps = ComponentProps<'header'>

export const SidebarHeader = ({
  children,
  className,
  ...props
}: PropsWithChildren<SidebarRootProps>) => {
  return (
    <header
      className={cn(
        'flex h-[65px] items-center border-b border-border px-6 py-3',
        className
      )}
      {...props}
    >
      {children}
    </header>
  )
}
