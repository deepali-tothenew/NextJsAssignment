import { NextResponse } from 'next/server';

export function middleware(request) {
  // Log request details
  console.log('Request URL:', request.url);
  console.log('Request Method:', request.method);
//   console.log('Request Headers:', request.headers);

  return NextResponse.next();
}
