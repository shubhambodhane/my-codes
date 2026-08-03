import ClientDataFetching from "./ClientDataFetching";
export default function UsersClientPage() {
  return (
    <>
      <h3>User Client Component:</h3>
      <h4>When should we use client component for data fetching ?</h4>
      <ul>
        <li>When you need real time updates.</li>
        <li>
          When your data depends on client side interaction that you can not
          predict on server side.
        </li>
      </ul>
      <ClientDataFetching></ClientDataFetching>
    </>
  );
}
