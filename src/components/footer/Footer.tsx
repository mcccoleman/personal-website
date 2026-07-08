import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.copy}>
      &copy; {new Date().getFullYear()} Michael Coleman
    </span>
  </footer>
);
