import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'fallback-secret-change-me'

const protectedPaths = ['/admin', '/admin/episodes', '/admin/team']
const loginPath = '/admin/login'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /admin/* routes (except login)
  if (!protectedPaths.some((p) => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  // Allow access to login page
  if (pathname === loginPath) {
    return NextResponse.next()
  }

  const token = request.cookies.get('admin_token')?.value

  if (!token) {
    return NextResponse.redirect(new URL(loginPath, request.url))
  }

  try {
    jwt.verify(token, JWT_SECRET)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL(loginPath, request.url))
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}