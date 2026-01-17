import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <svg
            className={styles.logoIcon}
            width="28"
            height="28"
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
          <div>
            <strong>TrendwatchAI</strong>
            <p>Automate content. Increase reach.</p>
          </div>
        </div>
        <nav className={styles.footerLinks}>
          <Link href="https://trendwatch.framer.ai/terms" target="_blank">
            Terms of Service
          </Link>
          <Link
            href="https://trendwatch.framer.ai/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </Link>
          <Link href="https://t.me/olegmazunin" target="_blank">
            Telegram
          </Link>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>© 2024 TrendwatchAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
