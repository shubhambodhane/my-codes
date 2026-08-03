export default function ComplexDashboardLayout({
  children,
  notification,
  users,
  ads,
  login,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  users: React.ReactNode;
  ads: React.ReactNode;
  login: React.ReactNode;
}) {
  const loginFlag = true;
  return (
    <>
      {loginFlag ? (
        <>
          <div>{children}</div>
          <div>{notification}</div>
          <div>{users}</div>
          <div>{ads}</div>
        </>
      ) : (
         login 
      )}
    </>
  );
}
