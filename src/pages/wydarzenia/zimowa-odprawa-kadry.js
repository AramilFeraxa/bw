import EventDetails from "@/components/EventsPage/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/zimowa-odprawa-kadry.data";

export default function ZimowaOdprawaKadryPage() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}