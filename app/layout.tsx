// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: 'CIDR',
  description: 'CIDR @ID KAIST',
  icons: {
    icon: '/favicon.ico',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={montserrat.className}>
        {/* 네비게이션 바 */}
        <header className="navbar">
          <nav className="nav-container">
            <Link href="/" className="nav-logo">
              <img src="/logoicon.png" alt="MainLogo" className="logo" />
            </Link>

            <div className="nav-links">
              <Link href="/people" className="nav-link">People</Link>
              <Link href="/project" className="nav-link">Project</Link>
              <Link href="/publication" className="nav-link">Publication</Link>
              <Link href="/awards" className="nav-link">Awards</Link>
              <Link href="/resources" className="nav-link">Resources</Link>
            </div>
          </nav>
        </header>


        {/* 페이지별 콘텐츠가 렌더링되는 영역 */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-left">
            <img src="/logowhite.png" alt="로고" />
          </div>
          <div className="footer-right">
            <span>© 2025. CIDR Lab All Rights Reserved</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
