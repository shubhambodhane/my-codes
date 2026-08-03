export const metaData = {
  title: "NextJS App",
  description: "Gen by NextJS",
};
// this is main layout of the application
// every app must have one layout

// meta data need to add from constant as they will be managed properly for SEO
// for html we don't have to write meta data as it will be getting duplicated
import Link from "next/link";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStyle = { padding: "10px", border: "1px solid blue" };
  const footerStyle = { padding: "10px", border: "1px solid green" };
  return (
    <html lang="en">
      <body>
        {/* <TestComponent/>: a component can render as it's react component*/}
        <header style={headerStyle}>
          <Link className="p-2" href="/">Home</Link>
          <Link className="p-2" href="/blog">Blog</Link>
          <Link className="p-2" href="/docs">Docs</Link>
          <Link className="p-2" href="/multiple-root-layout">Multiple-Root-Layout</Link>
          <Link className="p-2" href="/complex-dashboard">Parallel Routes: Complex Dashboard</Link>
          <Link className="p-2" href="/metadata">Metadata</Link>
          <Link className="p-2" href="/product">Product</Link>
          <Link className="p-2" href="/params">Params</Link>
          <Link className="p-2" href="/contact">Contact</Link>
          <Link className="p-2" href="/about">About</Link>
        </header>
        <div className="border-1 mt-1 mb-1 p-2">
        {children}
        </div>
        <footer style={footerStyle}>Footer: Next JS learning</footer>
      </body>
    </html>
  );
}
