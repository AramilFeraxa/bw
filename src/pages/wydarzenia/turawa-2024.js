import EventDetails from "@/components/Events/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/turawa-2024.data";

export default function Turawa2024Page() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}