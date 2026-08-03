import Link from "next/link";

export default function LatestNotificationPage() {
  return (
    <>
      <h4 className="bg-green-150">Its Latest notification Page</h4>
      <span>Latest notification is here:</span>
      <Link className="text-blue-500" href="/complex-dashboard"> Go back default</Link>
    </>
  );
};
