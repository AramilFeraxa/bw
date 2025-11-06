import ProjectsDetailsPage from "@/components/ProjectsPage/ProjectsDetailsPage";
import Layout from "@/components/Layout/Layout";
import { swiadomiNauczyciele } from "@/data/projects/swiadomi-nauczyciele";

export default function SwiadomiNauczycieleProject() {
    return (
        <Layout
            title="Świadomi Nauczyciele Mocą Opolszczyzny"
            description="Projekty"
        >
            <ProjectsDetailsPage project={swiadomiNauczyciele} />
        </Layout>
    );
}
