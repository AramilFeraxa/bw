import EventDetails from "@/components/EventsPage/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/wieze-osobliwosci-2025.data";

export default function Wieze2025Page() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}