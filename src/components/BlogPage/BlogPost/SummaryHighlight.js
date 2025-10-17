import styles from "./SummaryHighlight.module.css";

export default function SummaryHighlight({ title, bullets = [], note }) {
    return (
        <aside className={styles.sumWrap}>
            <div className={styles.sumBadge} aria-hidden>✔</div>
            <h4 className={styles.sumTitle}>{title}</h4>
            <ul className={styles.sumList}>
                {bullets.map((b, i) => <li key={i} className={styles.sumItem}>{b}</li>)}
            </ul>
            {note && <p className={styles.sumNote}>{note}</p>}
        </aside>
    );
}
