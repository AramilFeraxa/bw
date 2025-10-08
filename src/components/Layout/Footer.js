import styles from "./Footer.module.css";
import { footerData } from "@/data/footer";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.siteFooter} style={{ backgroundImage: "url(/assets/images/backgrounds/footer-bg-1-1.jpg)" }}>
            <div className={styles.siteFooterTop}>
                <div className="container">
                    <div className="row">
                        <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-3`}>
                            <div className={`${styles.widget} ${styles.widgetAbout}`}>
                                <Link href="/" className={styles.widgetLogo}>
                                    <img src="/assets/images/logo-light.png" width="auto" height="47" alt="Logo stowarzyszenia" />
                                </Link>
                                <p className={styles.widgetText}>{footerData.address}</p>
                            </div>
                        </div>

                        <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-2`}>
                            <div className={styles.widget}>
                                <h3 className={styles.widgetTitle}>Wydarzenia</h3>
                                <ul className={styles.widgetLinks}>
                                    {footerData.events.map((e, i) => (
                                        <li key={i}><Link href={e.href}>{e.label}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-2`}>
                            <div className={styles.widget}>
                                <h3 className={styles.widgetTitle}>Artykuły</h3>
                                <ul className={styles.widgetLinks}>
                                    {footerData.articles.map((a, i) => (
                                        <li key={i}><Link href={a.href}>{a.label}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-3`}>
                            <div className={styles.widget}>
                                <h3 className={styles.widgetTitle}>Kontakt</h3>
                                <ul className={styles.widgetContact}>
                                    {footerData.contact.map((c, i) => (
                                        <li key={i}>
                                            <i className={c.icon}></i>
                                            <Link href={c.href}>{c.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.widgetSocial}>
                                    <h3 className={styles.widgetTitle}>Znajdź nas na:</h3>
                                    <a href="https://www.facebook.com/profile.php?id=YOUR_PROFILE_ID" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-2`}>
                            <div className={`${styles.widget} ${styles.widgetCta}`}>
                                <h3 className={styles.widgetTitle}><span>Dołącz do naszej sprawy</span></h3>
                                <Link href={footerData.cta.href} className="thm-btn thm-btn--two thm-btn--light">
                                    <span>{footerData.cta.label}</span>
                                    <i className="fa fa-heart"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.siteFooterBottom}>
                <div className="container">
                    <div className={styles.bottomInner}>
                        <p className={styles.bottomText}>© Copyright <span>{year}</span> Bezpieczny Wypoczynek</p>
                        <div className={styles.social}></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
