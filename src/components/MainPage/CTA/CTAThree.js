import styles from "./CTAThree.module.css";
import Link from "next/link";

const CTAThree = () => {
    return (
        <section className={styles.ctaThree}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.innerBg} style={{ backgroundImage: "url(/assets/images/shapes/cta-3-bg-1-1.png)" }} />
                    <div className={styles.icon}><i className="paroti-icon-support" /></div>
                    <h3 className={styles.title}>Sprawdź jak możesz nam pomóc</h3>
                    <div className={styles.btns}>
                        <Link href="/darowizny" className="thm-btn cta-three__btn">
                            <span>Wesprzyj Nas</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTAThree;