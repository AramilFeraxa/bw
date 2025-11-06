import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./MobileNav.module.css";
import Link from "next/link";
import { headerNav } from "@/data/nav";

export default function MobileNav({ open = false, onClose = () => { } }) {
    const router = useRouter();

    useEffect(() => {
        const handleRoute = () => onClose();
        router.events.on("routeChangeStart", handleRoute);
        return () => router.events.off("routeChangeStart", handleRoute);
    }, [router.events, onClose]);

    return (
        <>
            <div
                className={`${styles.overlay} ${open ? styles.open : ""}`}
                onClick={onClose}
                aria-hidden={!open}
            />
            <aside
                id="mobile-nav-panel"
                className={`${styles.panel} ${open ? styles.open : ""}`}
                role="dialog"
                aria-modal="true"
                aria-hidden={!open}
                tabIndex={open ? 0 : -1}
            >
                <div className={styles.head}>
                    <Link href="/" className={styles.brand} onClick={onClose} aria-label="logo">
                        <img src="/assets/images/logo-light.png" width="127" height="49" alt="Logo" />
                    </Link>
                    <button className={styles.close} onClick={onClose} aria-label="Zamknij menu">
                        <i className="fa fa-times" aria-hidden="true" />
                    </button>
                </div>
                <nav className={styles.nav}>
                    <ul
                        className={styles.list}
                        onClick={(e) => { if (e.target && e.target.tagName === "A") onClose(); }}
                    >
                        {headerNav.map((item, index) => {
                            if (item.children) {
                                return (
                                    <li key={index}>
                                        <details>
                                            <summary>{item.label}</summary>
                                            <ul>
                                                {item.children.map((child, childIndex) => (
                                                    <li key={childIndex}>
                                                        <Link href={child.href}>{child.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    </li>
                                );
                            }

                            if (item.href === "/") {
                                return null;
                            }

                            return (
                                <li key={index}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className={styles.cta}>
                    <Link href="/darowizny" className="thm-btn thm-btn--two w-100">
                        <span>Wesprzyj nas</span> <i className="fa fa-heart" />
                    </Link>
                    <ul className={styles.contact}>
                        <li><i className="fa fa-phone" /> <Link href="tel:+48607271787">607-271-787</Link></li>
                        <li><i className="fa fa-envelope" /> <Link href="mailto:kontakt@bezpiecznywypoczynek.pl">kontakt@bezpiecznywypoczynek.pl</Link></li>
                    </ul>
                    <div className={styles.social}>
                        <Link href="#" aria-label="facebook"><i className="fab fa-facebook-f" /></Link>
                        <Link href="#" aria-label="instagram"><i className="fab fa-instagram" /></Link>
                    </div>
                </div>
            </aside>
        </>
    );
}
