"use client"

import React, {useEffect, useState} from "react";
import {languages} from "@/data/languages"; // Import SCSS styles
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import styles from "./languageDropdown.module.scss";

const Dropdown = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const languageCode = pathname.split("/")[1];
    if (languageCode === "") return;
    setSelected(languages[languageCode]);
  }, [pathname]);

  const changeLanguage = (newLanguage: string) => {
    if (pathname === "/") {
      router.push(`${newLanguage}/home`)
      return;
    }
    const pathSegments = pathname.split("/");
    pathSegments[1] = newLanguage;
    router.push(pathSegments.join("/"));
  }

  return (
    <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.selected}>
        {selected}
        <Image src={"/images/stroke.svg"} alt={"stroke icon"} width={12} height={6}/>
      </div>

      {isOpen && (
        <ul className={styles.menu}>
          {Object.entries(languages).map(([code, label]) => (
            <li
              key={code}
              className={styles.option}
              onClick={() => {
                changeLanguage(code);
                setSelected(label);
                setIsOpen(false);
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;