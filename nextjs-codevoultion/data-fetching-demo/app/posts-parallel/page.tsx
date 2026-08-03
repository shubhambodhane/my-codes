export default function PostsParallelDataFetching() {
  return (
    <section>
      <h4 className="font-bold">Data Fetching: Parallel </h4>
      <ul className="list-disc">
        <li>
          Request in route are eagerly initiated and will load data at same
          time.
        </li>
        <li>This reduces the toal time it takes to load data.</li>
        <li>
          we can use two different APIs to get and display data for the same
          user. (like what work done by same actor)
        </li>
        <li>
          When we fetching the data we use should use allSettled method instead
          the all method. helpful for managing better data.
        </li>
        <li>ex. we display user post and user album free api {"jsonholder"}</li>
        <li>to check the parallel fetching hit the url with number 1 to 9 ex. /post-parallel/3</li>
      </ul>
    </section>
  );
}
