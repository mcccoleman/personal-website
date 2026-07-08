import { FC, PropsWithChildren } from "react";
import styles from "./ExternalLink.module.css";

interface ExternalLinkProps extends PropsWithChildren {
  destination: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ destination, children }) => (
  <a className={styles.link} href={destination}>
    {children}
  </a>
);
