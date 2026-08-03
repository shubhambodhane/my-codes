import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//REDIRECT: to redirect from specific route to other.
// config constant is used here to navigate

// export default function Middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/middleware", request.url));
// }
// matcher config to check
// export const config = {
//   matcher: "/profile",
// };

// CONDITIONAL STATEMENT: based on the condition it will
// specific condition gets check and redirects next url
// inplace of redirect rewrite can be used as well
// the path name will change content will be same

// export default function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/middleware", request.nextUrl));
//   }
// }

// CACHE setting:using middleware
// theme=dark set using cookie set, if available set
export default function middleware(reqeust: NextRequest) {
  const response = NextResponse.next();
  const themePrefer = reqeust.cookies.get("theme");
  if (!themePrefer) {
    response.cookies.set("theme", "dark");
  }
  //setting custom response
  response.headers.set("custom-header", "custom-value");
  return response;
}

//  CUSTOM-HEADER: set custom header: using middleware
// passing extra information for clinet to debug, scripts
