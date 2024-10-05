import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href={'/'}>Home</Link>
          <Link href={'/list'}>Board</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
