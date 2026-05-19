'use client'

import { ReactNode } from 'react'
import AdminGuard from '@/components/ui/AdminGuard'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminGuard>{children}</AdminGuard>
}
