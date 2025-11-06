import styles from "./ProjectsGrid.module.css";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ items }) {
    return (
        <div className={styles.grid}>
            {items.map((project) => (
                <div key={project.id} className={styles.col}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    );
}
