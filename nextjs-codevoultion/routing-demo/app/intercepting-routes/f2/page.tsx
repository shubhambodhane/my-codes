import Link from "next/link";
export default function F2Route() {
  return (
    <>
      <Link className="text-blue-500" href="/intercepting-routes">to the Home</Link>
      <h3>F3 Route</h3>
      <Link className="text-blue-400" href="/intercepting-routes/f3">F3 folder up</Link>
    </>
  );
}
