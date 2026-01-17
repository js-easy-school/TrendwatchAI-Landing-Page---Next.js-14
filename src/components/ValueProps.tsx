"use client";

import { useEffect, useRef } from "react";
import styles from "./ValueProps.module.css";

const values = [
  {
    number: 1,
    title: "Track up to 50 creators",
    description: "In any niche and any language",
  },
  {
    number: 2,
    title: "Daily Reels analysis",
    description: "Hooks, topics, CTAs and performance metrics",
  },
  {
    number: 3,
    title: "Use proven formats",
    description: "Create viral Reels for your audience",
  },
  {
    number: 4,
    title: "Grow consistently",
    description: "By repeating what already works",
  },
];

export default function ValueProps() {
  const cardsRef = useRef<HTMLDivElement>(null);

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

    const cards = cardsRef.current?.querySelectorAll(`.${styles.valueCard}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.valueProps}>
      <div className="container">
        <div className="section-header">
          <h2>Helping bloggers, experts, and marketers</h2>
          <p>
            Automated trend tracking and ready-made content formulas for your
            niche
          </p>
        </div>
        <div className={styles.valueGrid} ref={cardsRef}>
          {values.map((value, index) => (
            <div
              key={value.number}
              className={styles.valueCard}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.valueNumber}>{value.number}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
