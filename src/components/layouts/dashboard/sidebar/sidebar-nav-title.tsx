import { cn } from '@/lib/utils'
import { ComponentProps, PropsWithChildren } from 'react'

type SidebarNavTitleProps = ComponentProps<'div'>

export const SidebarNavTitle = ({
  children,
  className,
  ...props
}: PropsWithChildren<SidebarNavTitleProps>) => {
  return (
    <div
      className={cn([
        'ml-3 text-xs uppercase text-muted-foreground',
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  )
}
