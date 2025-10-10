import Link from "next/link";
import styles from "./EventCard.module.css";

export default function EventCard({ event }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrap}>
                <img src={event.image} alt={event.title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <div className={styles.date}>{event.date}</div>
                <ul className={styles.meta}>
                    <li>
                        <i className="fa fa-map-marker-alt" />
                        <span>{event.location}</span>
                    </li>
                    <li>
                        <i className="fa fa-people-arrows" />
                        <span>{event.category}</span>
                    </li>
                </ul>
                <h3 className={styles.title}>
                    <Link href={event.href}>{event.title}</Link>
                </h3>
            </div>
        </div>
    );
}
