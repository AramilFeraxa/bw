import styles from "./Prelegenci.module.css";

export default function Prelegenci({ speakers = [] }) {
    if (!speakers || speakers.length === 0) return null;

    const featured = speakers.filter(s => s.featured);
    const others = speakers.filter(s => !s.featured);

    return (
        <div className={styles.prelegenciSection}>
            <h3 className={styles.title}>Prelegenci</h3>

            {featured.length > 0 && (
                <div className={styles.featuredGrid}>
                    {featured.map((p, i) => (
                        <div className={styles.featuredItem} key={`feat-${i}`}>
                            {p.img && (
                                <div className={styles.imgWrap}>
                                    <img src={p.img} alt={p.name} />
                                </div>
                            )}
                            <div className={styles.featuredContent}>
                                <h4 className={styles.name}>{p.name}</h4>
                                {p.title && <p className={styles.titleLine}>{p.title}</p>}
                                {p.description && <p className={styles.description}>{p.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {others.length > 0 && (
                <div className={styles.othersList}>
                    <h4 className={styles.subhead}>Pozostali prelegenci</h4>
                    <ul>
                        {others.map((o, i) => (
                            <li key={`other-${i}`}>
                                <strong>{o.name}</strong>
                                {o.title ? ` — ${o.title}` : ''}
                                {o.description ? `: ${o.description}` : ''}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
