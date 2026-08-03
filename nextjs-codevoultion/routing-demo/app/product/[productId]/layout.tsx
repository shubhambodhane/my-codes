export default function ProductLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h4>Listing:: Products Layout Slider Page</h4>
      <p>
        This is example of the nested layout: it will show when user navigates
        to products page and specific product id like products slider for
        specific product only product page. as other pages it will not display.
      </p>
      {children}
    </>
  );
}
