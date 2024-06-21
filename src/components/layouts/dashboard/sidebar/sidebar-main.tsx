import { cn } from '@/lib/utils'
import { ComponentProps, PropsWithChildren } from 'react'

type SidebarMainProps = ComponentProps<'main'>

export const SidebarMain = ({
  children,
  className,
  ...props
}: PropsWithChildren<SidebarMainProps>) => {
  return (
    <main className={cn('px-3', className)} {...props}>
      {children}
    </main>
  )
}
