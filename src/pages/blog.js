import BlogCard from "@/components/BlogPage/BlogCard";
import Layout from "@/components/Layout/Layout";
import { postsHomeTwo } from "@/data/blogMain";

export default function BlogPage() {
    return (
        <Layout title="Blog || Stowarzyszenie Aktywni na rzecz Bezpiecznego Wypoczynku" description="Przeczytaj najnowsze artykuły i aktualności na naszym blogu. Dowiedz się więcej o bezpieczeństwie dzieci i młodzieży podczas wypoczynku." keywords="stowarzyszenie, bezpieczny wypoczynek, blog, artykuły, bezpieczeństwo dzieci">
            <>
                <div className="page-header" style={{ backgroundImage: "url(/assets/images/blog/blog-header.jpg)" }}>
                    <div className="container">
                        <h2 className="page-header__title">Blog</h2>
                    </div>
                </div>

                <div className="container sec-pad-top sec-pad-bottom">
                    <div className="row gutter-y-30">
                        {postsHomeTwo.map((post, i) => (
                            <div className="col-sm-12 col-md-6 col-lg-4 d-flex" key={i}>
                                <BlogCard
                                    post={post}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </Layout>
    );
}
