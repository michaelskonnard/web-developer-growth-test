import React from "react";
import {ContentCard} from "@/types";
import Image from "next/image";

import styles from "./card.module.scss";

const Card: React.FC<ContentCard> = (props) => {

  return (
    <div className={styles.cardWrapper}>
      <Image src={`/images/${props.icon}.svg`} alt={"Card icon"} width={24} height={24} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  )
}

export default Card;