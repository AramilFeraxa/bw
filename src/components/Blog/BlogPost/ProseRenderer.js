import styles from "./ProseRenderer.module.css";
import KeyPoints from "./KeyPoints";
import SummaryHighlight from "./SummaryHighlight";

function Paragraph({ text }) {
    return <p className={styles.paragraph}>{text}</p>;
}

function PlainList({ items = [], ordered = false }) {
    const Tag = ordered ? "ol" : "ul";
    return (
        <Tag className={styles.list}>
            {items.map((t, i) => <li key={i}>{t}</li>)}
        </Tag>
    );
}

export default function ProseRenderer({ sections = [] }) {
    return (
        <div className={styles.prose}>
            {sections.map((sec) => (
                <section key={sec.id} id={sec.id} className={styles.sectionBlock}>
                    {sec.title && <span className={styles.semiTitle}>{sec.title}</span>}

                    {sec.blocks?.map((b, i) => {
                        if (b.type === "paragraph") return <Paragraph key={i} text={b.text} />;
                        if (b.type === "list") return <PlainList key={i} items={b.items} ordered={b.ordered} />;
                        if (b.type === "richlist")
                            return <KeyPoints key={i} heading={b.heading} variant={b.variant || "checks"} items={b.items} />;
                        if (b.type === "summary")
                            return <SummaryHighlight key={i} title={b.title} bullets={b.bullets || []} note={b.note} />;
                        return null;
                    })}
                </section>
            ))}
        </div>
    );
}
