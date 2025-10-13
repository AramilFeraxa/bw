import { teamMembers } from "@/data/team"
import styles from "./TeamPage.module.css"

export default function TeamPage() {
    return (
        <section className={`${styles.team} sec-pad-top sec-pad-bottom`}>
            <div className="container">
                <div className="row gutter-y-30">
                    {teamMembers.map((m, i) => (
                        <div className="col-md-6 col-lg-4" key={i}>
                            <div className={`${styles.card} ${styles[m.type]}`}>
                                <h3 className={styles.title}>
                                    {m.href ? <a href={m.href}>{m.name}</a> : m.name}
                                </h3>
                                <p className={styles.role}>{m.role}</p>
                                <div className={styles.image}>
                                    <img src={m.image} alt={m.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
