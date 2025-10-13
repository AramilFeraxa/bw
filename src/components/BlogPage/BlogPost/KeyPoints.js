import styles from "./KeyPoints.module.css";

export default function KeyPoints({ items = [], variant = "checks", heading }) {
    return (
        <div className={`${styles.kp} ${styles[`kp_${variant}`]}`}>
            {heading && <h4 className={styles.kpHeading}>{heading}</h4>}
            <ul className={styles.kpList}>
                {items.map((it, i) => (
                    <li key={i} className={styles.kpItem}>
                        <i className={`${styles.kpIcon} fa fa-check-circle`} />
                        <div className={styles.kpBody}>
                            <div className={styles.kpTitle}>{it.title}</div>
                            {it.text && <p className={styles.kpText}>{it.text}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
