// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Just pass the request through without modification
  return NextResponse.next();
}

// Optionally specify paths where middleware applies
export const config = {
  matcher: '/api/:path*', // apply only to API routes
}; 
