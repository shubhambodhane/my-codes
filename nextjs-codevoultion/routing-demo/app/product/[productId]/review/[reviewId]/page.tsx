import ReviewNotFoundPage from "./not-found";
export default async function ReviewProductId({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  // not found custom page based on specific requirement review,product
  if (parseInt(reviewId) > 1000) {
    return <ReviewNotFoundPage />;
  }
  return (
    <>
      <h4>Nested Dynamic route:</h4>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
      <p>
        Nested dynamic route are created here: product/{productId}/review/
        {reviewId}{" "}
      </p>
      <p>
        function is async, the params will be coming from promise, we need to
        extract the from it
      </p>
      <p>we use await for getting values from the param</p>
    </>
  );
}
