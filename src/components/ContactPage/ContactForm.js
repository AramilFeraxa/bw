import styles from "./ContactForm.module.css"
import { useState } from "react"

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)
    const [msg, setMsg] = useState("")

    async function onSubmit(e) {
        e.preventDefault()
        if (loading) return
        setLoading(true)
        setStatus(null)
        setMsg("")
        const form = e.currentTarget
        const name = form.name.value.trim()
        const email = form.email.value.trim()
        const message = form.message.value.trim()
        if (!name || !email || !message) {
            setStatus(false)
            setMsg("Wypełnij wszystkie pola.")
            setLoading(false)
            return
        }
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        }).then(r => r.json()).catch(() => ({ ok: false }))
        if (res.ok) {
            setStatus(true)
            setMsg("Dziękujemy, wiadomość została wysłana.")
            form.reset()
        } else {
            setStatus(false)
            setMsg("Wystąpił błąd. Spróbuj ponownie.")
        }
        setLoading(false)
    }

    return (
        <section className={`${styles.contact} sec-pad-top sec-pad-bottom`}>
            <div className="container">
                <div className="row gutter-y-60">
                    <div className="col-lg-4">
                        <div className="sec-title">
                            <p className="sec-title__tagline">Napisz do nas</p>
                            <h2 className="sec-title__title">Z przyjemnością pomożemy</h2>
                        </div>
                        <p className={styles.lead}>
                            Wysyłasz dziecko na kolonie? Jedziesz na zorganizowane wakacje, a może wszystko planujesz samodzielnie?
                            Dla nas to nie problem. Chętnie odpowiemy na Twoje pytania.
                        </p>
                    </div>
                    <div className="col-lg-8">
                        <form className={styles.form} onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Twoje imię" name="name" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email" name="email" required />
                                </div>
                                <div className="col-md-12">
                                    <textarea name="message" placeholder="Napisz wiadomość" required />
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className={`thm-btn ${styles.btn}`} disabled={loading}>
                                        <span>{loading ? "Wysyłanie..." : "Wyślij wiadomość"}</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {status === true && <p className={styles.success}>{msg}</p>}
                        {status === false && <p className={styles.error}>{msg}</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}
