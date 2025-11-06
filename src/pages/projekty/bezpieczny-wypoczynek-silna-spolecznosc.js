import ProjectsDetailsPage from "@/components/ProjectsPage/ProjectsDetailsPage";
import Layout from "@/components/Layout/Layout";
import { bezpiecznyWypoczynekSilnaSpolecznosc } from "@/data/projects/bezpieczny-wypoczynek-silna-spolecznosc";

export default function BezpiecznyWypoczynekSilnaSpolecznoscProject() {
    return (
        <Layout
            title="Bezpieczny Wypoczynek – Silna Społeczność!"
            description="Projekty"
        >
            <ProjectsDetailsPage project={bezpiecznyWypoczynekSilnaSpolecznosc} />
        </Layout>
    );
}
