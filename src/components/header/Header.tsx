import MainMenu from "@/components/header/MainMenu";
import Image from "next/image";
import StandardWhitespace from "@/components/StandardWhitespace";
import React from "react";
import {Menu} from "@/types";

import styles from "./header.module.scss";

type HeaderProps = {
  menu: Menu[];
  loginButton: Menu;
}

const Header: React.FC<HeaderProps> = async ({menu, loginButton}) => {
  return (
    <StandardWhitespace>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image alt="Music AI Developer Portal Logo" src={"/images/logo.svg"} width={104} height={21} className={styles.logo} />
        </div>
        <nav className={styles.navLinks}>
          <MainMenu mainMenu={menu} />
        </nav>
        <button className={styles.loginButtonContainer}>
          <div className={styles.loginButton}>
            <strong>{loginButton.title}</strong>
            <Image alt={"Right arrow"} src={"/images/ic-arrow-right.svg"} width={24} height={24}/>
          </div>
        </button>
        <button className={styles.menuButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>
    </StandardWhitespace>
  );
}

export default Header;