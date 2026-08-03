import Link from "next/link";

function GenerateStaticParams() {
  return (
    <>
      <h4>Generate Static Params: generateStaticParams()</h4>
      <p>info goes here</p>
      <p>Products list page is here:</p>
      <Link className="text-blue-500" href="/generateStaticParams/1">
        Product 1
      </Link>
      <Link className="text-blue-500" href="/generateStaticParams/2">
        Product 2
      </Link>
      <Link className="text-blue-500" href="/generateStaticParams/3">
        Product 3
      </Link>
    </>
  );
}
export default GenerateStaticParams;
