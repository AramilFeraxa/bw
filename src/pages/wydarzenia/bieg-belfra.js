import EventDetails from "@/components/EventsPage/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/bieg-belfra";

export default function BiegBelfraPage() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}