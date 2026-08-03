// export const dynamicParams = true;
// if true they dyanmic route will display the content similar like pre-rendered static pages
// Id's which we are using from the function generateStaticParams() 

export const dynamicParams = false;
// the 404: Page not found page will be displayed

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function ProductListPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h4>Product {id}</h4>
      <p>Proudct desciption for product {id}</p>
    </>
  );
}

export default ProductListPage;
