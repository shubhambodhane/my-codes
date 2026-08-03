import TestProductComponent from "../test-component/product";
import TestReviewComponent from "../test-component/review";
import { Suspense } from "react";

export default function Streaming() {
  return (
    <>
      <h4>Streaming Demo</h4>
      <Suspense fallback={<section>Loading Product...</section>}>
        <TestProductComponent />
      </Suspense>
      <Suspense fallback={<section>Loading Review...</section>}>
        <TestReviewComponent />
      </Suspense>
    </>
  );
}
