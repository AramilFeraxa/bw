import Layout from "@/components/Layout/Layout"
import styles from "./dziennik-wolontariusza.module.css"

const entries = [
    {
        date: "16 października 2025",
        icon: "fa-users",
        title: "Pierwsze spotkanie o wolontariacie systematycznym",
        body: `W ramach rozpoczęcia wspólnych działań odbyło się pierwsze spotkanie online, które w całości poświęciliśmy omówieniu zasad wolontariatu systematycznego w naszym Stowarzyszeniu. Podczas rozmów przybliżyliśmy uczestnikom misję „Aktywnych” oraz wyjaśniliśmy, jak istotna jest ich rola w promowaniu wysokich standardów bezpieczeństwa podczas wypoczynku dzieci i młodzieży. Wolontariusze dowiedzieli się, na jakie wsparcie mogą liczyć w naszej organizacji, poznając zadania koordynatora oraz zasady korzystania z Systemu Obsługi Wolontariatu (SOW), który ułatwia codzienną współpracę i dokumentowanie zaangażowania. Sporo czasu poświęciliśmy na przedstawienie korzyści z długofalowej współpracy, takich jak pakiety powitalne z gadżetami, system minigrantów na autorskie pomysły oraz udział w wyjątkowej Gali Wolontariusza. Spotkanie było również okazją do rozmowy o certyfikowanych szkoleniach i wyjazdach integracyjnych, które pomagają nam budować profesjonalną i zgraną drużynę. Dzięki formule online mogliśmy połączyć się z osobami z całego kraju, wspólnie planując pierwsze kroki w drodze do poprawy jakości wypoczynku w Polsce.`
    },
    {
        date: "22 grudnia 2025",
        icon: "fa-graduation-cap",
        title: "Szkolenie „Od dokumentacji do praktyki – szkolenie z bezpiecznego prowadzenia wyjazdów”",
        body: `Wolontariusze wzięli udział w szkoleniu, które stanowiło kluczowy element przygotowania do bezpiecznego prowadzenia wyjazdów. Całe spotkanie zostało zaprojektowane tak, aby płynnie połączyć niezbędną teorię z realnymi działaniami, jakie czekają nas w terenie. Uczestnicy poświęcili dużo czasu na rzetelną analizę kart kwalifikacyjnych, ucząc się właściwej interpretacji zapisów dotyczących zdrowia, specjalistycznych diet oraz indywidualnych potrzeb psychofizycznych dzieci. Najwięcej emocji wzbudziła część warsztatowa poświęcona reagowaniu w sytuacjach trudnych, takich jak choroba, wypadek czy zgubienie się uczestnika. Dzięki tym ćwiczeniom wolontariusze poznali jasne algorytmy komunikacji i dokumentowania zdarzeń, co bezpośrednio przekłada się na ich pewność w pełnieniu powierzonych ról. Szkolenie zakończyło się ujednoliceniem standardów pracy całego zespołu oraz wręczeniem imiennych certyfikatów potwierdzających nabyte kompetencje.`
    },
    {
        date: "23 grudnia 2025",
        icon: "fa-comments",
        title: "Szkolenia „Komunikacja oparta na potrzebach – empatia i asertywność w pracy wolontariackiej”",
        body: `Wolontariusze wzięli udział w warsztacie, który w całości poświęcony był komunikacji opartej na potrzebach, empatii oraz asertywności. Głównym założeniem tych zajęć była profesjonalizacja kontaktów wolontariuszy z młodzieżą oraz budowanie trwałych relacji z naszymi partnerami biznesowymi. Podczas warsztatów uczestnicy rozwijali umiejętność prowadzenia obiektywnego dialogu, ucząc się jak skutecznie deeskalować napięcie i rozpoznawać potrzeby rozmówców nawet w sytuacjach stresowych. Program szkolenia kładł duży nacisk na naukę zarządzania własnymi reakcjami obronnymi oraz na budowanie postawy asertywnej, która pozwala na stanowcze, a jednocześnie pełne szacunku reprezentowanie celów Stowarzyszenia. Całość opierała się na analizie realnych scenariuszy, z jakimi wolontariusze spotykają się w codziennej pracy, co nadało zajęciom bardzo praktyczny wymiar. Dzięki temu spotkaniu nasz zespół zyskał narzędzia do budowania bezpiecznej i profesjonalnej atmosfery podczas każdego projektu. Każdy uczestnik opuścił szkolenie z kompletem materiałów edukacyjnych oraz certyfikatem potwierdzającym udział w zajęciach.`
    },
    {
        date: "19 oraz 29-30 grudnia 2025",
        icon: "fa-landmark",
        title: "Wizyta studyjna: grudniowa lekcja w Zamku Moszna",
        body: `W grudniu nasi wolontariusze oraz koordynatorka wzięli udział w dwuetapowej wizycie studyjnej u naszych partnerów ze Stowarzyszenia „Sukces po opolsku”. To był czas intensywnej nauki, wymiany doświadczeń i weryfikacji naszych założeń w otoczeniu jednej z najprężniej działających organizacji w regionie, która od lat realizuje projekty społeczne i edukacyjne, współpracując z lokalną społecznością oraz Zamkiem Moszna.
Podczas wizyty poznaliśmy strukturę Stowarzyszenia, sposób koordynowania ról i pracy zespołu przy realizacji dużych projektów. Obserwowaliśmy, jak przebiega prowadzenie pełnej dokumentacji projektowej: od wniosków o dofinansowanie, przez harmonogramy, aż po rozliczenia projektów finansowanych ze środków Samorządu Województwa Opolskiego. Zwrócono uwagę na znaczenie komunikacji z partnerami lokalnymi oraz budowania relacji opartych na zaufaniu, które pozwalają skutecznie promować działania społeczne.
W trakcie drugiego dnia wizyty analizowaliśmy konkretne projekty Stowarzyszenia, takie jak „Gastro Zamek”, „Wieże Osobliwości” czy „Poznaję swój region”. Podczas spaceru studyjnego po Zamku Moszna mogliśmy obserwować w praktyce rozwiązania logistyczne i organizacyjne, które zapewniają bezpieczny pobyt grup dzieci i młodzieży w obiekcie zabytkowym. Wspólna wymiana doświadczeń pozwoliła nam porównać nasze standardy pracy z wieloletnim doświadczeniem kadry Stowarzyszenia, co okazało się niezwykle cenną lekcją.
Zwieńczeniem wizyty było podpisanie porozumienia partnerskiego między naszymi stowarzyszeniami, co stanowi ważny krok w kierunku rozszerzenia naszej działalności lokalnej w województwie opolskim. Wróciliśmy z nową wiedzą, inspiracją i energią, gotowi do wdrażania sprawdzonych modeli pracy w naszym projekcie oraz do dalszego budowania bezpiecznego i atrakcyjnego wypoczynku dla dzieci i młodzieży.`
    }
]

export default function DziennikWolontariusza() {
    return (
        <Layout title="Dziennik wolontariusza – relacje, szkolenia i wydarzenia" description="Śledź kulisy naszej pracy! Zobacz relacje ze szkoleń, wizyt studyjnych i spotkań online. Sprawdź, jak budujemy profesjonalny zespół wolontariuszy.">
            <section className="page-header" style={{ backgroundImage: "url(/assets/images/backgrounds/dziennik.jpg)" }}>
                <div className="container">
                    <h2 className="page-header__title">Dziennik wolontariusza</h2>
                </div>
            </section>

            <section className="sec-pad-top sec-pad-bottom">
                <div className="container">
                    <h2 className="sec-title__title" style={{ marginBottom: 32 }}>Dziennik wolontariusza</h2>
                    <p>Witaj w Dzienniku wolontariusza Stowarzyszenia „Aktywni na Rzecz Bezpiecznego Wypoczynku”! To wyjątkowa przestrzeń, w której dokumentujemy rozwój naszego zespołu oraz kulisy realizacji projektu „Aktywny wolontariat dla Bezpiecznego Wypoczynku!”. Nasz dziennik to nie tylko zapis minionych wydarzeń, ale przede wszystkim świadectwo pasji i zaangażowania ludzi, którzy każdego dnia budują nową jakość bezpieczeństwa w polskiej turystyce dziecięcej.
                    </p>
                    <p>Zapraszamy do lektury naszych wpisów o tym, jak krok po kroku tworzymy zgraną i profesjonalną drużynę gotową na każde wyzwanie.</p>
                    <div className={styles.timeline}>
                        {entries.map((e, i) => (
                            <article className={styles.entry} key={i}>
                                <span className={styles.bullet} aria-hidden />
                                <div className={styles.entryBody}>
                                    {e.date && <div className={styles.entryDate}>{e.date}</div>}
                                    <h3 className={styles.entryTitle}>{e.title}</h3>
                                    {e.body.split('\n').map((p, idx) => (
                                        <p key={idx} className={styles.entryText}>{p.trim()}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                <img src="/assets/images/projects/aktywny-wolontariat-dla-bezpiecznego-wypoczynku/KS_zestawienie_2_KOLOR.png" alt="Logo projektu Aktywny wolontariat dla Bezpiecznego Wypoczynku" style={{ display: 'block', margin: '24px auto 0', maxWidth: '1000px' }} />
            </section>
        </Layout>
    )
}
