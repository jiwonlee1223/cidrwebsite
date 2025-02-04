// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '연구실 소개 홈페이지',
  description: '우리 연구실을 소개하는 홈페이지입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* 네비게이션 바 */}
        <header className="navbar">
          <nav className="nav-container">
            {/* 로고: 클릭 시 메인 페이지('/')로 이동 */}
            <Link href="/" className="nav-logo">
              <img src="/logo.png" alt="로고" className="logo" />
            </Link>

            {/* 네비게이션 링크 */}
            <div className="nav-links">
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/people" className="nav-link">People</Link>
              <Link href="/papers" className="nav-link">Papers</Link>
              <Link href="/project" className="nav-link">Project</Link>
            </div>
          </nav>
        </header>

        {/* 페이지별 콘텐츠가 렌더링되는 영역 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
