import styles from "./HelpingSection.module.css";

const tableData = [
  {
    id: 75,
    account: "zoltum",
    viralStatus: "VIRUS",
    erStatus: "BEST ER",
    original: "Make people say yes every time you...",
    translated: '1. Заставьте людей говорить "да"',
    status: "#HOOK",
  },
  {
    id: 70,
    account: "psychology_li",
    viralStatus: "BEST",
    erStatus: "BEST ER",
    original: "Hidden signs that someone is taking...",
    translated: "1. Скрытые признаки того, что...",
    status: "НЕТ ТЕКСТА",
  },
  {
    id: 69,
    account: "ilyaryazz",
    viralStatus: "VIRUS",
    erStatus: "LOW ER",
    original: "#CAPTION",
    translated: "Брат, сейчас, получается на...",
    status: "#HOOK",
  },
  {
    id: 67,
    account: "vojevafoy",
    viralStatus: "GOOD",
    erStatus: "BEST ER",
    original: "What do boys' texts really mean?",
    translated: "1. Что на самом деле означают...",
    status: "#HOOK",
  },
  {
    id: 65,
    account: "psycholipz",
    viralStatus: "BEST",
    erStatus: "AVERAGE ER",
    original: "You have to understand that...",
    translated: "1. Вы должны понять, что наша...",
    status: "#HOOK",
  },
  {
    id: 64,
    account: "trulylovedose",
    viralStatus: "GOOD",
    erStatus: "BEST ER",
    original: "Главная женская ошибка в...",
    translated: "1. Главная женская ошибка...",
    status: "НЕТ ТЕКСТА",
  },
  {
    id: 51,
    account: "winner.spirit",
    viralStatus: "BEST",
    erStatus: "LOW ER",
    original: "#CAPTION",
    translated: "Жена должна быть такая как...",
    status: "#HOOK",
  },
  {
    id: 50,
    account: "satia_dasss",
    viralStatus: "GOOD",
    erStatus: "BEST ER",
    original: "Anxiety is a signal to you...",
    translated: "1. Тревога — это сигнал...",
    status: "НЕТ ТЕКСТА",
  },
];

const getViralClass = (status: string) => {
  switch (status) {
    case "VIRUS":
      return styles.statusVirus;
    case "BEST":
      return styles.statusBestPurple;
    case "GOOD":
      return styles.statusGood;
    default:
      return "";
  }
};

const getErClass = (status: string) => {
  switch (status) {
    case "BEST ER":
      return styles.statusBest;
    case "LOW ER":
      return styles.statusLower;
    case "AVERAGE ER":
      return styles.statusAvg;
    default:
      return "";
  }
};

const getStatusClass = (status: string) => {
  return status === "#HOOK" ? styles.statusHook : styles.statusEmpty;
};

export default function HelpingSection() {
  return (
    <section className={styles.helpingSection}>
      <div className="container">
        <div className={styles.helpingContent}>
          <div className={styles.helpingText}>
            <h2>Helping bloggers, experts, and marketers</h2>
            <p className={styles.helpingSubtitle}>
              Automated trend tracking and ready-made content formulas for your
              niche
            </p>
          </div>
          <div className={styles.helpingSpreadsheet}>
            <div className={styles.spreadsheetWrapper}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>account_url</th>
                    <th>reels_url</th>
                    <th>Virality</th>
                    <th>Engagement</th>
                    <th>original_script</th>
                    <th>rewrited_script</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td className={styles.accountLink}>{row.account}</td>
                      <td className={styles.urlCell}>https://www.inst...</td>
                      <td>
                        <span className={getViralClass(row.viralStatus)}>
                          {row.viralStatus}
                        </span>
                      </td>
                      <td>
                        <span className={getErClass(row.erStatus)}>
                          {row.erStatus}
                        </span>
                      </td>
                      <td className={styles.scriptCell}>{row.original}</td>
                      <td className={styles.scriptCell}>{row.translated}</td>
                      <td>
                        <span className={getStatusClass(row.status)}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
