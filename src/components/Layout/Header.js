import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";
import styles from "./Header.module.css";
import { headerNav } from "@/data/nav";
import Link from "next/link";

export default function Header() {
    const { pathname } = useRouter();
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setIsSticky(window.scrollY > 100);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!isMobileOpen) toggleBtnRef.current?.focus?.();
    }, [isMobileOpen]);

    const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    const NavList = () => (
        <ul className={styles.menuList}>
            {headerNav.map((item) => (
                <li
                    key={item.href || item.label}
                    className={`${item.children ? styles.hasChildren : ''} ${isActive(item.href) ||
                        (item.children?.some(child => isActive(child.href))) ?
                        styles.current : ''
                        }`}
                >
                    {item.children ? (
                        <>
                            <Link href="#" onClick={(e) => e.preventDefault()}>{item.label}</Link>
                            <ul>
                                {item.children.map((child) => (
                                    <li key={child.href}>
                                        <Link
                                            className={isActive(child.href) ? styles.current : ""}
                                            href={child.href}
                                        >
                                            {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Link href={item.href}>{item.label}</Link>
                    )}
                </li>
            ))}
        </ul>
    );

    const NavRight = () => (
        <div className={`${styles.right} d-none d-lg-flex gap-3 align-items-center`}>
            <div className={styles.cta}>
                <div className={styles.ctaIcon}><i className="paroti-icon-volunteer" /></div>
                <div className={styles.ctaText}>
                    <span>Dołącz do nas</span>
                    <Link href="/kontakt">Zostań wolontariuszem</Link>
                </div>
            </div>
            <Link href="/darowizny" className="thm-btn thm-btn--two">
                <span>Wesprzyj nas</span>
                <i className="fa fa-heart" />
            </Link>
        </div>
    );

    const Hamburger = () => (
        <button
            ref={toggleBtnRef}
            className="mobile-toggle d-lg-none"
            aria-label="Otwórz menu"
            aria-controls="mobile-nav-panel"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(true)}
        >
            <i className="fa fa-bars" aria-hidden="true" />
        </button>
    );

    const NavInner = () => (
        <div className="container-fluid d-flex align-items-center justify-content-between">
            <Link href="/" className={styles.logo} aria-label="logo">
                <img src="/assets/images/logo-dark.png" width="180" height="40" alt="Logo stowarzyszenia" />
            </Link>
            <div className="d-none d-lg-block"><NavList /></div>
            <NavRight />
            <Hamburger />
        </div>
    );

    return (
        <header className={styles.header}>
            <nav className={`${styles.main} ${styles.sticky}`}>
                <NavInner />
            </nav>
            <nav className={`${styles.main} ${styles.sticky} ${styles.cloned} ${isSticky ? styles.fixed : ""}`}>
                <NavInner />
            </nav>
            <MobileNav open={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
        </header>
    );
}
