import {HeroVideoComponent} from "@/types";
import MusicDemo from "@/components/MusicDemo";
import SolidButton from "@/components/buttons/SolidButton";
import GhostButton from "@/components/buttons/GhostButton";
import StandardWhitespace from "@/components/StandardWhitespace";
import React from "react";

import styles from "./hero.module.scss";

const Hero: React.FC<HeroVideoComponent> = (props: HeroVideoComponent) => {
  return (
    <StandardWhitespace>
      <div className={styles.heroWrapper}>
        <div className={styles.heroHeading}>
          <h1 className={styles.heroTitle}>{props.title}</h1>
          <h2 className={styles.heroDescription}>{props.description}</h2>
        </div>
        <MusicDemo {...props.widget} />
        <div className={styles.buttonsWrapper}>
          {props.buttons.map((button) => (
            <div key={button.id}>
              {button.appearance === "solid" ? <SolidButton text={button.text} url={button.url}/> : <GhostButton text={button.text} url={button.url}/>}
            </div>
          ))}
        </div>
      </div>
    </StandardWhitespace>
  )
}

export default Hero;