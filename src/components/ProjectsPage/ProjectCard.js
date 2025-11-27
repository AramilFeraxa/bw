import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
    const categoryColors = {
        'Szkolenie': '#fdbe44',
        'Rozwój': '#8139e7',
        'Pomoc': '#44b0fd',
    };

    const accentColor = categoryColors[project.category] || '#fdbe44';

    return (
        <div className={styles.projectCard} style={{ '--accent-color': accentColor }}>
            <div className={styles.projectCardImage}>
                <img src={project.heroImage} alt={project.title} />
                <div className={styles.projectCardCategory} style={{ backgroundColor: accentColor }}>
                    <a href="#">{project.category}</a>
                </div>
            </div>
            <div className={styles.projectCardContent}>
                <div className={styles.projectCardBody}>
                    <h3 className={styles.projectCardTitle}>
                        <Link href={`/projekty/${project.id}`}>
                            {project.title}
                        </Link>
                    </h3>
                    <p className={styles.projectCardText}>
                        {project.seoDescription.substring(0, 100)}...
                    </p>
                </div>
                <div className={styles.projectCardFooter}>
                    {project.progressPercent && (
                        <div className={styles.projectCardProgress}>
                            <div className={styles.bar}>
                                <div
                                    className={styles.barInner}
                                    style={{ width: `${project.progressPercent}%` }}
                                >
                                    <div className={styles.countText}>{project.progressPercent}%</div>
                                </div>
                            </div>
                            <div className={styles.projectCardStatus}>
                                <p>
                                    <span>Realizacja</span>
                                </p>
                                <p>
                                    <span>{project.progressPercent}%</span>
                                </p>
                            </div>
                        </div>
                    )}
                    <Link href={`/projekty/${project.id}`} className="linkHref">
                        <i className="fa fa-angle-double-right" />
                        Dowiedz się więcej
                    </Link>
                </div>
            </div>
        </div>
    );
}
