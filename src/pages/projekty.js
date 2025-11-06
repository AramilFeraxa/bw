import Layout from "@/components/Layout/Layout";
import ProjectsGrid from "@/components/ProjectsPage/ProjectsGrid";
import { allProjects } from "@/data/projects";

export default function ProjektyPage() {
    const pageTitle = "Projekty | Aktywni na Rzecz Bezpiecznego Wypoczynku";
    const pageDescription =
        "Poznaj nasze projekty realizowane na rzecz bezpieczeństwa dzieci i młodzieży podczas wypoczynku.";

    return (
        <Layout title={pageTitle} description={pageDescription}>
            <section
                className="page-header"
                style={{ backgroundImage: "url(/assets/images/backgrounds/projects.png)" }}
            >
                <div className="container">
                    <h2 className="page-header__title">Projekty</h2>
                </div>
            </section>

            <section className="sec-pad-top sec-pad-bottom">
                <div className="container">
                    <ProjectsGrid items={allProjects} />
                </div>
            </section>
        </Layout>
    );
}
