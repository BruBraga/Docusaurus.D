import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from "./styles.module.css";

export default function Figura({ src, alt, legenda }) {
  return (
    <figure className={styles.figure}>
      <img
        src={useBaseUrl(src)}
        alt={alt}
        className={styles.image}
      />

      {legenda && (
        <figcaption className={styles.caption}>
          {legenda}
        </figcaption>
      )}
    </figure>
  );
}