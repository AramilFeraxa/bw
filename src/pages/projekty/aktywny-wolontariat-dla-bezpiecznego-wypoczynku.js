import ProjectsDetailsPage from "@/components/ProjectsPage/ProjectsDetailsPage";
import Layout from "@/components/Layout/Layout";
import { bezpiecznyWypoczynekBezpiecznyWolontariat } from "@/data/projects/aktywny-wolontariat-dla-bezpiecznego-wypoczynku";

export default function BezpiecznyWypoczynekBezpiecznyWolontariatProject() {
    return (
        <Layout
            title="Bezpieczny wolontariat – system, ludzie, trwałość"
            description="Projekty"
        >
            <ProjectsDetailsPage project={bezpiecznyWypoczynekBezpiecznyWolontariat} />
        </Layout>
    );
}
