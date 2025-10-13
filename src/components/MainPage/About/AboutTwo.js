import styles from "./AboutTwo.module.css";
import Link from "next/link";

export default function AboutTwo() {
    return (
        <section className={`${styles.aboutTwo} ${styles.padTop} ${styles.padBottom}`}>
            <div className={`${styles.shape} float-bob-x`} style={{ backgroundImage: "url(/assets/images/shapes/about-six-s-1.png)" }} />
            <div className="container">
                <div className="row gutter-y-60">
                    <div className="col-lg-6">
                        <div className={styles.images}>
                            <img src="/assets/images/resources/about-six-1-1.jpg" alt="" />
                            <img src="/assets/images/resources/about-six-1-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.content}>
                            <div className="sec-title text-start">
                                <p className="sec-title__tagline">Jesteś gotowy na to, by nam pomóc?</p>
                                <h2 className="sec-title__title">Pomagamy ludziom <br />którzy są w potrzebie</h2>
                            </div>
                            <div className={styles.lead}>
                                Promujemy bezpieczny wypoczynek i działamy aktywnie, by wspierać zarówno organizatorów, jak i klientów –
                                seniorów, dorosłych, a zwłaszcza dzieci i młodzież. Bezpieczny wypoczynek dostępny dla każdego to nasz
                                cel!
                            </div>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <i className={`${styles.icon} fa fa-check-circle`} />
                                    <h3 className={styles.title}>Dołącz do nas!</h3>
                                    <p className={styles.text}>
                                        Zostań częścią naszego zespołu jako <Link href="/zespol">konsultant czy wolontariusz.</Link>
                                    </p>
                                </li>
                                <li className={styles.listItem}>
                                    <i className={`${styles.icon} fa fa-check-circle`} />
                                    <h3 className={styles.title}>Podaj temat!</h3>
                                    <p className={styles.text}>
                                        Coś wzbudziło Twoją wątpliwość w organizacji wypoczynku, <Link href="mailto:kontakt@bezpiecznywypoczynek.pl">napisz do nas.</Link>
                                    </p>
                                </li>
                            </ul>
                            <div className={styles.btns} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
