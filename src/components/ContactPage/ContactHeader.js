import styles from "./ContactHeader.module.css"

export default function ContactHeader() {
    return (
        <section className={styles.pageHeader} style={{ backgroundImage: "url(/assets/images/backgrounds/kontakt-header.jpg)" }}>
            <div className="container">
                <h2 className={styles.title}>Kontakt</h2>
            </div>
        </section>
    )
}
