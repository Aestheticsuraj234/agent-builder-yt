import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const protectedRoutes = ["/"];

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const session = getSessionCookie(request);

 
  if (protectedRoutes.includes(path) && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
