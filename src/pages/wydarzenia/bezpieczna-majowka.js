import EventDetails from "@/components/Events/EventDetails";
import Layout from "@/components/Layout/Layout";
import data from "@/data/events/bezpieczna-majowka.data";

export default function BezpiecznaMajowkaPage() {
    return (
        <Layout title={data.title}>
            <EventDetails event={data} />
        </Layout>
    )
}