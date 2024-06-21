
import { DashboardLayout } from '@/components/layouts/dashboard'
import { ReactNode } from 'react'
import Providers from './providers'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <DashboardLayout>{children}</DashboardLayout>
    </Providers>
  )
}
