import { useState } from 'react'
import Header from './Header'
import MobileNav from './MobileNav'
import ScrollToTop from './ScrollToTop'
import Footer from './Footer'
import styles from './Layout.module.css'
import Head from 'next/head'

const Layout = ({ title, description, keywords, children }) => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div className={styles.pageWrapper} suppressHydrationWarning>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title || "Stowarzyszenie „Aktywni na Rzecz Bezpiecznego Wypoczynku”"}</title>
                <meta name="description" content={description || "Zadbaj o bezpieczny wypoczynek swojego dziecka z naszym stowarzyszeniem. Konferencje,, wsparcie i informacje na temat bezpiecznych kolonii i obozów."} />
                {keywords && <meta name="keywords" content={keywords} />}
            </Head>
            <Header onOpenMobile={() => setNavOpen(true)} />
            <MobileNav isOpen={navOpen} onClose={() => setNavOpen(false)} />
            <main className={styles.main}>{children}</main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Layout