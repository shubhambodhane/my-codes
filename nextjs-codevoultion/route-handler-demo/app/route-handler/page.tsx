export default function RouteHandler() {
  return (
    <div>
      <h4 className="m-2 text-xl">Route Handlers</h4>
      <ul className="m-2 list-disc">
        <li>
          Create custom route handlers for your routes using feature called
          Route Handlers.
        </li>
        <li>
          It helps to build the <strong>RESTful API endpoints</strong> with
          complete control over response.
        </li>
        <li>
          Route handlers run <strong>Server side.</strong>. It secures sensitive
          information as private keys stays on server only.
        </li>
        <li>Route Handles are equivalent to API routes in page router.</li>
        <li>
          Next JS supports
          <strong> GET, PUT, POST, PATCH, DELETE, OPTIONS</strong>
        </li>
        <li>
          If <strong>unsupported method</strong> is called Next JS will return
          <strong>405 method not allowed response.</strong>
        </li>
        <li>
          Next JS convention to create route: Route Handler{"="} route.ts file
        </li>
      </ul>
      <p>
        ex. Users folder with page.tsx , this will contains another 'api' folder
        and route inside it.
      </p>
    </div>
  );
}
