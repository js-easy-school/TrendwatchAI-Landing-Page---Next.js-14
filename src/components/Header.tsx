"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="#" className={styles.logo}>
          <svg
            className={styles.logoIcon}
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="3" y="14" width="4" height="7" rx="1" fill="#6366f1" />
            <rect x="10" y="10" width="4" height="11" rx="1" fill="#818cf8" />
            <rect x="17" y="5" width="4" height="16" rx="1" fill="#4f46e5" />
            <path
              d="M5 8L12 4L19 1"
              stroke="#6366f1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className={styles.logoText}>TrendwatchAI</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <div className={styles.headerActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <svg
              className={`${styles.sunIcon} ${
                theme === "dark" ? styles.active : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg
              className={`${styles.moonIcon} ${
                theme === "light" ? styles.active : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <Link
            href="https://t.me/olegmazunin"
            target="_blank"
            className={`btn btn-ghost ${styles.btnGhost}`}
          >
            Написать
          </Link>
          <Link href="#book" className="btn btn-primary">
            Записаться
          </Link>
        </div>
      </div>
    </header>
  );
}
