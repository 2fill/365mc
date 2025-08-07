import './globals.css';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>365mc CDSS</title>
        <link rel="icon" type="image/png" href="/favicon.png?v=2" />
      </head>
      <body>
        <header className="header">
          <Link href="/">
            <img src="/Logo.png" alt="Logo" className="logo" />
          </Link>
          <p className="message shimmer">* Please enlarge your screen.</p>
        </header>
        <main className="main-wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}