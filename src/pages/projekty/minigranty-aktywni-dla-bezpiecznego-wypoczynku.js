import ProjectsDetailsPage from "@/components/ProjectsPage/ProjectsDetailsPage";
import Layout from "@/components/Layout/Layout";
import { minigrantyAktywni } from "@/data/projects/minigranty-aktywni";

export default function MinigrantyAktywniProjectPage() {
    return (
        <Layout title="Minigranty dla Aktywnych" description="Program minigrantów dla wolontariuszy">
            <ProjectsDetailsPage project={minigrantyAktywni} />
        </Layout>
    );
}
