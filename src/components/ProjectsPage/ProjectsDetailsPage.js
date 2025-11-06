import Head from "next/head";
import styles from "./ProjectsDetailsPage.module.css";
import { Fragment } from "react";

export default function ProjectsDetailsPage({ project }) {
    const {
        seoTitle,
        seoDescription,
        title,
        subtitle,
        category,
        heroImage,
        progressPercent,
        images = [],
        intro,
        sections,
        results,
        downloadFiles = [],
        coordinators = [],
        funding,
        partners = [],
        shortAbout,
    } = project;

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

            <section className={`sec-pad-top sec-pad-bottom ${styles.donationsDetails}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className={styles.donationsDetails}>
                                <div className={styles.donationsCard} style={{ "--accent-color": "#fdbe44" }}>
                                    <div className={styles.donationsCardImage}>
                                        <img src={heroImage} alt={title} />
                                        {category && (
                                            <div className={styles.donationsCardCategory}>
                                                <a href="#">{category}</a>
                                            </div>
                                        )}
                                    </div>

                                    {progressPercent && (
                                        <div className={styles.donationsCardContent}>
                                            {progressPercent && (
                                                <div className={styles.progressWrapper}>
                                                    <div className={styles.progressHeader}>
                                                        <span className={styles.progressLabel}>Procent realizacji projektu</span>
                                                        <span className={styles.progressPercent}>{progressPercent}%</span>
                                                    </div>
                                                    <div className={styles.bar}>
                                                        <div
                                                            className={`${styles.barInner} count-bar`}
                                                            data-percent={`${progressPercent}%`}
                                                            style={{ width: `${progressPercent}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <h3 className={styles.donationsCardTitle}>{title}</h3>
                                {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}

                                <div className={styles.donationsDetailsContent}>
                                    {intro?.map((paragraph, i) => (
                                        <p key={`intro-${i}`}>{paragraph}</p>
                                    ))}

                                    {sections?.map((section, i) => (
                                        <Fragment key={`section-${i}`}>
                                            {section.heading && (
                                                <h3 className={styles.donationsCardTitle}>{section.heading}</h3>
                                            )}
                                            {section.paragraphs?.map((p, j) => (
                                                <p key={`section-${i}-p-${j}`}>{p}</p>
                                            ))}
                                            {section.list && (
                                                <ul className={`list-unstyled ${styles.donationsDetailsList}`}>
                                                    {section.list.map((item, k) => (
                                                        <li key={`section-${i}-list-${k}`}>
                                                            <i className="fa fa-check-circle"></i>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </Fragment>
                                    ))}

                                    {results && (
                                        <>
                                            <h3 className={styles.donationsCardTitle}>{results.heading}</h3>
                                            <ul className={`list-unstyled ${styles.donationsDetailsList}`}>
                                                {results.items?.map((item, i) => (
                                                    <li key={`result-${i}`}>
                                                        <i className="fa fa-check-circle"></i>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {images?.length > 0 && (
                                        <div className="row gutter-y-20">
                                            {images.map((image, i) => (
                                                <div
                                                    key={`img-${i}`}
                                                    className={`col-md-${images.length === 1 ? "12" : images.length === 2 ? "6" : images.length === 3 ? "4" : images.length === 4 ? "6" : "4"}`}
                                                >
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt || `Zdjęcie ${i + 1}`}
                                                        className={styles.galleryImage}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {downloadFiles?.length > 0 && (
                                    <div className={styles.donationsDetailsPresentation}>
                                        <i className="paroti-icon-checked"></i>
                                        <h3 className={styles.donationsDetailsPresentationTitle}>
                                            Materiały z konferencji
                                        </h3>
                                        <div className={styles.downloadLinks}>
                                            {downloadFiles.map((file, i) => (
                                                <a
                                                    key={`file-${i}`}
                                                    href={file.url}
                                                    className={`thm-btn ${styles.donationsDetailsPresentationBtn}`}
                                                    download
                                                >
                                                    <span>{file.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {shortAbout && (
                                    <div className={styles.blogDetailsComments}>
                                        <h3 className={styles.blogDetailsSecTitle}>Krótko o projekcie</h3>
                                        <ul className={`list-unstyled ${styles.blogDetailsCommentsList}`}>
                                            <li>
                                                <img
                                                    src={shortAbout.authorImage || "/assets/images/blog/blog-c-1.jpg"}
                                                    alt={shortAbout.author}
                                                />
                                                <div className={styles.blogDetailsCommentsMeta}>
                                                    <h3 className={styles.blogDetailsCommentsName}>
                                                        {shortAbout.author}
                                                    </h3>
                                                    <p className={styles.blogDetailsCommentsDate}>
                                                        {shortAbout.date}
                                                    </p>
                                                </div>
                                                <p className={styles.blogDetailsCommentsText}>{shortAbout.text}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className={styles.sidebar}>
                                {coordinators && coordinators.length > 0 && (
                                    <div className={styles.sidebarSingle}>
                                        <h3 className={styles.sidebarTitle}>Koordynatorzy projektu</h3>
                                        <ul className={`list-unstyled ${styles.coordinatorsList}`}>
                                            {coordinators.map((coord, i) => (
                                                <li key={`coord-${i}`}>
                                                    <strong>{coord.name}</strong>
                                                    {coord.email && (
                                                        <>
                                                            <br />
                                                            <a href={`mailto:${coord.email}`}>{coord.email}</a>
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {funding && funding.funders && funding.funders.length > 0 && (
                                    <div className={styles.sidebarSingle}>
                                        <h3 className={styles.sidebarTitle}>Finansowanie</h3>
                                        {funding.description && (
                                            <p className={styles.fundingDescription}>{funding.description}</p>
                                        )}
                                        <ul className={`list-unstyled ${styles.partnersList}`}>
                                            {funding.funders.map((funder, i) => (
                                                <li key={`funder-${i}`}>
                                                    <div className={styles.partnerItem}>
                                                        {funder.logo && (
                                                            <div className={styles.partnerLogo}>
                                                                <img src={funder.logo} alt={funder.name} />
                                                            </div>
                                                        )}
                                                        <div className={styles.partnerInfo}>
                                                            {funder.website ? (
                                                                <a
                                                                    href={funder.website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {funder.name}
                                                                </a>
                                                            ) : (
                                                                <span>{funder.name}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Współpraca/Partnerzy */}
                                {partners && partners.length > 0 && (
                                    <div className={styles.sidebarSingle}>
                                        <h3 className={styles.sidebarTitle}>Współpraca</h3>
                                        <ul className={`list-unstyled ${styles.partnersList}`}>
                                            {partners.map((partner, i) => (
                                                <li key={`partner-${i}`}>
                                                    <div className={styles.partnerItem}>
                                                        {partner.logo && (
                                                            <div className={styles.partnerLogo}>
                                                                <img src={partner.logo} alt={partner.name} />
                                                            </div>
                                                        )}
                                                        <div className={styles.partnerInfo}>
                                                            {partner.website ? (
                                                                <a
                                                                    href={partner.website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {partner.name}
                                                                </a>
                                                            ) : (
                                                                <span>{partner.name}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
