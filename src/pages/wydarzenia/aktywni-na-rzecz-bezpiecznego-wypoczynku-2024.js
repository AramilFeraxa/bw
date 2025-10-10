import EventDetails from "@/components/Events/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/aktywni-na-rzecz-bezpiecznego-wypoczynku-2024.data";

export default function AktywniNaRzeczBezpiecznegoWypoczynku2024Page() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}