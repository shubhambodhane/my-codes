export default function ServicePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h4>Layout 2: Service page</h4>
        {children}
      </body>
    </html>
  );
}
