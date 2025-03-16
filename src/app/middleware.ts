import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/old-about')) {
    return NextResponse.redirect(new URL('/about', request.url));
  }
  return NextResponse.next();
}
export const config = {
    matcher: [
      '/old-about/:path*',
      // Add other paths you want to handle
    ],
  };