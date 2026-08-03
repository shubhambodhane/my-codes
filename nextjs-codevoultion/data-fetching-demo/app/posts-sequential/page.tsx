import GetAuthorName from "./author";
import { Suspense } from "react";
export default async function PostSequential() {
  type postsType = {
    id: number;
    title: string;
    body: string;
    userId: number;
  };
  const url = "https://jsonplaceholder.typicode.com/posts";
  const api = await fetch(url);
  const posts: postsType[] = await api.json();
  const filterPost = posts.filter((ps) => {
    return ps.id < 11;
  });
  return (
    <section className="border m-1 px-2 rounded">
      <h3>Post: Sequential Data Fetching</h3>
      {filterPost.map((itm) => {
        return (
          <section className="my-2 p-1 outline rounded" key={itm.id}>
            <div>Id: {itm.id} </div>
            <div>Title: {itm.title}</div>
            <div>Body: {itm.body}</div>
            <Suspense fallback={<span>Loading...</span>}>
              <GetAuthorName authorId={itm.id} />
            </Suspense>
          </section>
        );
      })}
    </section>
  );
}
