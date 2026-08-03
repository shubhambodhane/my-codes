import Link from "next/link";

export default function ParamsInfo() {
  return (
    <>
      <h4 className="mb-2 text-lg font-medium text-heading">Params</h4>
      <ul className="max-w-md space-y-1 text-body list-disc list-inside">
        <li>
          Params is promise that resolves to object containing dynamic route
          parameters
        </li>
        <li>ex. id, productId</li>
        <li>this contains dynamic route parameter</li>
        <li>
          this can be accessed from <strong>page</strong> and{" "}
          <strong>layouts</strong>.
        </li>
        <li>Access params like: {"/params/30"}</li>
      </ul>
      <h4 className="mb-2 text-lg font-medium text-heading">Search Params</h4>
      <ul className="max-w-md space-y-1 text-body list-disc list-inside">
        <li>
          Seachparams is promise that resolves to object containing query
          parameter
        </li>
        <li>ex. en,fr(language)</li>
        <li>this contains query parameter</li>
        <li>
          this can be <strong>only accessed in page</strong>.
        </li>
        <li>Access search params here: for Language</li>
        
        <Link className="m-2 p-2 border-1" href="params/4?lang=en">English</Link>
        <Link className="m-2 p-2 border-1" href="params/5?lang=fr">French</Link>
        <Link className="m-2 p-2 border-1" href="params/8?lang=hin">Hindi</Link>
      </ul>
    </>
  );
}
