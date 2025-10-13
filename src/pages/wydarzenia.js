import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import EventsGrid from "@/components/EventsPage/EventsGrid";
import { events } from "@/data/events";

export default function WydarzeniaPage() {
    const pageTitle = "Wydarzenia na rzecz Bezpiecznego Wypoczynku";
    const pageDescription =
        "Dowiedz się więcej o naszych inicjatywach. Sprawdź wydarzenia w Twojej okolicy i dołącz do nas!";

    return (
        <Layout title={pageTitle} description={pageDescription}>
            <Head>
                <link rel="canonical" href="https://bezpiecznywypoczynek.pl/wydarzenia" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
                />
            </Head>

            <section
                className="page-header"
                style={{ backgroundImage: "url(/assets/images/backgrounds/wydarzenia-header.jpg)" }}
            >
                <div className="container">
                    <h2 className="page-header__title">Wydarzenia</h2>
                </div>
            </section>

            <section className="sec-pad-top sec-pad-bottom">
                <div className="container">
                    <EventsGrid items={events} />
                </div>
            </section>
        </Layout>
    );
}
