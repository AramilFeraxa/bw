import EventDetails from "@/components/Events/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/konferencje-bezpieczny-wypoczynek-moszna-2025.data";

export default function KonferencjeBezpiecznyWypoczynekMoszna2025Page() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}
