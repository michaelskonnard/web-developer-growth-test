"use client";

import React, {ReactNode} from "react";
import {Menu} from "@/types";
import { usePathname } from "next/navigation";

type MainMenuProps = {
  mainMenu: Menu[];
}

import styles from "./mainMenu.module.scss";

const MainMenu: React.FC<MainMenuProps> = ({mainMenu}) => {
  const pathname = usePathname(); // Get current path

  return (
    <>
      {mainMenu.map((menuItem: Menu): ReactNode => {
        if (menuItem.title === "login") return null;
        return (
          <a className={menuItem.link === (pathname + "/") ? styles.activeNavItem : styles.inactiveNavItem} href={menuItem.link ?? "/#"} key={menuItem.id}>
            {menuItem.title}
          </a>
        );
      })}
    </>
  )
}

export default MainMenu;