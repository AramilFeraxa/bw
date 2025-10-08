import { teamMembers } from "@/data/team"
import styles from "./TeamPage.module.css"

export default function TeamPage() {
    return (
        <section className={`${styles.team} sec-pad-top sec-pad-bottom`}>
            <div className="container">
                <div className="header">
                    <h1 className="text-center">Poznaj Nasz Zespół</h1>
                    <p className="text-center">Jesteśmy grupą pasjonatów dbających o bezpieczeństwo dzieci i młodzieży podczas wypoczynku.</p>
                </div>
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
