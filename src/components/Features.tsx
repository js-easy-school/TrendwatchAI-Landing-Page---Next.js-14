"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Features.module.css";

const features = [
  {
    image:
      "https://framerusercontent.com/images/kDljcyeG6r6pI6RwePIt2wc2sA.png",
    title: "Fresh updates daily",
    description: "Get the latest high-performing Reels in your niche",
  },
  {
    image:
      "https://framerusercontent.com/images/ajO7WisPRbnRq7IXzeP1WLI1Pvc.png",
    title: "Instant transcription",
    description:
      "Ready-made text breakdowns of every video — no manual listening needed",
  },
  {
    image:
      "https://framerusercontent.com/images/uQKuh8pjk1Z7KIk88p6keuqzI4.png",
    title: "Complete content analysis",
    description:
      "ER, engagement, CTA, length and structure — everything that makes video successful",
  },
  {
    image:
      "https://framerusercontent.com/images/HHEOruPbi2MJ7FBqbopRFkfe34E.png",
    title: "Simple, intuitive interface",
    description: "Focus only on important Reels — no noise, just data",
  },
  {
    image:
      "https://framerusercontent.com/images/Xat4ii2EJbdKNj3L56L4Jzufrg.png",
    title: "Reels, TikTok & Shorts",
    description: "Track trends across all platforms in real-time",
  },
  {
    image:
      "https://framerusercontent.com/images/UT99e5GduhsfrFhoyzt2Qj24nQI.png",
    title: "Virality detector",
    description: "Find videos with unusual reach before they blow up",
  },
];

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    const cards = gridRef.current?.querySelectorAll(`.${styles.featureCard}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft")
        setCurrentIndex((prev) =>
          prev === 0 ? features.length - 1 : prev - 1
        );
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) =>
          prev === features.length - 1 ? 0 : prev + 1
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2>Track Trending Reels 24/7</h2>
          <p>
            Your AI assistant that finds working content before everyone else
          </p>
        </div>

        <div className={styles.featuresGrid} ref={gridRef}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={styles.featureCard}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={styles.featureImage}
                onClick={() => openLightbox(index)}
              >
                <div className={styles.zoomIndicator}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                  Click to enlarge
                </div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <button className={styles.zoomBtn}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                    View full size
                  </button>
                </div>
              </div>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={() => setLightboxOpen(false)}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setLightboxOpen(false)}
            >
              ×
            </button>

            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? features.length - 1 : prev - 1
                )
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className={styles.lightboxImageWrapper}>
              <Image
                src={features[currentIndex].image}
                alt={features[currentIndex].title}
                width={1200}
                height={800}
                priority
              />
            </div>

            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === features.length - 1 ? 0 : prev + 1
                )
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className={styles.lightboxCaption}>
              <h4>{features[currentIndex].title}</h4>
              <p>{features[currentIndex].description}</p>
              <span className={styles.lightboxCounter}>
                {currentIndex + 1} / {features.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
