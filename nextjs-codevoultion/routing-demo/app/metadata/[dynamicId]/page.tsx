import { Metadata } from "next";

type Props = {
  params: Promise<{ dynamicId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).dynamicId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function DynamicMetaData() {
  return (
    <>
      <h3>Example of Dynamic meta data</h3>
      <p>Dynamic metadata: useful for dynamic routes</p>
      <p>dynamic Id: visible in page title</p>
    </>
  );
}
