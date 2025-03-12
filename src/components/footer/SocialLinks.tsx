import React from "react";
import {Socials} from "@/types";
import Image from "next/image";

import styles from "./socialLinks.module.scss";

type SocialsProps = {
  socials: Socials
}

const SocialLinks: React.FC<SocialsProps> = ({socials}) => {
  return (
    <div className={styles.socialLinksWrapper}>
      <a href={socials.facebook}>
        <Image src={"/images/facebook.svg"} alt={"facebook logo"} width={24} height={24}/>
      </a>
      <a href={socials.instagram}>
        <Image src={"/images/instagram.svg"} alt={"instagram logo"} width={24} height={24}/>
      </a>
      <a href={socials.twitter}>
        <Image src={"/images/twitter.svg"} alt={"twitter logo"} width={24} height={24}/>
      </a>
      <a href={socials.youTube}>
        <Image src={"/images/youtube.svg"} alt={"youtube logo"} width={24} height={24}/>
      </a>
      <a href={socials.tikTok}>
        <Image src={"/images/tiktok.svg"} alt={"tiktok logo"} width={24} height={24}/>
      </a>
      <a href={socials.linkedIn}>
        <Image src={"/images/linkedin.svg"} alt={"linkedin logo"} width={24} height={24}/>
      </a>
    </div>
  )
};

export default SocialLinks;