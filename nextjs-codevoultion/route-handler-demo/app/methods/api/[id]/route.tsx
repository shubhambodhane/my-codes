import { nextFileTypes } from "@/app/data/nextFileTypes";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const reqFileType = nextFileTypes.find((idFile) => {
    return idFile.id === parseInt(id);
  });
  return Response.json(reqFileType);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const { name } = body;
  const index = nextFileTypes.findIndex((idFile) => idFile.id == parseInt(id));
  nextFileTypes[index].name = name;
  return Response.json(nextFileTypes[index]);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const index = nextFileTypes.findIndex((item) => item.id === parseInt(id));
  const deleteType = nextFileTypes[index];
  nextFileTypes.slice(index, 1);
  return Response.json(deleteType);
}
