import EventDetails from "@/components/Events/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/sezon-wakacyjny-2023.data";

export default function Turawa2025Page() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}