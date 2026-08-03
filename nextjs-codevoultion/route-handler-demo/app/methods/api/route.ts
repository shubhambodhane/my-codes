import { nextFileTypes } from "@/app/data/nextFileTypes";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // use this for just getting all the request
  // return Response.json(nextFileTypes); 

  // we are getting response based on query we are typing 
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredFileTypes = query ? 
  nextFileTypes.filter(itm => itm.name.includes(query))
  : nextFileTypes;
  return Response.json(filteredFileTypes);
}

//post call new data will be added but wont make any changes in the file only in memory.
export async function POST(req: Request) {
  //adding new object
  const allFileType = await req.json();
  const newFileType = {
    id: nextFileTypes.length + 1,
    name: allFileType.name,
  };
  nextFileTypes.push(newFileType);
  return new Response(JSON.stringify(newFileType), {
    status: 201,
    headers: { "Content-type": "application/json" },
  });
}
