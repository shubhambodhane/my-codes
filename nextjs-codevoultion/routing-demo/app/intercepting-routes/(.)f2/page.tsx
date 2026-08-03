import Link from "next/link";
export default function F2InterceptingRoute() {
  return (
    <>
      <Link className="text-blue-400" href="/intercepting-routes">to the Home</Link>
      <h3>F2 intercepted Route</h3>
    </>
  );
}
