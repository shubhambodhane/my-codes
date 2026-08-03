export default async function ProductsIdPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productID = (await params).productId;
  return (
    <>
      <h4>
        {productID
          ? `This is Product page and Id=${productID}`
          : "This is Products ID page"}
      </h4>

      <p>
        Part 1: Dynamic Route: Same Page: without Param How? - using square
        brackets we can create dynamic route - create folder wrapping brackets
        like : {"[ID]"}: add the page to display content in it. - If we{" "}
        {"don't"} import any param and destructure them in our component we will
        able see the same page for the dyamic id for the route created
      </p>
      <p>
        Part 2: Dyanmic Route: as per the ID different data( making more dyanmic
        with API data) How? accept the dynamic value and display the data,
        accept and destructure param.
        - we make the function as async
        - we destructure params: write type
        - params will be Promise {'<{defined id: type for it}>'}
        - use it in variable like example(await params).productID;
      </p>
    </>
  );
}
