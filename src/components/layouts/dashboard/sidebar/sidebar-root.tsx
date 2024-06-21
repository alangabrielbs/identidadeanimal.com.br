import { cn } from '@/lib/utils'
import { ComponentProps, PropsWithChildren } from 'react'

type SidebarRootProps = ComponentProps<'aside'>

export const SidebarRoot = ({
  children,
  className,
  ...props
}: PropsWithChildren<SidebarRootProps>) => {
  return (
    <aside
      className={cn(
        'flex flex-col space-y-6 border-r border-border',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}
