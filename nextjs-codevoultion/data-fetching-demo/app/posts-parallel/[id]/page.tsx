export default async function UserPorfileParallelDataFetch({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  type postType = {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
  type albumType = {
    userId: number;
    id: number;
    title: string;
  };
  const { id } = await params;
  const postUrl = "https://jsonplaceholder.typicode.com/posts";
  const albumUrl = "https://jsonplaceholder.typicode.com/albums";

  async function getUserPosts(userID: number) {
    const api = await fetch(postUrl + `?userId=${userID}`);
    return await api.json();
  }
  async function getUserAlbum(userID: number) {
    const api = await fetch(albumUrl + `?userId=${userID}`);
    return await api.json();
  }
  const postsData = getUserPosts(id);
  const albumsData = getUserAlbum(id);
  const [posts, albums] = await Promise.all([postsData, albumsData]);
  return (
    <>
      <h3>Data based on the userID: {id}</h3>

      <section className="flex justify-evenly">
        {/* Albums data starts here */}
        <div className="w-lg">
          <h4 className="font-bold">Posts:</h4>
          <ul className="outline rounded border-orange-700 m-1 p-2 py-1">
            {posts && posts.length > 0 ? (
              posts.map((itm: postType) => {
                return (
                  <li
                    className="outline border-red-200 rounded-sm my-2 p-1"
                    key={itm.id}
                  >
                    <div>UserId:{itm.userId}</div>
                    <div>Id: {itm.id}</div>
                    <div>Title: {itm.title}</div>
                    <div>Body: {itm.body}</div>
                  </li>
                );
              })
            ) : (
              <p className="font-xl m-1 p-1">No Data Available.</p>
            )}
          </ul>
        </div>
        {/* Albums data starts here */}
        <div className="w-lg">
          <h4 className="font-bold">Albums:</h4>
          <ul className="outline rounded border-orange-700 m-1 p-2 py-1">
            {albums && albums.length > 0 ? (
              albums.map((itm: albumType) => {
                return (
                  <li
                    className="outline border-red-200 rounded-sm my-2 p-1"
                    key={itm.id}
                  >
                    <div>Name:{itm.userId}</div>
                    <div>Username: {itm.id}</div>
                    <div>Email: {itm.title}</div>
                  </li>
                );
              })
            ) : (
              <p className="font-xl m-1 p-1">No Data Available.</p>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
