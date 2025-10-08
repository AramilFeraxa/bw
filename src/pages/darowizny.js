import Layout from "@/components/Layout/Layout"
import DonationsPage from "@/components/DonationsPage/Donations"

export default function Darowizny() {
    return (
        <Layout
            title="Przekaż darowiznę na Rzecz Bezpiecznego Wypoczynku"
            description="Twoje założenie pokrywają się z tym co robimy. Będziemy wdzięczni za wsparcie, byśmy mogli realizować program. Przekaż darowiznę."
            keywords="stowarzyszenie, bezpieczny wypoczynek, darowizna, wsparcie"
        >
            <DonationsPage />
        </Layout>
    )
}
