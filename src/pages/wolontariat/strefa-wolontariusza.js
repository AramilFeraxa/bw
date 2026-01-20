import Layout from "@/components/Layout/Layout"
import styles from "./strefa-wolontariusza.module.css"
import sumStyles from "@/components/Blog/BlogPost/SummaryHighlight.module.css"

export default function StrefaWolontariusza() {
    return (
        <Layout title="Strefa wolontariusza – dokumenty, szkolenia i SOW" description="Centrum dowodzenia wolontariusza. Pobierz pakiet powitalny, sprawdź kalendarz szkoleń na 2026 rok i zaloguj się do systemu SOW.">
            <section className="page-header" style={{ backgroundImage: "url(/assets/images/backgrounds/wolontariat.jpg)" }}>
                <div className="container">
                    <h2 className="page-header__title">Strefa wolontariusza</h2>
                </div>
            </section>

            <section className="sec-pad-top sec-pad-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sec-title text-center">
                                <p className="sec-title__tagline">Witaj w zespole</p>
                                <h2 className="sec-title__title">Strefa wolontariusza</h2>
                            </div>
                            <p className={styles.introText}>Witaj w zespole Stowarzyszenia „Aktywni na Rzecz Bezpiecznego Wypoczynku”! Ta przestrzeń powstała w ramach projektu „Aktywny wolontariat dla Bezpiecznego Wypoczynku!”, aby zapewnić każdemu wolontariuszowi profesjonalne wsparcie, dostęp do wiedzy i jasne zasady współpracy.</p>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className={styles.sectionCard}>
                                        <div className={styles.sectionHeader}><span className={styles.badge}>1</span><h3>Pierwsze kroki: pakiet powitalny</h3></div>
                                        <p>Dopiero zaczynasz? Przygotowaliśmy dla Ciebie materiały, które pomogą szybko i bez stresu wdrożyć się w nasze działania. Pobierz swój pakiet startowy.</p>
                                        <p><a className={`thm-btn thm-btn--two ${styles.downloadBtn}`} href="/assets/files/Przewodnik nowego wolontariusza.pdf" target="_blank" rel="noopener noreferrer"><span>POBIERZ — Przewodnik nowego wolontariusza</span></a></p>
                                    </div>

                                    <div className={styles.sectionCard}>
                                        <div className={styles.sectionHeader}><span className={styles.badge}>2</span><h3>Standardy i Dokumenty</h3></div>
                                        <p>Dbamy o transparentność i bezpieczeństwo – zarówno Twoje, jak i naszych podopiecznych. Poniżej znajdują się kluczowe dokumenty wypracowane w ramach projektu, które stanowią fundament naszej wspólnej pracy:</p>
                                        <div className={styles.docGrid}>
                                            <a className={styles.docCard} href="/assets/files/Regulamin wolontariatu.pdf" target="_blank" rel="noopener noreferrer"><i className="fa fa-file" aria-hidden="true"></i><span>Regulamin Wolontariatu</span></a>
                                            <a className={styles.docCard} href="/assets/files/Porozumienie o wykonywaniu świadczeń wolontariackich_wzór.pdf" target="_blank" rel="noopener noreferrer"><i className="fa fa-pencil" aria-hidden="true"></i><span>Porozumienie Wolontariackie</span></a>
                                            <a className={styles.docCard} href="/assets/files/Etyka wolontariusza.pdf" target="_blank" rel="noopener noreferrer"><i className="fa fa-shield" aria-hidden="true"></i><span>Etyka Wolontariusza</span></a>
                                        </div>
                                    </div>

                                    <div className={styles.sectionCard}>
                                        <div className={styles.sectionHeader}><span className={styles.badge}>3</span><h3>Kalendarz Szkoleń i Rozwoju</h3></div>
                                        <p>Jako wolontariusz masz dostęp do bezpłatnych szkoleń prowadzonych przez koordynatora oraz ekspertów zewnętrznych. Inwestujemy w Twoje kompetencje!</p>
                                        <p>Najbliższe terminy:</p>
                                        <ul className={styles.trainingList}>
                                            <li className={styles.trainingItem}><strong>marzec 2026</strong> — Psychologia pracy z grupą: Jak budować autorytet i radzić sobie w trudnych sytuacjach.</li>
                                            <li className={styles.trainingItem}><strong>kwiecień 2026</strong> — Pierwsza Pomoc Przedmedyczna: Warsztaty praktyczne.</li>
                                            <li className={styles.trainingItem}><strong>maj 2026</strong> — Prawo w wypoczynku: Obowiązki opiekuna i zasady bezpieczeństwa.</li>
                                        </ul>
                                        <p className={styles.small}>Dokładne daty oraz miejsca będą ogłaszane na bieżąco. Chcesz zapisać się na szkolenie? Napisz do koordynatora.</p>
                                    </div>

                                    <div className={styles.sectionCard}>
                                        <div className={styles.sectionHeader}><span className={styles.badge}>4</span><h3>System Obsługi Wolontariatu (SOW)</h3></div>
                                        <p>Pamiętaj, aby regularnie logować się do swojego profilu w systemie SOW — potwierdzisz tam udział i ewidencjonujesz godziny pracy.</p>
                                        <div className={styles.callout}>
                                            <p className={styles.calloutText}>Zaloguj się do SOW, by potwierdzać udział w akcjach i zdobywać godziny do zaświadczeń.</p>
                                            <a className={`thm-btn ${styles.sowBtn}`} href="https://sow.korpussolidarnosci.gov.pl/pl/login" target="_blank" rel="noopener noreferrer"><span>ZALOGUJ SIĘ DO SOW</span></a>
                                        </div>
                                    </div>

                                    <div className={styles.sectionCard}>
                                        <div className={styles.sectionHeader}><span className={styles.badge}>5</span><h3>Masz pytania? Potrzebujesz wsparcia?</h3></div>
                                        <div className={styles.contactCard}>
                                            <div className={styles.contactMeta}><div className={styles.avatar}><i className="fa fa-user" aria-hidden="true"></i></div>
                                                <div>
                                                    <div><strong>Paulina Jędrzejak-Bartela</strong></div>
                                                    <div><a href="mailto:p.jedrzejak@bezpiecznywypoczynek.pl">p.jedrzejak@bezpiecznywypoczynek.pl</a></div>
                                                    <div><a href="tel:+48609740041">609-740-041</a></div>
                                                </div></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <aside className={sumStyles.sumWrap} style={{ marginTop: 24 }}>
                                        <div className={sumStyles.sumBadge} aria-hidden><i className="fa fa-paperclip" aria-hidden="true"></i></div>
                                        <h4 className={sumStyles.sumTitle}>Szybkie linki</h4>
                                        <ul className={sumStyles.sumList}>
                                            <li className={sumStyles.sumItem}><strong>Pobierz pakiet startowy</strong> — <a href="/assets/files/Przewodnik nowego wolontariusza.pdf" target="_blank" rel="noopener noreferrer">Pobierz</a></li>
                                            <li className={sumStyles.sumItem}><strong>Regulamin i dokumenty</strong> — <a href="/assets/files/Regulamin wolontariatu.pdf" target="_blank" rel="noopener noreferrer">Zobacz</a></li>
                                            <li className={sumStyles.sumItem}><strong>System SOW</strong> — <a href="https://sow.korpussolidarnosci.gov.pl/pl/login" target="_blank" rel="noopener noreferrer">Zaloguj się</a></li>
                                            <li className={sumStyles.sumItem}><strong>Kontakt do koordynatora</strong> — <a href="mailto:p.jedrzejak@bezpiecznywypoczynek.pl">Napisz</a></li>
                                        </ul>
                                        <p className={sumStyles.sumNote}>Masz pytania? Skontaktuj się z koordynatorką.</p>
                                    </aside>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <img src="/assets/images/projects/aktywny-wolontariat-dla-bezpiecznego-wypoczynku/KS_zestawienie_2_KOLOR.png" alt="Logo projektu Aktywny wolontariat dla Bezpiecznego Wypoczynku" style={{ display: 'block', margin: '24px auto 0', maxWidth: '1000px' }} />
            </section>
        </Layout>
    )
}
