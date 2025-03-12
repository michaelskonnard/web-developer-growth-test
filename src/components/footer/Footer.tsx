import StandardWhitespace from "@/components/StandardWhitespace";
import React from "react";
import LanguageDropdown from "@/components/footer/LanguageDropdown";
import Image from "next/image";
import SocialLinks from "@/components/footer/SocialLinks";
import {FooterMenu, Socials} from "@/types";

import styles from "./footer.module.scss";

type FooterProps = {
  helpText: string;
  socials: Socials;
  footerMenu: FooterMenu[];
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({helpText, socials, footerMenu, copyright}) => {
  return (
    <StandardWhitespace>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.leftFooter}>
            <div className={styles.footerTitle}>
              <Image src={"/images/logo.svg"} alt={"logo"} width={157} height={32}/>
              <div className={styles.helpText}>{helpText}</div>
            </div>
            <LanguageDropdown/>
            <SocialLinks socials={socials}/>
          </div>
          <div className={styles.rightFooter}>
            {footerMenu.map((menuColumn)=> (
              <div className={styles.columnContainer} key={menuColumn.id}>
                <div className={styles.columnHeader}>{menuColumn.title}</div>
                <ul className={styles.dropdownContainer}>
                  {menuColumn.dropdown.map((dropdownItem) => {
                    const attributes = {
                      "target": dropdownItem.openNewWindow ? "_blank" : "_self",
                      "rel": dropdownItem.openNewWindow ? "noopener noreferrer" : ""
                    };

                    return (
                      <li key={dropdownItem.id} className={styles.dropdownItem}>
                        {dropdownItem.link ? <a className={styles.link} {...attributes} href={dropdownItem.link}>{dropdownItem.title}</a> : <p>{dropdownItem.title}</p>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.copyrightSection}>
          <div className={styles.helpText}>{copyright}</div>
          <div className={styles.systemStatusContainer}>
            <div className={styles.systemStatusTypography}>Status</div>
            <Image src={"/images/green-dot.svg"} alt={"status dot"} height={6} width={6}/>
            <div className={`${styles.systemStatusTypography} ${styles.greenText}`}>All systems are normal</div>
          </div>
        </div>
      </footer>
    </StandardWhitespace>
  );
}

export default Footer;