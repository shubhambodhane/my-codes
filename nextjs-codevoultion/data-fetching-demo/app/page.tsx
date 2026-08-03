import Link from "next/link";
import Search from "./components/search";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h3>Data Fetching in Next JS</h3>
        <p>Data Fetching component</p>
        <ul>
          <li>
            Client Component:
            <Link className="text-blue-400" href={"/users-client"}>
              Click here
            </Link>
          </li>
          <li>
            Server Component:
            <Link className="text-blue-400" href={"/users-server"}>
              Click here
            </Link>
          </li>
        </ul>
        <p>Data fetching: way</p>
        <ul>
          <li>
            Sequential:
            <Link className="text-blue-400" href={"/posts-sequential"}>
              Click here
            </Link>
          </li>
          <li>
            Parallel:
            <Link className="text-blue-400" href={"/posts-parallel"}>
              Click here
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            ProductsDB: Check products list from DB sqLite
            <Link className="text-blue-400" href={"/products-db"}>
              Click here
            </Link>
          </li>
          <li>
            Add products to DB: Server Component : no validation
            <Link className="text-blue-400" href={"/products-db-create"}>
              Click here
            </Link>
          </li>
          <li>
            Add products to DB: Client Component: with validation
            <Link className="text-blue-400" href={"/products-form-validation"}>
              Click here
            </Link>
          </li>
          <li>
            Search : <Search />
          </li>
        </ul>

        <p>Use below URLs:</p>
        <span>
          for both:Sequential & Parallel
          https://jsonplaceholder.typicode.com/posts
        </span>
        <span>
          Sequential: for author: https://jsonplaceholder.typicode.com/users/3
          :: 3 must be dynamic id
        </span>
        <span>parallel:: https://jsonplaceholder.typicode.com/albums</span>
        <span>
          ?userId=1 :: add this at the end of post and album to get the data
          based on userId
        </span>
      </main>
    </div>
  );
}
