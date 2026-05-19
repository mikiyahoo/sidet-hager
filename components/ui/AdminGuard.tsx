'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Simple check: verify the admin_token cookie exists
    // If redirected here from login, the cookie should be present
    const hasToken = document.cookie.includes('admin_token=')
    
    if (!hasToken) {
      router.replace('/admin/login')
    } else {
      setAuthorized(true)
    }
  }, [router])

  if (!authorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <p className="text-sm text-white/60">Checking authorization...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}