export default function Metadata() {
  return (
    <>
      <h4>Metadata in Next JS</h4>
      <p>
        Meta data is information about page. Useful when page gets indexed by
        search engine.
      </p>
      <p>Meta data can we written in two ways:</p>
      <ol>
        <li>static metadata object</li>
        <li>dynamic generateMetadata function</li>
      </ol>
      <ul>
        <li>Both Page and Layput can export Metadata.</li>
        <li>
          Metadata exported by Layout will be application to all the page
          (falling under layout)
        </li>
        <li>
          Metadata exported by Page, it will be applicable to spicific page
          only.
        </li>
        <li>Metadat follow top-down order, starting from root element.</li>
      </ul>
      <p>
        when metadata exists in multiple routes (pages) they merge together with
        page metadata overriding layout metadata for matching properties (if
        layout and page metadata is there then page meta will overriding layout
        metadata for the properties)
      </p>
      <h4>
        Note: Metadata can be exported from server components only. (not for
        client component, returning client component from server can work)
      </h4>
    </>
  );
}
