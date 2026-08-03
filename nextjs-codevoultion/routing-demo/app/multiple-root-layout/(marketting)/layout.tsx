export default function MarkettingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h4>From Layout 1: Market page</h4>
        {children}
      </body>
    </html>
  );
}
