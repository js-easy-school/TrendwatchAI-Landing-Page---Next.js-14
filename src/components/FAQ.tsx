"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import content from "@/content/site-content.json";

const faqs =
  content.faq.items.length > 0
    ? content.faq.items
    : [
        {
          question: "I'm just starting out. Won't this be too complicated?",
          answer:
            "The platform is designed for simplicity: choose competitors, get daily reports, and repeat working formats. We'll help you set everything up correctly on the onboarding call.",
        },
        {
          question: "How quickly will I see results?",
          answer:
            "Many teams find recurring patterns in the first week. Consistent growth comes from systematically applying insights over 2-4 weeks.",
        },
        {
          question: "Will this save me time?",
          answer:
            "Absolutely! Instead of hours of scrolling, you get ready-made analysis every morning. Transcription, structure breakdown, metrics — everything is ready.",
        },
        {
          question: "Will it work for a very specific niche?",
          answer:
            "That's the ideal scenario! The system learns from your set of competitors — the narrower the niche, the cleaner the signal and more accurate the recommendations.",
        },
        {
          question: "Can I track creators in other languages?",
          answer:
            "Yes! Transcription and translation are included. Learn from formats across any region in the world.",
        },
      ];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{content.faq.sectionTag}</span>
          <h2>{content.faq.sectionTitle}</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.faqIcon}></span>
              </button>
              <div
                className={styles.faqAnswer}
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
