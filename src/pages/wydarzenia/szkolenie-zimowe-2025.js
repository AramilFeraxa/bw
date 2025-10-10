import EventDetails from "@/components/Events/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/szkolenie-zimowe-2025.data";

export default function ZimowaOdprawaKadryPage() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}