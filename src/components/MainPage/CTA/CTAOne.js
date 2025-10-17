import styles from "./CTAOne.module.css";
import Link from "next/link";

const CTAOne = () => {
    return (
        <section className={styles.ctaOne}>
            <div className={styles.bg} style={{ backgroundImage: "url(/assets/images/backgrounds/wsparcie-stowarzyszenia.jpg)" }} />
            <div className={styles.shape} style={{ backgroundImage: "url(/assets/images/shapes/cta-s-1-1.png)" }} />
            <div className="container text-center">
                <div className="sec-title">
                    <p className="sec-title__tagline">Jesteśmy, by działać aktywnie!</p>
                    <h2 className="sec-title__title">
                        Wspieramy działania na rzecz rozwoju i promocji bezpiecznego wypoczynku
                        <br />
                        <span>dla dzieci, młodzieży i dorosłych.</span> Ty też możesz pomóc!
                    </h2>
                </div>
                <Link href="/darowizny" className={`thm-btn ${styles.btn}`}><span>Wesprzyj nasze działania</span></Link>
            </div>
        </section>
    );
}
export default CTAOne;