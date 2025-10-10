import styles from "./ContactInfo.module.css"
import { contactInfo } from "@/data/contact"

export default function ContactInfo() {
    return (
        <section className={styles.contactInfo}>
            <div className="container">
                <div className={styles.inner} style={{ backgroundImage: "url(/assets/images/backgrounds/contact-info-bg-1-1.jpg)" }}>
                    <div className="row gutter-y-30">
                        {contactInfo.map((it, i) => (
                            <div className="col-lg-4 col-md-12" key={i}>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <i className={it.icon} />
                                    </div>
                                    <p className={styles.text} dangerouslySetInnerHTML={{ __html: it.html }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
