import styles from "./CTAFour.module.css";
import Link from "next/link";

const CTAFour = () => {
    return (
        <section className={styles.ctaFour}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.item}>
                            <div className={styles.bg} style={{ backgroundImage: "url(/assets/images/backgrounds/cta-4-bg-1-1.jpg)" }} />
                            <div className={styles.icon}><i className="paroti-icon-heart" /></div>
                            <h3 className={styles.title}>Bezpieczny wypoczynek to:</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.item} style={{ ["--accent-color"]: "#8139e7" }}>
                            <div className={styles.bg} style={{ backgroundImage: "url(/assets/images/backgrounds/cta-4-bg-1-2.jpg)" }} />
                            <div className={styles.icon}><i className="paroti-icon-help-1" /></div>
                            <h3 className={styles.title}>wsparcie dla organizatorów</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.item} style={{ ["--accent-color"]: "#138999" }}>
                            <div className={styles.bg} style={{ backgroundImage: "url(/assets/images/backgrounds/cta-4-bg-1-3.jpg)" }} />
                            <div className={styles.icon}><i className="paroti-icon-food-basket" /></div>
                            <h3 className={styles.title}><Link href="#">i zadowoleni klienci</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTAFour;