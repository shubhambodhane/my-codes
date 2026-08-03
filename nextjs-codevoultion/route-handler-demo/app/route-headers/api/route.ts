import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // to access the authentication bearer request we use this way
  // need to configure headers and get the value

  //   const requestHeaders = new Headers(request.headers);
  //   console.log(requestHeaders.get("Authorization"));

  //headers is built in function
  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  //setting and reading cookies and
  // reading cookies from response
  const theme = request.cookies.get("theme");
  console.log("current theme:", theme);

  // setting cookies from built in function 'cookies'
  const cookiesStore = await cookies();
  cookiesStore.set("ResultsFromCookiesFun", "30");
  // reading cookies from built in function 'cookies'
  // cookies function has set,get,has , delete methods as well
  console.log(cookiesStore.get("ResultsFromCookiesFun"));

  return new Response("<h4>Profile data</h4>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
