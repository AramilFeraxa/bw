import Layout from "@/components/Layout/Layout"
import ContactHeader from "@/components/ContactPage/ContactHeader"
import ContactInfo from "@/components/ContactPage/ContactInfo"
import ContactForm from "@/components/ContactPage/ContactForm"

export default function KontaktPage() {
    return (
        <Layout title="Kontakt ze Stowarzyszeniem | bezpiecznywypoczynek.pl" description="Planujesz wysłać dzieci na kolonie i pojawiły się pytania o ich bezpieczeństwo? Skontaktuj się z Nami, powiemy na co zwrócić uwagę przy wyborze organizatora turystyki." keywords="stowarzyszenie, bezpieczny wypoczynek, kontakt, napisz do nas">
            <ContactHeader />
            <ContactInfo />
            <ContactForm />
        </Layout>
    )
}
