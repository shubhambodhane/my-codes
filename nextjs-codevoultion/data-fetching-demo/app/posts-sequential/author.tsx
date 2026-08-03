export default async function GetAuthorName({
  authorId,
}: {
  authorId: number;
}) {
  type authorType = {
    id: number;
    name: string;
  };
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const url = `https://jsonplaceholder.typicode.com/users/${authorId}`;
  const api = await fetch(url);
  const author: authorType = await api.json();
  return (
    <>
      <h4>Written by Author: {author.name}</h4>
    </>
  );
}
