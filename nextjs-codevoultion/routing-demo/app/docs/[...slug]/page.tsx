import TestComponent from "@/component/test";

export default async function SlugPageDetails({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug.length === 1) {
    return <h4>address bar & slug length 1: </h4>;
  } else if (slug.length === 2) {
    return <h4>address bar & slug length 2</h4>;
  } else if (slug.length === 3) {
    return <TestComponent></TestComponent>;
  } 
  return (
    <>
      <h3>Slug usage:</h3>
      <p>current address bar:{slug}</p>
      <p>as per the slug length we can display the element as well as react component</p>
      <p>if all the condition is failed it will show last return statement</p>
    </>
  );
}
