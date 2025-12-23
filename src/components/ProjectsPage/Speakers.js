import styles from "./Speakers.module.css";

export default function Speakers({ speakers = [] }) {
  if (!speakers || speakers.length === 0) return null;

  const hasImage = (s) => Boolean(s.img || s.image);
  const featured = speakers.filter(hasImage);
  const others = speakers.filter((s) => !hasImage(s));

  return (
    <div className={styles.speakersSection}>
      <h3 className={styles.title}>Prelegenci</h3>

      {featured.length > 0 && (
        <div className={styles.specialWrapper}>
          {featured.map((s, i) => (
            <div key={i} className={styles.specialSpeaker}>
              <div className={styles.specialImage}>
                <img src={s.img || s.image} alt={s.name} />
              </div>

              <div className={styles.specialInfo}>
                <h4 className={styles.speakerName}>{s.name}</h4>
                {s.title && <div className={styles.speakerTitle}>{s.title}</div>}
                {s.description && <p className={styles.speakerDesc}>{s.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {others.length > 0 && (
        <ul className={styles.speakersList}>
          {others.map((s, i) => (
            <li key={i} className={styles.speakersListItem}>
              <div className={styles.listMeta}>
                <strong className={styles.listName}>{s.name}</strong>
                {s.title && <span className={styles.listTitle}>{s.title}</span>}
              </div>
              {s.description && <p className={styles.listDesc}>{s.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
