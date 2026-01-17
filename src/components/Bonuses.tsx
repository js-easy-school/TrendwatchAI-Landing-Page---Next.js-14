"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Bonuses.module.css";

const bonuses = [
  {
    image:
      "https://framerusercontent.com/images/GypBK5FunPB1XrT0DQLH7YakJp4.png",
    tag: "Bonus #1",
    title: "We'll help you choose competitors",
    description:
      "1-hour strategic call where we'll select 20-30 relevant accounts in your niche",
  },
  {
    image:
      "https://framerusercontent.com/images/vkpRQQTxSDAePonHokASsYzFLGM.png",
    tag: "Bonus #2",
    title: "Initial competitor scan",
    description:
      "We'll collect and analyze your competitors' Reels from the last 2 weeks — instant access to proven formats",
  },
];

export default function Bonuses() {
  const gridRef = useRef<HTMLDivElement>(null);

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

    const cards = gridRef.current?.querySelectorAll(`.${styles.bonusCard}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.bonuses}>
      <div className="container">
        <div className={styles.bonusGrid} ref={gridRef}>
          {bonuses.map((bonus, index) => (
            <div
              key={bonus.tag}
              className={styles.bonusCard}
              data-index={index}
            >
              <Image
                src={bonus.image}
                alt={bonus.title}
                width={400}
                height={300}
                loading="lazy"
              />
              <div className={styles.bonusContent}>
                <span className={styles.bonusTag}>{bonus.tag}</span>
                <h3>{bonus.title}</h3>
                <p>{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
