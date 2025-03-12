import {CardContentGridComponent} from "@/types";
import ContentCard from "@/components/Card";

const CardContentGrid: React.FC<CardContentGridComponent> = (props: CardContentGridComponent) => {
  return (
    <StandardWhitespace>
      <div className={styles.cardContentGridWrapper}>
        <div className={styles.heading}>
          <div className={styles.preTitle}>
            {props.preTitle}
          </div>
          <div className={styles.title}>
            {props.title}
          </div>
          <div className={styles.description}>
            {props.description}
          </div>
        </div>
        <div className={styles.cardGrid}>
          {props.cards.map((card) =>
            <div key={card.id}>
              <ContentCard {...card}/>
            </div>
          )}
        </div>
      </div>
    </StandardWhitespace>
)
}
import styles from "./cardContentGrid.module.scss";

import StandardWhitespace from "@/components/StandardWhitespace";
import React from "react";

export default CardContentGrid;