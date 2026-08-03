import Link from "next/link";

function NotificationsPage() {
  return (
    <>
      <h4 className="bg-red-100">Slot: Notifications Page</h4>
      <Link className="text-blue-500" href="/complex-dashboard/latest">Go to Latest notification</Link>
    </>
  );
}
export default NotificationsPage;
