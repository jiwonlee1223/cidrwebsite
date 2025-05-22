"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-main-page-container">
          {/* 햄버거 버튼 */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* 로고 */}
          <Link href="/" className="nav-logo">
            <Image
              src="/logoicon.png"
              alt="MainLogo"
              width={50}
              height={50}
              className="logo"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* 메뉴 리스트 */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/people" className="nav-link" onClick={() => setMenuOpen(false)}>People</Link>
          <Link href="/project" className="nav-link" onClick={() => setMenuOpen(false)}>Project</Link>
          <Link href="/publication" className="nav-link" onClick={() => setMenuOpen(false)}>Publication</Link>
          <Link href="/awards" className="nav-link" onClick={() => setMenuOpen(false)}>Awards</Link>
          <Link href="/resources" className="nav-link" onClick={() => setMenuOpen(false)}>Resources</Link>
        </nav>
      </div>
    </header>
  );
}
