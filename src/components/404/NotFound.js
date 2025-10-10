import Link from "next/link";
import styles from './NotFound.module.css';

export default function NotFoundPage() {
    return (
        <>
            <section className={`sec-pad-top sec-pad-bottom ${styles.wrap}`}>
                <div className="container">
                    <div className={styles.inner}>
                        <div className={styles.code} aria-hidden="true">404</div>
                        <h1 className={styles.title}>
                            Ups! Strona, której szukasz, nie istnieje.
                        </h1>
                        <p className={styles.lead}>
                            Mogła zostać przeniesiona lub adres jest niepoprawny. Sprawdź link.
                        </p>

                        <div className={styles.btnGroup}>
                            <Link href="/" className={`thm-btn ${styles.btn}`}>
                                <span>Wróć na stronę główną</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
