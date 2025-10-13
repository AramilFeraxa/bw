import Layout from "@/components/Layout/Layout"
import StatutePage from "@/components/StatutePage/Statute"

export default function Statut() {
    return (
        <Layout
            title="Statut || Stowarzyszenie Aktywni na rzecz Bezpiecznego Wypoczynku"
            description="Zapoznaj się ze statutem Stowarzyszenia, które działa aktywnie na rzecz Bezpiecznego Wypoczynku dzieci i młodzieży."
            keywords="stowarzyszenie, bezpieczny wypoczynek, statut, wypoczynek dzieci"
        >
            <div className="page-header" style={{ backgroundImage: "url(/assets/images/backgrounds/statut.jpg)" }}>
                <div className="container">
                    <h2 className="page-header__title">Statut</h2>
                    <p className="page-header__subtitle">Zapoznaj się ze statutem Stowarzyszenia</p>
                </div>
            </div>
            <StatutePage />
        </Layout>
    )
}