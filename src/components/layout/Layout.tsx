import { FC, PropsWithChildren } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import styles from "./Layout.module.css";

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Navigation />
    {children}
    <Footer />
  </div>
);
