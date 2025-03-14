import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import React from "react";
import {Global} from "@/model/Global";
import getGlobalData from "@/utils/globalUtils";

import "@/styles/global.css";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Moises",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const globalData = new Global(await getGlobalData());
  const menu = globalData.menu.slice(0, -1);
  const loginButton = menu[menu.length - 1];

  return (
    <html lang="en">
      <body className={styles.body}>
          <Header menu={menu} loginButton={loginButton} />
          <main className={styles.main}>
              {children}
          </main>
          <Footer helpText={globalData.helpText} socials={globalData.social} footerMenu={globalData.footerMenu} copyright={globalData.copyright}/>
      </body>
    </html>
  );
}
