import { FC, PropsWithChildren } from "react";
import { Navigation } from "src/components/navigation";
import { Footer } from "src/components/footer";
import styles from "./Layout.module.css";

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Navigation />
    {children}
    <Footer />
  </div>
);
