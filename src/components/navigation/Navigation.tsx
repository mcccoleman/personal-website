import Link from "next/link";
import { PRIMARY_LINKS, EXTERNAL_LINKS } from "./utils";
import styles from "./Navigation.module.css";

export const Navigation = () => (
  <nav className={styles.nav}>
    <div className={styles.name}>
      {PRIMARY_LINKS.map(({ copy, link }) => (
        <Link key={copy} href={link}>
          {copy}
        </Link>
      ))}
    </div>
    <div className={styles.links}>
      {EXTERNAL_LINKS.map(({ copy, link }) =>
        link.startsWith("https") ? (
          <a
            key={copy}
            className={styles.link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy}
          </a>
        ) : (
          <a key={copy} className={styles.link} href={link} target="_blank">
            {copy}
          </a>
        )
      )}
    </div>
  </nav>
);
