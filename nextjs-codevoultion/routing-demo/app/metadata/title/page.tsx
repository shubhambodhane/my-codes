import { Metadata } from "next";

// export const metadata:Metadata={
//     title:"Simple"
// }

export const metadata: Metadata = {
  title: {
    // default:"Default title || fallback for template",
    // template:"Template",
    absolute: "Simple name",
  },
};

export default function TitleMetadataType() {
  return (
    <>
      <h4>Metadata: Title Object</h4>
      <ol>
        <li>default: default title || Fallback title of the page</li>
        <li>
          template: useful for maintaining prefix and suffix for the title and
          uniformality
        </li>
        <li>absolute: simple way to give title</li>
      </ol>
      <p>with title object: need to add template and default</p>
      <p>template example: title:{'template: "%s" | Next'}: for app component</p>
      <p>child component: {'title:My title'}</p>
      <p>on child route: the title will be :<strong>My title | Next</strong></p>
      <p>mainitained consistency , %s replaced with my title</p>
    </>
  );
}
