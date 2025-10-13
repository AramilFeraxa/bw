import styles from "./TableOfContents.module.css";

export default function TableOfContents({ sections = [] }) {
    return (
        <nav className={styles.toc}>
            <div className={styles.tocInner}>
                <h4 className={styles.tocTitle}>Spis treści</h4>
                <ul className={styles.tocList}>
                    {sections.map((s, i) => (
                        <li key={s.id} className={styles.tocItem}>
                            <a className={styles.tocLink} href={`#${s.id}`}>
                                <span className={styles.tocIndex}>{i + 1}</span>
                                <span className={styles.tocText}>{s.title}</span>
                                <span className={styles.tocChevron}>›</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
