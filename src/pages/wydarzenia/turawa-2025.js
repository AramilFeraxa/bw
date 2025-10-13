import EventDetails from "@/components/EventsPage/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/turawa-2025.data";

export default function Turawa2025Page() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}