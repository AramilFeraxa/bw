import { useEffect, useState } from 'react'
import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    return (
        <button
            aria-label="Przewiń do góry"
            onClick={onClick}
            className={styles.scrollToTop}
            style={{ display: visible ? 'inline-block' : 'none' }}
        >
            ↑
        </button>
    )
}

export default ScrollToTop