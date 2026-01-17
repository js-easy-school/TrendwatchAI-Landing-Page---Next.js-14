"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./Pricing.module.css";

// SVG Icons - без круглых фонов
const Icons = {
  check: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6L9 17l-5-5"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  fire: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2c0 4-3 6-3 10a5 5 0 0010 0c0-4-3-6-3-10-1 2-3 3-4 3s-3-1-4-3h4z"
        fill="#f97316"
      />
    </svg>
  ),
  link: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  gift: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="8" width="18" height="4" rx="1" fill="#ec4899" />
      <rect x="4" y="12" width="16" height="9" rx="1" fill="#ec4899" />
      <path d="M12 8v13" stroke="white" strokeWidth="2" />
      <path
        d="M12 8c-2-2-4-3-4-1s2 3 4 1M12 8c2-2 4-3 4-1s-2 3-4 1"
        stroke="#ec4899"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  ),
  arrow: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="#6366f1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const plans = [
  {
    name: "Basic",
    description: "For beginner content creators",
    monthlyPrice: 95,
    yearlyPrice: 912,
    features: [
      { icon: "fire", text: "Analyze up to 25 competitors" },
      { icon: "link", text: "Reels only" },
      {
        icon: "check",
        text: "Daily updates: get fresh Reels from competitors",
      },
      {
        icon: "check",
        text: "Key metrics: viral detector, likes, comments, views, video duration",
      },
      { icon: "check", text: "Engagement analytics (ER: shares/views)" },
      {
        icon: "check",
        text: "Content transcription: split into hook, main script, and CTA",
      },
      { icon: "check", text: "Content translation into any language" },
      {
        icon: "check",
        text: "3 tutorial videos on finding competitors and using the system",
      },
      { icon: "gift", text: "Bonuses included" },
    ],
    featured: false,
  },
  {
    name: "Pro",
    description: "For experienced creators and marketers",
    monthlyPrice: 195,
    yearlyPrice: 1872,
    features: [
      { icon: "fire", text: "Analyze up to 70 competitors" },
      { icon: "link", text: "Reels, TikTok & YouTube integration" },
      {
        icon: "check",
        text: "Daily updates: get fresh Reels/TikTok from competitors",
      },
      {
        icon: "check",
        text: "Key metrics: viral detector, likes, comments, views, video duration",
      },
      { icon: "check", text: "Engagement analytics (ER: shares/views)" },
      {
        icon: "check",
        text: "Content transcription: split into hook, main script, and CTA",
      },
      { icon: "check", text: "Content translation into any language" },
      {
        icon: "check",
        text: "3 tutorial videos on finding competitors and using the system",
      },
      { icon: "gift", text: "Bonuses included" },
    ],
    featured: true,
  },
  {
    name: "B2B",
    description: "For teams and agencies",
    monthlyPrice: 295,
    yearlyPrice: 2832,
    features: [
      { icon: "fire", text: "Analyze up to 200 competitors per client" },
      { icon: "link", text: "Reels, TikTok & YouTube integration" },
      {
        icon: "check",
        text: "Daily updates: get fresh Reels/TikTok from competitors",
      },
      {
        icon: "check",
        text: "Key metrics: viral detector, likes, comments, views, video duration",
      },
      { icon: "check", text: "Engagement analytics (ER: shares/views)" },
      {
        icon: "check",
        text: "Content transcription: split into hook, main script, and CTA",
      },
      { icon: "check", text: "Content translation into any language" },
      {
        icon: "check",
        text: "3 tutorial videos on finding competitors and using the system",
      },
      { icon: "gift", text: "Bonuses included" },
      {
        icon: "arrow",
        text: "The more clients you have, the lower the price per client",
      },
    ],
    featured: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
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

    const cards = cardsRef.current?.querySelectorAll(`.${styles.priceCard}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2>Our Plans</h2>
          <p>Choose a flexible plan for any business size</p>
        </div>

        <div className={styles.billingToggle}>
          <span
            className={`${styles.toggleLabel} ${
              !isYearly ? styles.active : ""
            }`}
          >
            Monthly
          </span>
          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
            />
            <span className={styles.toggleTrack}></span>
          </label>
          <span
            className={`${styles.toggleLabel} ${isYearly ? styles.active : ""}`}
          >
            Yearly <span className={styles.discount}>-20%</span>
          </span>
        </div>

        <div className={styles.pricingGrid} ref={cardsRef}>
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`${styles.priceCard} ${
                plan.featured ? styles.featured : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {plan.featured && (
                <div className={styles.popularBadge}>Popular</div>
              )}
              <div className={styles.priceHeader}>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>
              <div className={styles.priceAmount}>
                <span className={styles.currency}>€</span>
                <span className={styles.amount}>
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className={styles.period}>
                  /<span>{isYearly ? "year" : "mo"}</span>
                </span>
              </div>
              <ul className={styles.priceFeatures}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className={styles.featureIcon}>
                      {Icons[feature.icon as keyof typeof Icons]}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <Link
                href="#book"
                className={`btn btn-block ${
                  plan.featured ? "btn-primary" : "btn-outline"
                }`}
              >
                {plan.name === "B2B" ? "Contact Us" : "Get Started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
