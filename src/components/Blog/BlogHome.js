import styles from "./BlogHome.module.css";
import { postsHomeTwo } from "@/data/blog";
import BlogCard from "./BlogCard";

export default function BlogHomeTwo() {
    return (
        <section className={styles.blogHome}>
            <img src="/assets/images/shapes/blog-h2-s-1.png" className={styles.shape} alt="" />
            <div className="container">
                <div className="sec-title text-center">
                    <p className="sec-title__tagline">Gorący temat. To ważne dla Ciebie!</p>
                    <h2 className="sec-title__title">Ostatnie artykuły z naszego bloga!</h2>
                </div>
                <div className="row gutter-y-30">
                    {postsHomeTwo.map((p, i) => (
                        <div className="col-md-12 col-lg-6" key={i}>
                            <BlogCard post={p} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
