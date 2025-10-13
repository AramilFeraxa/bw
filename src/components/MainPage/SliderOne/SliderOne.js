import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import styles from './SliderOne.module.css'
import { slides as source } from '../../../data/slides'

export default function SliderOne({ items }) {
    const data = useMemo(() => items || source, [items])
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        if (!data.length) return
        const id = setInterval(() => setIdx(i => (i + 1) % data.length), 6000)
        return () => clearInterval(id)
    }, [data.length])

    const prev = () => setIdx(i => (i - 1 + data.length) % data.length)
    const next = () => setIdx(i => (i + 1) % data.length)

    const current = data[idx]

    return (
        <section className={styles.sliderOne}>
            <div className={styles.item}>
                <div className={styles.images} aria-hidden>
                    {data.map((s, i) => (
                        <div
                            key={s.id || i}
                            className={
                                i === idx
                                    ? `${styles.slideImage} ${styles.slideImageActive}`
                                    : styles.slideImage
                            }
                            style={{ backgroundImage: `url(${s.image})` }}
                        />
                    ))}
                </div>

                <div className={styles.scrim} />
                <div className={styles.content}>
                    <h1 className={styles.title}>{current.title}</h1>
                    {current.text ? <p className={styles.text}>{current.text}</p> : null}
                    <div className={styles.btns}>
                        {(current.ctas || []).map(cta => (
                            <Link key={cta.href} href={cta.href} className="thm-btn">
                                <span>{cta.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <button className={styles.navPrev} onClick={prev} aria-label="Poprzedni">‹</button>
                <button className={styles.navNext} onClick={next} aria-label="Następny">›</button>
            </div>

            <div className={styles.dots}>
                {data.map((s, i) => (
                    <button
                        key={s.id || i}
                        className={i === idx ? styles.dotActive : styles.dot}
                        onClick={() => setIdx(i)}
                        aria-label={`Slajd ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
