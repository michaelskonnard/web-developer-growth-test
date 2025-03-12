import {CenteredCtaComponent} from "@/types";
import SolidButton from "@/components/buttons/SolidButton";
import React from "react";

import styles from "./centeredCta.module.scss";

const CenteredCta: React.FC<CenteredCtaComponent> = (props: CenteredCtaComponent) => {

  return (
    <div className={styles.centeredCtaWrapper}>
      <div className={styles.heading}>
        <div className={styles.title}>
          {props.title}
        </div>
        <div className={styles.description}>
          {props.description}
        </div>
      </div>
      {props.buttons.map((button) => (
        <div key={button.id}>
          <SolidButton text={button.text} url={button.url} />
        </div>
      ))}
    </div>
  )
}

export default CenteredCta;