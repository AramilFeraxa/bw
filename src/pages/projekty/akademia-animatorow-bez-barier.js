import ProjectsDetailsPage from "@/components/ProjectsPage/ProjectsDetailsPage";
import Layout from "@/components/Layout/Layout";
import { akademiaAnimatorowBezBarier } from "@/data/projects/akademia-animatorow-bez-barier";

export default function AkademiaAnimatorowBezBarierPage() {
    return (
        <Layout
            title="Akademia Animatorów Bez Barier"
            description="Trzydniowe szkolenie dla animatorów turystyki społecznej"
        >
            <ProjectsDetailsPage project={akademiaAnimatorowBezBarier} />
        </Layout>
    );
}
