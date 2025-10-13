import Head from "next/head";
import styles from "./EventDetails.module.css";
import { Fragment } from "react";

export default function EventDetails({ event }) {
    const {
        seoTitle,
        seoDescription,
        title,
        dateBadge,
        date,
        endDate,
        location,
        category,
        heroImage,
        images,
        intro,
        sections,
        sidebar,
    } = event;

    return (
        <>
            <Head>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:type" content="article" />
                {heroImage && <meta property="og:image" content={heroImage} />}
            </Head>

            <section className={`sec-pad-top sec-pad-bottom ${styles.wrap}`}>
                <div className="container">
                    <div className={styles.hero}>
                        <img src={heroImage} alt={title} className={styles.heroImg} />
                        {dateBadge && <div className={styles.dateBadge}>{dateBadge}</div>}
                    </div>

                    <div className="row gutter-y-60">
                        <div className="col-lg-8">
                            <div className={styles.content}>
                                <h1 className={`${styles.title} blog-card__title`}>{title}</h1>

                                {intro?.length > 0 &&
                                    intro.map((p, i) => (
                                        <p key={`intro-${i}`} className={styles.p}>
                                            {p}
                                        </p>
                                    ))}

                                {images?.[0] && (
                                    <div className={styles.figureWide}>
                                        <img src={images[0].src} alt={images[0].alt || ""} />
                                    </div>
                                )}

                                {sections?.map((sec, i) => (
                                    <div key={`sec-${i}`} className={styles.section}>
                                        {sec.heading && <h4 className={styles.h4}>{sec.heading}</h4>}
                                        {sec.paragraphs?.map((p, j) => (
                                            <div key={`sec-${i}-p-${j}`} className={styles.p}>
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                ))}

                                {images?.[1] && (
                                    <div className={styles.figureSmall}>
                                        <img src={images[1].src} alt={images[1].alt || ""} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <aside className={styles.sidebar}>
                                <div className={styles.sidebarCard}>
                                    <h4 className={styles.sidebarTitle}>Informacje w pigułce</h4>
                                    <ul className={styles.kvList}>
                                        <li>
                                            <span>Organizator</span>
                                            <strong>{sidebar.organizer}</strong>
                                        </li>
                                        {sidebar?.coordinator && (
                                            <li>
                                                <span>Koordynator</span>
                                                <strong>{sidebar.coordinator}</strong>
                                            </li>
                                        )}
                                        <li>
                                            <span>Lokalizacja</span>
                                            <strong>{location}</strong>
                                        </li>
                                        <li>
                                            <span>Data</span>
                                            <strong>
                                                {sidebar.dateLabel ||
                                                    `${date}${endDate ? `–${endDate}` : ""}`}
                                            </strong>
                                        </li>
                                        {category && (
                                            <li>
                                                <span>Kategoria</span>
                                                <strong>{category}</strong>
                                            </li>
                                        )}
                                        {sidebar.topics?.length ? (
                                            <li>
                                                <span>Tematy</span>
                                                <strong>{sidebar.topics.join(", ")}</strong>
                                            </li>
                                        ) : null}
                                        {sidebar.audience && (
                                            <li>
                                                <span>Dla kogo</span>
                                                <strong>{sidebar.audience}</strong>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
