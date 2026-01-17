import Link from "next/link";
import styles from "./BookSection.module.css";

export default function BookSection() {
  return (
    <section id="book" className={styles.bookSection}>
      <div className="container">
        <div className={styles.bookContent}>
          <h2>Book an Onboarding Call or Message Us</h2>
          <p>
            Choose a convenient time in the calendar or contact us via Telegram
          </p>

          <div className={styles.bookOptions}>
            <div className={styles.calendarEmbed}>
              {/*
                IMPORTANT: Replace the URL below with your real Google Calendar Appointments URL.
                Get it from Google Calendar → Settings → Appointment schedules
              */}
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1XuTZs8bIV7F0rLlcVhdOLWJxBr2JhDC3CTVY2nDJGnVGaKXmJxNDGm7qO0lN_example?gv=true"
                style={{ border: 0, borderRadius: "16px" }}
                width="100%"
                height="650"
                title="Schedule Appointment"
                loading="lazy"
              />

              <div className={styles.calendarFallback}>
                <p>If the calendar doesn't load:</p>
                <Link
                  href="https://calendar.google.com/calendar/appointments"
                  target="_blank"
                  className="btn btn-primary btn-lg"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M8 2v4M16 2v4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Open Google Calendar
                </Link>
              </div>
            </div>

            <div className={styles.contactAlternative}>
              <h3>Or message us directly</h3>
              <Link
                href="https://t.me/olegmazunin"
                target="_blank"
                className="btn btn-outline btn-lg btn-telegram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.1.154.234.17.331.015.099.034.323.019.498z" />
                </svg>
                Message on Telegram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
