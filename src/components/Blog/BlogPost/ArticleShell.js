import styles from "./ArticleShell.module.css";

export default function ArticleShell({
    title,
    author,
    date,
    hero,
    previous = [],
    childrenLeft,
    childrenRight
}) {
    const d = new Date(date);

    return (
        <section className={`sec-pad-top sec-pad-bottom ${styles.wrap}`}>
            <div className="container">
                <div className={styles.hero}>
                    <img src={hero} alt="" />
                    <div className={styles.dateBadge}>
                        <span>{d.toLocaleDateString("pl-PL", { day: "2-digit", month: "2-digit", year: "numeric" })}</span>
                    </div>
                </div>

                <ul className={styles.meta}>
                    <li>
                        <i className="fa fa-user" aria-hidden="true" />
                        <a className={styles.metaLink} href="#">{author}</a>
                    </li>
                </ul>

                <h1 className={styles.title}>{title}</h1>

                <div className={styles.contentGrid}>
                    <div className={styles.contentCol}>{childrenLeft}</div>
                    <aside className={styles.sidebarCol}>
                        {childrenRight}
                        <div className={styles.prevBlock}>
                            <div className={styles.prevHeader}>
                                <h4 className={styles.prevTitle}>Poprzednie artykuły</h4>
                            </div>
                            <ul className={styles.prevList}>
                                {previous.length === 0 && (
                                    <li className={styles.sidebarItemEmpty}>Brak artykułów</li>
                                )}
                                {previous.map((p) => (
                                    <li key={p.href} className={styles.prevItem}>
                                        <a className={styles.prevLink} href={p.href}>
                                            <div className={styles.prevThumbWrap}>
                                                <img className={styles.prevThumb} src={p.image} alt="" />
                                            </div>
                                            <div className={styles.prevBody}>
                                                <span className={styles.prevMeta}>
                                                    <i className="fa fa-user" aria-hidden="true" /> {p.author}
                                                </span>
                                                <span className={styles.prevPostTitle}>{p.title}</span>
                                            </div>
                                            <span className={styles.prevChevron}>›</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
