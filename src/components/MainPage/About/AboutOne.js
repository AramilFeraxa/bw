import styles from "./AboutOne.module.css"
import Link from "next/link"

export default function AboutOne() {
    return (
        <section className={styles.aboutOne}>
            <div className={styles.shape} style={{ backgroundImage: "url(/assets/images/shapes/about-4-2.png)" }} />
            <div className="container">
                <div className="sec-title text-center">
                    <p className="sec-title__tagline">Więcej o organizacji</p>
                    <h2 className="sec-title__title">
                        Bezpieczny wypoczynek to bezpieczny powrót do domu
                        <br /> z dobrym wspomnieniem i energią do dalszych działań!
                    </h2>
                </div>
                <div className="row gutter-y-60">
                    <div className="col-md-12 col-lg-6">
                        <div className={styles.image}>
                            <img src="/assets/images/resources/about-4-1.jpg" alt="" />
                            <Link href="#" className={styles.video}>
                                <i className="fa fa-play" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className={styles.content}>
                            <div className={styles.lead}>
                                Stowarzyszenie „Aktywni na Rzecz Bezpiecznego Wypoczynku” z myślą o podróżnikach, turystach,
                                zwiedzających oraz dzieciach i młodzieży, korzystających z wypoczynku w czasie ferii zimowych i
                                wakacji.
                            </div>
                            <ul className={styles.list}>
                                <li>
                                    <i className="fa fa-check-circle" />
                                    <h3 className={styles.itemTitle}>Nasza misja!</h3>
                                    <p className={styles.itemText}>
                                        Bezpieczniej – z uśmiechem, radośniej! Jeśli wypoczynek jest bezpieczny, koncentrujemy się na
                                        przeżywaniu wolnego czasu! Na relacjach, widokach, zachowując pełne garści dobrych wspomnień!
                                    </p>
                                </li>
                                <li>
                                    <i className="fa fa-check-circle" />
                                    <h3 className={styles.itemTitle}>Pomagamy!</h3>
                                    <p className={styles.itemText}>
                                        Organizatorom turystyki, by organizowali możliwie najbezpieczniejsze imprezy, zwłaszcza dla dzieci i
                                        młodzieży. Turystom i podróżnikom w wyborze imprez turystycznych o wysokim standardzie
                                        bezpieczeństwa.
                                    </p>
                                </li>
                                <li>
                                    <i className="fa fa-check-circle" />
                                    <h3 className={styles.itemTitle}>Wesprzyj nas!</h3>
                                    <p className={styles.itemText}>
                                        Chcesz dołączyć do zespołu, napisz do nas! Nasza misja jest ważna i pożyteczna. Wesprzyj nasze
                                        działania, byśmy wspólnie podnosili standardy wypoczynku w Polsce.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
