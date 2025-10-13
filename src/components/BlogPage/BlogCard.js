import styles from "./BlogCard.module.css";
import Link from "next/link";

export default function BlogCard({ post }) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <img src="/assets/images/favicon.png" alt="" className={styles.authorImg} />
                    <span className={styles.author}><i className="fa fa-user"></i>{post.author}</span>
                </div>
                <h3 className={styles.title}>
                    <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className={styles.text}>{post.text}</p>
                <Link href={post.href} className={styles.link}>
                    <i className="fa fa-angle-double-right" />
                    Czytaj dalej
                </Link>
            </div>
            <div className={styles.imageWrapper}>
                <img src={post.image} alt="" />
                <div className={styles.date}><span>{post.day}</span>{post.month}</div>
            </div>
        </div>
    );
}
