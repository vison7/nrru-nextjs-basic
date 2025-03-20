import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  
  // console.log("token value:",token?.name)
  // protect url
  if (request.nextUrl.pathname.startsWith("/profile")) {
    if (!token?.value) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  const response = NextResponse.next();
  return response;
}

