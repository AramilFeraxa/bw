import Layout from "@/components/Layout/Layout"
import TeamPage from "@/components/TeamPage/TeamPage"

export default function ZespolPage() {
    return (
        <Layout title="Poznaj Nasz Zespół | bezpiecznywypoczynek.pl" description="Poznaj osoby, które tworzą Stowarzyszenie Bezpieczny Wypoczynek. Jesteśmy grupą pasjonatów dbających o bezpieczeństwo dzieci i młodzieży podczas wypoczynku." keywords="stowarzyszenie, bezpieczny wypoczynek, zespół, członkowie, wolontariusze">
            <div className="page-header" style={{ backgroundImage: "url(/assets/images/backgrounds/zespol.jpg)" }}>
                <div className="container">
                    <h2 className="page-header__title">Zespół</h2>
                </div>
            </div>
            <TeamPage />
        </Layout>
    )
}
