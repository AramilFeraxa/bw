import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ items = [] }) {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.group}>
            {items.map((it, idx) => (
                <div className={`${styles.item} ${active === idx ? styles.active : ""}`} key={idx}>
                    <button className={styles.title} onClick={() => setActive(idx === active ? -1 : idx)}>
                        {it.title}
                        <span className={styles.icon} />
                    </button>
                    {active === idx && (
                        <div className={styles.content}>
                            {typeof it.content === "string" ? <p>{it.content}</p> : it.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
