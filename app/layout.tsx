import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'CIDR',
  description: 'CIDR @ID KAIST',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header className="navbar">
          <div className="nav-container">
            <div className="nav-main-page-container">
              <div className="nav-half"></div>
              <div className="nav-half">
                <Link href="/" className="nav-logo">
                  <Image src="/logoicon.png" alt="MainLogo" width={50} height={50} className="logo" style={{ objectFit: 'contain' }} />
                </Link>
              </div>
              <div className="nav-halftwo"></div>
              <div className="nav-half">
                <div className="nav-links">
                  <Link href="/people" className="nav-link">People</Link>
                  <Link href="/project" className="nav-link">Project</Link>
                  <Link href="/publication" className="nav-link">Publication</Link>
                  <Link href="/awards" className="nav-link">Awards</Link>
                  <Link href="/resources" className="nav-link">Resources</Link>
                </div>
              </div>
              <div className="nav-half"></div>
            </div>
          </div>
        </header>

        {/* 페이지별 콘텐츠가 렌더링되는 영역 */}
        <main>{children}</main>

        <footer className="footer">
          <Image
            src="/logowhite.png"
            alt="로고"
            width={100}
            height={30}
            className="footer-logo"
            style={{ objectFit: 'contain' }}
          />
          <span className="black-default-typo">© 2025. CIDR Lab All Rights Reserved</span>
        </footer>
      </body>
    </html>
  );
}
