import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/components";
import "@/global-styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Coleman",
  description: "Full Stack Engineer, MBA, and CFP based in Portland, ME.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
