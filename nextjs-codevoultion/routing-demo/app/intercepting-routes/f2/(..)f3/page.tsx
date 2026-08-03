import Link from "next/link";
export default function F3Route() {
  return (
    <>
      <Link className="text-blue-500" href="/intercepting-routes">to the Home</Link>
      <h3>F3 intercepted Route</h3>
    </>
  );
}
