import Image from "next/image";
import React from "react";
import Link from "next/link";

import styles from "./ghostButton.module.scss";

type GhostButtonProps = {
  text: string;
  url: string;
}

const GhostButton: React.FC<GhostButtonProps> = ({text, url}) => {
  return (
    <Link href={url} className={styles.link}>
      <button className={styles.ghostButton}>
        <div>{text}</div>
        <Image src={"/images/ic-arrow-right.svg"} alt={"arrow right"} width={24} height={24}/>
      </button>
    </Link>

  )
}

export default GhostButton