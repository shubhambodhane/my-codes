"use client";

import { usePathname } from "next/navigation";

export default function ReviewNotFoundPage() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <>
      <h4>Not found details for the below IDs: </h4>
      <h4>Product ID:{productId}</h4>
      <h4>Review ID:{reviewId}</h4>
    </>
  );
}
