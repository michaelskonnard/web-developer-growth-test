import React from "react";
import Link from "next/link";

import styles from "./solidButton.module.scss";

type SolidButtonProps = {
  text: string;
  url: string;
}

const SolidButton: React.FC<SolidButtonProps> = ({text, url}) => {
  return (
    <Link href={url} className={styles.link}>
      <button className={styles.solidButton}>
        {text}
      </button>
    </Link>
  )
}

export default SolidButton