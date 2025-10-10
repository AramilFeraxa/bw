import EventDetails from "@/components/Events/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/konferencja-opole-2.data";

export default function KonferencjaOpolePage() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}