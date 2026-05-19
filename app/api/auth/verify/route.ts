import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'fallback-secret-change-me'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value

  if (!token) {
    return NextResponse.json({ authorized: false }, { status: 401 })
  }

  try {
    jwt.verify(token, JWT_SECRET)
    return NextResponse.json({ authorized: true })
  } catch {
    return NextResponse.json({ authorized: false }, { status: 401 })
  }
}