"use client"

import {ModulesComponent} from "@/types";
import Image from "next/image";
import ModuleCard from "@/components/ModuleCard";
import React, {useState} from "react";
import StandardWhitespace from "@/components/StandardWhitespace";

import styles from "./modulesSection.module.scss";

const ModulesSection: React.FC<ModulesComponent> = (props: ModulesComponent) => {
  const numPages = Math.ceil(props.cards.length / 3);

  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  const handleNextClick = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1);
  }

  const shouldCardBeShown = (id: number) => {
    const lastCardOnPage = currentPage * 3;
    return lastCardOnPage - 2 <= id && id <= lastCardOnPage;
  }

  return (
    <StandardWhitespace>
      <div className={styles.modulesSectionWrapper}>
        <div className={styles.topSection}>
          <div className={styles.heading}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
          </div>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button} disabled={currentPage === 1} onClick={handlePrevClick}>
              <Image src={currentPage === 1 ? "/images/prev.svg" : "/images/prev-white.svg"} alt={"prev button"} width={44} height={44} />
            </button>
            <button className={styles.button} disabled={currentPage === numPages} onClick={handleNextClick}>
              <Image src={currentPage === 1 ? "/images/next-white.svg" : "/images/next.svg"} alt={"next button"} width={44} height={44} />
            </button>
          </div>
        </div>
        <div className={styles.cardSection}>
          {props.cards.map((card) => (
            <div key={card.id}>
              <ModuleCard {...card} className={shouldCardBeShown(card.id) ? styles.visible : styles.invisible}/>
            </div>
          ))}
        </div>
      </div>
    </StandardWhitespace>
  )
}

export default ModulesSection;