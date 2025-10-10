import styles from "./EventsGrid.module.css";
import EventCard from "./EventCard";

export default function EventsGrid({ items }) {
    return (
        <div className={styles.grid}>
            {items.map((event) => (
                <div key={event.slug} className={styles.col}>
                    <EventCard event={event} />
                </div>
            ))}
        </div>
    );
}
