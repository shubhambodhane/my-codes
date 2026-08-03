export default async function TestProductComponent() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return <h3>Test Product Coomponent</h3>;
}
