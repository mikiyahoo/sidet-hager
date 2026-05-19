import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /admin/* routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Allow everything through — auth protection is handled
  // by the admin layout via cookies() + jwt.verify server-side
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}