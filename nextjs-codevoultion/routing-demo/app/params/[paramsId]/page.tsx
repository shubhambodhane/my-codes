import Link from "next/link";

async function AboutTheParams({
  params,
  searchParams,
}: {
  params: Promise<{ paramsId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "hin" | undefined }>;
}) {
  // lang = query parameter = ? as optional
  // paramsId = dynamic parameter
  const { paramsId } = await params;
  const { lang } = await searchParams;

  function getFullLanguage(rLang: string | undefined) {
    switch (rLang) {
      case "en":
        return "English";
      case "fr":
        return "French";
      case "hin":
        return "Hindi";
      default:
        return "English";
    }
  }

  return (
    <>
      <button
        type="button"
        role="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link href="/params">Go to Params</Link>
      </button>
      <h4>Accessing the params</h4>
      <p>this is params id: {paramsId}</p>
      <p>The language: {getFullLanguage(lang)}</p>
    </>
  );
}
export default AboutTheParams;
