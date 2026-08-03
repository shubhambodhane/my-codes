export const dynamic = "force-static"; // to enable caching in our app
export const revalidate = 10; // revalidate

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
