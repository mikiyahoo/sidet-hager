'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false)
  const [checking, setChecking] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/auth/verify')
      .then((res) => {
        if (!res.ok) throw new Error()
        setAuthorized(true)
      })
      .catch(() => {
        router.replace('/admin/login')
      })
      .finally(() => setChecking(false))
  }, [router])

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <p className="text-sm text-white/60">Checking authorization...</p>
        </div>
      </div>
    )
  }

  if (!authorized) return null

  return <>{children}</>
}