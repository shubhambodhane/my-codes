import { ServerSideFunction } from "../utility/util";
export default function TestServerComponent() {
  const res = ServerSideFunction();

  return (
    <>
      <h4>Test Server Side Component with result utility {res}</h4>
    </>
  );
}
