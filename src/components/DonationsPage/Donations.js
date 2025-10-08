import styles from "./Donations.module.css"
import { useState } from "react"

export default function DonationsPage() {
    const [copied, setCopied] = useState(false)
    const account = "60890300029001001888960001"

    async function copyIban() {
        try {
            await navigator.clipboard.writeText(account)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch { }
    }

    return (
        <section className={`sec-pad-top sec-pad-bottom ${styles.wrap}`}>
            <div className="container">
                <h1 className={styles.title}>
                    Przekaż darowiznę dla Stowarzyszenia<br />
                    <span>„Aktywni na rzecz Bezpiecznego Wypoczynku”</span>
                </h1>

                <div className={styles.box}>
                    <div className={styles.colLeft}>
                        <p className={styles.lead}>
                            <strong>Dane do przelewu</strong> darowizny:
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <strong>Nazwa odbiorcy:</strong>
                                <span> Stowarzyszenie „Aktywni na Rzecz Bezpiecznego Wypoczynku”</span>
                            </li>
                            <li>
                                <strong>Adres odbiorcy:</strong>
                                <span> Gana 64, 46-320 Praszka</span>
                            </li>
                            <li className={styles.accountRow}>
                                <strong>Numer konta:</strong>
                                <span className={styles.account}>{account}</span>
                                <button type="button" className={`thm-btn thm-btn--two ${styles.copyBtn}`} onClick={copyIban}>
                                    <span>{copied ? "Skopiowano!" : "Kopiuj numer"}</span>
                                </button>
                            </li>
                            <li>
                                <strong>Tytuł przelewu:</strong>
                                <span> DAROWIZNA na cele statutowe</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.colRight}>
                        <img
                            src="/assets/images/backgrounds/darowizny.png"
                            alt="Przekaż darowiznę na rzecz bezpiecznego wypoczynku"
                            className={styles.photo}
                        />
                    </div>
                </div>

                <div className={styles.thanks}>
                    <h2>Za wszystkie darowizny finansowe bardzo serdecznie dziękujemy!</h2>
                </div>
            </div>
        </section>
    )
}
