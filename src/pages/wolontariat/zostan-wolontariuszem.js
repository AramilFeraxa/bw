import Layout from "@/components/Layout/Layout"
import styles from "@/components/ContactPage/ContactForm.module.css"
import ProseRenderer from "@/components/Blog/BlogPost/ProseRenderer"
import sumStyles from "@/components/Blog/BlogPost/SummaryHighlight.module.css"
import { useRef, useState } from "react"

const sections = [
    {
        id: "intro",
        blocks: [
            {
                type: "paragraph",
                text: `Chcesz mieć realny wpływ na bezpieczeństwo dzieci i młodzieży? Pasjonujesz się edukacją, turystyką lub działaniami społecznymi? Zostań wolontariuszem Stowarzyszenia „Aktywni na Rzecz Bezpiecznego Wypoczynku”!\nNasze Stowarzyszenie to grupa profesjonalistów i pasjonatów, którzy od lat zmieniają standardy organizacji czasu wolnego w Polsce. Wierzymy, że bezpieczny wypoczynek to nie tylko przepisy, ale przede wszystkim ludzie, którzy wiedzą, jak je stosować w praktyce.`
            }
        ]
    },
    {
        id: "kogo",
        title: "Kogo szukamy?",
        blocks: [
            {
                type: "list",
                items: [
                    "wszystkich, którzy chcą zdobyć pierwsze doświadczenie w organizacji projektów, mediach społecznościowych i pracy z grupą.",
                    "nauczycieli, wychowawców i edukatorów, którzy chcą dzielić się swoją wiedzą ekspercką.",
                    "Kreatywnych ludzi, którzy mają pomysły na nowe formy edukacji o bezpieczeństwie",
                    "Nie musisz być ekspertem – najważniejsza jest dla nas Twoja chęć do działania i wspólne wartości."
                ]
            }
        ]
    },
    {
        id: "co-bedziesz",
        title: "Co będziesz robić jako wolontariusz?",
        blocks: [
            {
                type: "paragraph",
                text: `Twoje zadania dopasujemy do Twoich mocnych stron i wolnego czasu. Możesz zaangażować się w:`
            },
            {
                type: "richlist",
                variant: "checks",
                items: [
                    { title: "Edukację i profilaktykę", text: "prowadzenie warsztatów dla dzieci i młodzieży oraz prelekcji o zasadach bezpiecznego zachowania nad wodą, w górach czy na obozach." },
                    { title: "Tworzenie nowoczesnych treści", text: "realizację wideo, tworzenie infografik i prowadzenie naszych mediów społecznościowych." },
                    { title: "Wsparcie organizacyjne", text: "pomoc przy przygotowywaniu wyjazdów edukacyjnych oraz wydarzeń promujących turystykę i krajoznawstwo." },
                    { title: "Inicjatywy własne (minigranty)", text: "realizację autorskich pomysłów dzięki programowi finansowania projektów wolontariackich." }
                ]
            }
        ]
    },
    {
        id: "co-oferujemy",
        title: "Co oferujemy w zamian?",
        blocks: [
            {
                type: "richlist",
                variant: "checks",
                items: [
                    { title: "Realny rozwój", text: "Dostęp do certyfikowanych szkoleń (prawo w wypoczynku, komunikacja, praca z grupą, zarządzanie projektami)." },
                    { title: "Wsparcie Koordynatora", text: "Stałą opiekę Pauliny, naszej koordynatorki, która pomoże Ci wdrożyć się w zadania i zaplanować Twoją ścieżkę rozwoju." },
                    { title: "Wyjazdy i integrację", text: "udział w wizytach studyjnych oraz wyjazdach integracyjnych" },
                    { title: "Twoje bezpieczeństwo i przyszłość", text: "porozumienie wolontariackie oraz zaświadczenia i referencje przydatne na rynku pracy." },
                    { title: "Gadżety projektowe", text: "nasze koszulki, notesy, parasole i inne fajne rzeczy 😊" }
                ]
            }
        ]
    },
]

export default function ZostanWolontariuszem() {
    const formRef = useRef(null)
    const [statusMessage, setStatusMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        setStatusMessage("")
        const fd = new FormData(formRef.current)

        const Name = (fd.get("name") || "").toString().trim()
        const Surname = (fd.get("surname") || "").toString().trim()
        const Phone = (fd.get("phone") || "").toString().trim()
        const Email = (fd.get("email") || "").toString().trim()
        const City = (fd.get("city") || "").toString().trim()
        const ShortInfo = (fd.get("message") || "").toString().trim()
        const DataProcessingConsent = fd.get("consent") ? true : false

        const body = { Name, Surname, Phone, Email, City, ShortInfo, DataProcessingConsent }

        try {
            const res = await fetch("https://hyapi.azurewebsites.net/api/SafeHolliday/Application", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            if (res.ok) {
                setStatusMessage("Dziękujemy — zgłoszenie wysłane.")
                formRef.current.reset()
            } else {
                const txt = await res.text()
                setStatusMessage("Błąd wysyłki: " + (txt || res.statusText))
            }
        } catch (err) {
            setStatusMessage("Błąd sieci: " + (err.message || err))
        }
    }

    return (
        <Layout title="Zostań wolontariuszem – Dołącz do zespół!" description="Chcesz dbać o bezpieczny wypoczynek dzieci? Dołącz do nas! Oferujemy szkolenia, minigranty i wsparcie koordynatora. Wypełnij krótki formularz.">
            <section className="page-header" style={{ backgroundImage: "url(/assets/images/backgrounds/wolontariat.jpg)" }}>
                <div className="container">
                    <h2 className="page-header__title">Zostań wolontariuszem</h2>
                </div>
            </section>

            <section className="sec-pad-top sec-pad-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sec-title text-center">
                                <p className="sec-title__tagline">Dołącz do zespołu „Aktywnych”</p>
                                <h2 className="sec-title__title">Zostań wolontariuszem</h2>
                            </div>

                            <ProseRenderer sections={sections} />

                            <aside className={sumStyles.sumWrap} style={{ marginTop: 24, marginBottom: 24 }}>
                                <div className={sumStyles.sumBadge} aria-hidden>✔</div>
                                <h4 className={sumStyles.sumTitle}>Jak do nas dołączyć?</h4>
                                <p>Rekrutację prowadzimy w sposób ciągły! Niezależnie od tego, czy chcesz pomagać raz w tygodniu, czy zaangażować się w konkretną akcję – czekamy na Ciebie.</p>

                                <ul className={sumStyles.sumList}>
                                    <li className={sumStyles.sumItem}><strong>Wypełnij krótki formularz — <a href="#vol-form" className="thm-btn thm-btn--two"><span>KLIK</span></a></strong></li>
                                    <li className={sumStyles.sumItem}><strong>Porozmawiajmy:</strong> Zaprosimy Cię na spotkanie informacyjne w naszym biurze w Praszce lub online.</li>
                                    <li className={sumStyles.sumItem}><strong>Działajmy razem:</strong> Podpiszemy porozumienie i wspólnie wybierzemy Twoje pierwsze zadanie.</li>
                                    <li className={sumStyles.sumItem}><strong>Kontakt:</strong> Masz pytania? Skontaktuj się bezpośrednio z naszą koordynatorką wolontariatu Pauliną.</li>
                                </ul>

                                <p className={sumStyles.sumNote}>Buduj z nami bezpieczną przyszłość wypoczynku!</p>
                            </aside>

                            <form id="vol-form" className={styles.form} onSubmit={handleSubmit} ref={formRef} noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="Imię" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="surname" placeholder="Nazwisko" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="phone" placeholder="Numer telefonu" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="email" placeholder="Adres e-mail" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="city" placeholder="Miejscowość" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="message" placeholder="Krótko o Tobie (czym się zajmujesz, dlaczego my?)" rows="6"></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <label style={{ display: 'block', marginTop: '10px' }}>
                                            <input type="checkbox" name="consent" required /> Wyrażam zgodę na przetwarzanie moich danych osobowych przez Stowarzyszenie „Aktywni na Rzecz Bezpiecznego Wypoczynku” w celu przeprowadzenia procesu rekrutacji na wolontariat.
                                        </label>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className={`thm-btn ${styles.btn}`}><span>Wyślij zgłoszenie</span></button>
                                        {statusMessage && <p style={{ marginTop: 12 }}>{statusMessage}</p>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/projects/aktywny-wolontariat-dla-bezpiecznego-wypoczynku/KS_zestawienie_2_KOLOR.png" alt="Logo projektu Aktywny wolontariat dla Bezpiecznego Wypoczynku" style={{ display: 'block', margin: '24px auto 0', maxWidth: '1000px' }} />
            </section>
        </Layout>
    )
}
