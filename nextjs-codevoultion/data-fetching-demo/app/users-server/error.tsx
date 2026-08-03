"use client";
import { useEffect } from "react";
export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <section className="m-auto flex items-center justify-center h-screen">
      <h4 className="text-xl text-red-500">Error: Please try again.</h4>
    </section>
  );
}
