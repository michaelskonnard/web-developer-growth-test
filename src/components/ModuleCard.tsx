import styles from "./moduleCard.module.scss";
import {Button} from "@/types";
import React from "react";
import Image from "next/image";

type ModuleCardProps = {
  title: string;
  description: string;
  button: Button;
  className?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = (props) => {
  return (
    <div className={`${styles.moduleCardWrapper} ${props.className}`}>
      <div className={styles.heading}>
        <div className={styles.title}>
          {props.title}
        </div>
        <div className={styles.description}>
          {props.description}
        </div>
      </div>
      <div className={styles.linkContainer}>
        <a className={styles.link} href={props.button.url}>
          <div>{props.button.text}</div>
          <Image src={"/images/ic-arrow-up.svg"} alt={"icon arrow up"} height={24} width={24}/>
        </a>
      </div>
    </div>
  )
};

export default ModuleCard;