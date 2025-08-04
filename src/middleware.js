import { NextResponse } from 'next/server'

const protectedPaths = ['/admin']

export function middleware(request) {
  const { pathname } = request.nextUrl

  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    const authHeader = request.headers.get('authorization')

    const basicAuth = authHeader?.split(' ')[1]
    const decoded = basicAuth ? atob(basicAuth) : null

    const [user, pwd] = decoded?.split(':') || []

    const adminUser = process.env.ADMIN_USER
    const adminPass = process.env.ADMIN_PASS

    if (user !== adminUser || pwd !== adminPass) {
      return new Response('Authentication Required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin'],
}
