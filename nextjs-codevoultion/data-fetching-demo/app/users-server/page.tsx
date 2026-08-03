type users = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
export default async function UsersServerComponent() {
  // to add the waiting and display loading page content
  //   await new Promise((resolve) => {
  //     setTimeout(resolve, 3000);
  //   });
  const url = "https://jsonplaceholder.typicode.com/userss";
  const resp = await fetch(url);
  const users: users[] = await resp.json();

  return (
    <section className="p-2">
      <h3 className="text-xl font-bold">Fetching data: Server Component</h3>
      {
        //   users && users.length > 0 ?
        users.map((itm) => {
          return (
            <li
              className="outline border-red-200 rounded-sm my-2 p-1"
              key={itm.id}
            >
              <div>Name:{itm.name}</div>
              <div>Username: {itm.username}</div>
              <div>Email: {itm.email}</div>
              <div>Phone: {itm.phone}</div>
            </li>
          );
        })
        //   : (
        //     <p className="font-xl m-1 p-1">No Data Available.</p>
        //   )
      }
    </section>
  );
}
