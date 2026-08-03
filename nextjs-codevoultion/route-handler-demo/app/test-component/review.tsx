export default async function TestReviewComponent() {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });
  return <h3>Test Review Coomponent</h3>;
}
