import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'fallback-secret-change-me'

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  // If no valid token, redirect to login
  if (!token) {
    redirect('/admin/login')
  }

  try {
    jwt.verify(token, JWT_SECRET)
  } catch {
    redirect('/admin/login')
  }

  return <>{children}</>
}