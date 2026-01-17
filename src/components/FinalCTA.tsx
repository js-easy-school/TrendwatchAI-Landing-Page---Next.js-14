import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>How much longer will you waste time guessing?</h2>
          <div className={styles.ctaComparison}>
            <div className={styles.ctaBad}>
              <p>
                <strong>Instead of:</strong>
              </p>
              <p>
                <span className="icon-x"></span> Mindless scrolling
              </p>
              <p>
                <span className="icon-x"></span> Hoping your video works
              </p>
              <p>
                <span className="icon-x"></span> Watching others go viral
              </p>
            </div>
            <div className={styles.ctaGood}>
              <p>
                <strong>Do this:</strong>
              </p>
              <p>
                <span className="icon-check-white"></span> Use proven scripts
              </p>
              <p>
                <span className="icon-check-white"></span> Create Reels people
                actually see
              </p>
              <p>
                <span className="icon-check-white"></span> Grow faster than
                competitors
              </p>
            </div>
          </div>
          <p className={styles.ctaTagline}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="#fbbf24" />
            </svg>
            Start now and explode your content
          </p>
        </div>
      </div>
    </section>
  );
}
