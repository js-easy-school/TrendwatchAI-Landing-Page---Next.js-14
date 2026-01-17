"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import content from "@/content/site-content.json";

export default function Hero() {
  const { hero, contact } = content;

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: "6px", verticalAlign: "middle" }}
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
              AI-powered Reels Intelligence
            </span>
            <h1>{hero.title}</h1>
            <p className={styles.heroSubtitle}>{hero.subtitle}</p>
            <div className={styles.heroCta}>
              <Link href="#book" className="btn btn-primary btn-lg">
                {hero.buttonSecondary}
              </Link>
              <Link
                href={`https://t.me/${contact.telegram}`}
                target="_blank"
                className="btn btn-outline btn-lg"
              >
                Message on Telegram
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <svg
              className={styles.heroSvg}
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circles */}
              <g className={styles.rotateSlow}>
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  strokeDasharray="10 5"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  strokeDasharray="8 4"
                  opacity="0.2"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  strokeDasharray="6 3"
                  opacity="0.15"
                />
              </g>

              {/* Main dashboard card */}
              <g className={styles.floatElement}>
                <rect
                  x="80"
                  y="100"
                  width="240"
                  height="200"
                  rx="20"
                  fill="url(#cardGradient)"
                  opacity="0.9"
                />
                <rect
                  x="80"
                  y="100"
                  width="240"
                  height="200"
                  rx="20"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                />
              </g>

              {/* Chart bars */}
              <g transform="translate(100, 220)">
                <rect
                  className={styles.chartBar}
                  x="0"
                  y="0"
                  width="25"
                  height="60"
                  rx="5"
                  fill="#6366f1"
                  opacity="0.8"
                  style={{ transformOrigin: "0 60px" }}
                />
                <rect
                  className={styles.chartBar}
                  x="35"
                  y="15"
                  width="25"
                  height="45"
                  rx="5"
                  fill="#818cf8"
                  opacity="0.8"
                  style={{
                    transformOrigin: "35px 60px",
                    animationDelay: "0.2s",
                  }}
                />
                <rect
                  className={styles.chartBar}
                  x="70"
                  y="-10"
                  width="25"
                  height="70"
                  rx="5"
                  fill="#6366f1"
                  opacity="0.8"
                  style={{
                    transformOrigin: "70px 60px",
                    animationDelay: "0.4s",
                  }}
                />
                <rect
                  className={styles.chartBar}
                  x="105"
                  y="25"
                  width="25"
                  height="35"
                  rx="5"
                  fill="#818cf8"
                  opacity="0.8"
                  style={{
                    transformOrigin: "105px 60px",
                    animationDelay: "0.6s",
                  }}
                />
                <rect
                  className={styles.chartBar}
                  x="140"
                  y="5"
                  width="25"
                  height="55"
                  rx="5"
                  fill="#6366f1"
                  opacity="0.8"
                  style={{
                    transformOrigin: "140px 60px",
                    animationDelay: "0.8s",
                  }}
                />
                <rect
                  className={styles.chartBar}
                  x="175"
                  y="-20"
                  width="25"
                  height="80"
                  rx="5"
                  fill="#818cf8"
                  opacity="0.8"
                  style={{
                    transformOrigin: "175px 60px",
                    animationDelay: "1s",
                  }}
                />
              </g>

              {/* Line chart */}
              <path
                className={styles.lineDraw}
                d="M100 150 L140 140 L180 155 L220 135 L260 145 L300 120"
                stroke="url(#gradient1)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />

              {/* Data points */}
              <g>
                <circle
                  className={styles.dataDot}
                  cx="100"
                  cy="150"
                  r="4"
                  fill="#6366f1"
                />
                <circle
                  className={styles.dataDot}
                  cx="140"
                  cy="140"
                  r="4"
                  fill="#818cf8"
                  style={{ animationDelay: "0.3s" }}
                />
                <circle
                  className={styles.dataDot}
                  cx="180"
                  cy="155"
                  r="4"
                  fill="#6366f1"
                  style={{ animationDelay: "0.6s" }}
                />
                <circle
                  className={styles.dataDot}
                  cx="220"
                  cy="135"
                  r="4"
                  fill="#818cf8"
                  style={{ animationDelay: "0.9s" }}
                />
                <circle
                  className={styles.dataDot}
                  cx="260"
                  cy="145"
                  r="4"
                  fill="#6366f1"
                  style={{ animationDelay: "1.2s" }}
                />
                <circle
                  className={styles.dataDot}
                  cx="300"
                  cy="120"
                  r="4"
                  fill="#818cf8"
                  style={{ animationDelay: "1.5s" }}
                />
              </g>

              {/* Floating stat cards */}
              <g
                className={styles.floatElement}
                style={{ animationDelay: "0.5s" }}
              >
                <rect
                  x="280"
                  y="60"
                  width="85"
                  height="55"
                  rx="12"
                  fill="url(#cardGradient)"
                  opacity="0.95"
                />
                <rect
                  x="280"
                  y="60"
                  width="85"
                  height="55"
                  rx="12"
                  stroke="#818cf8"
                  strokeWidth="1.5"
                />
                <text
                  x="295"
                  y="85"
                  fill="#ffffff"
                  fontSize="14"
                  fontWeight="700"
                >
                  +24.5%
                </text>
                <text x="295" y="102" fill="#a5b4fc" fontSize="10">
                  Engagement
                </text>
              </g>

              <g
                className={styles.floatElement}
                style={{ animationDelay: "1s" }}
              >
                <rect
                  x="35"
                  y="180"
                  width="75"
                  height="50"
                  rx="12"
                  fill="url(#cardGradient)"
                  opacity="0.95"
                />
                <rect
                  x="35"
                  y="180"
                  width="75"
                  height="50"
                  rx="12"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                />
                <text
                  x="50"
                  y="203"
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="700"
                >
                  12.3K
                </text>
                <text x="50" y="220" fill="#a5b4fc" fontSize="9">
                  Views
                </text>
              </g>

              <g
                className={styles.floatElement}
                style={{ animationDelay: "1.5s" }}
              >
                <rect
                  x="295"
                  y="255"
                  width="80"
                  height="50"
                  rx="12"
                  fill="url(#cardGradient)"
                  opacity="0.95"
                />
                <rect
                  x="295"
                  y="255"
                  width="80"
                  height="50"
                  rx="12"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                />
                <text
                  x="310"
                  y="278"
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="700"
                >
                  VIRAL
                </text>
                <text x="310" y="295" fill="#22c55e" fontSize="9">
                  ● Trending
                </text>
              </g>

              {/* Pulsing circles */}
              <circle
                className={styles.circlePulse}
                cx="330"
                cy="90"
                r="6"
                fill="#818cf8"
                opacity="0.6"
              />
              <circle
                className={styles.circlePulse}
                cx="55"
                cy="160"
                r="5"
                fill="#6366f1"
                opacity="0.6"
                style={{ animationDelay: "0.5s" }}
              />
              <circle
                className={styles.circlePulse}
                cx="350"
                cy="285"
                r="4"
                fill="#818cf8"
                opacity="0.6"
                style={{ animationDelay: "1s" }}
              />

              {/* Gradients */}
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#6366f1" }} />
                  <stop offset="100%" style={{ stopColor: "#818cf8" }} />
                </linearGradient>
                <linearGradient
                  id="cardGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgba(99, 102, 241, 0.15)" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgba(129, 140, 248, 0.1)" }}
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Dashboard Screenshot */}
        <div className={styles.heroScreenshot}>
          <div className={styles.screenshotWrapper}>
            <div className={styles.screenshotGlow}></div>
            <Image
              src="https://framerusercontent.com/images/uAWKpw9iQFevhW52LPCunMh2bQ.png"
              alt="TrendwatchAI Dashboard - Competitor Analysis Table"
              width={1875}
              height={727}
              priority
              className={styles.screenshotImage}
            />
            <div className={styles.screenshotOverlay}>
              <span className={styles.screenshotBadge}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Live Dashboard Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
