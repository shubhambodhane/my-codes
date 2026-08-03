function MethodsPage() {
  return (
    <>
      <h4>Methods Page:</h4>
      <p>
        <strong>GET</strong> : create data.ts with array and export and import
        in the route file. It should be returns as Response.json(array) for
        arrays. the function must be async and exported named as GET Methods ex.
        export async function GET()
      </p>
      <p>
        <strong>POST</strong> : We are adding new data in already created array
        nextFileTypes. We are using async function await for response and then
        adding new object and pushing data in it. creating new status as post
        method and passing headers. ex. export async function POST()
      </p>
      <p>
        <strong>GET data Dynamic Id</strong> : We will get the data by passing
        dyanmic id, we will destructure id from params in get method, we will
        find value in array then return the specific value. ex. export async
        function GET(_req:Request,{`params}: {params:Promise<{id:string};>`})
      </p>

      <p>
        <strong>PATCH data Dynamic Id</strong> : We will update the data by
        passing changing data, we will destructure id , extract body specific
        text (name), we will find by Index value in array then modify the value.
        ex. export async function GET(_req:Request,
        {`params}: {params:Promise<{id:string};>`})
      </p>
      <p>
        <strong>DELETE data Dynamic Id</strong> : We will delete the data by
        passing id, We will file the index of id passed to delete and splice
        item returning the response as deleted item. ex. export async function
        DELETE(_req:Request,{`params}: {params:Promise<{id:string};>`})
      </p>
      <p>
        <strong>URL Query parameters</strong>: we will get user searched query
        from address bar. To get the query we will need to import
        {"type NextRequest"} from
        {"next/server"}. we get searched query and search in our data. if data
        is available it will give output else as empty array. to search query it
        will be: /anyapi?query=loadingText. here loadingText is user entered
        query
        <strong>/api?query={"userQuery"}</strong>
        the word query can be also change to any other text . ex. search if
        wrong query is entered then it will return complete data.
      </p>
    </>
  );
}
export default MethodsPage;
