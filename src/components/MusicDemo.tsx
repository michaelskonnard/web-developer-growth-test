"use client"

import Image from "next/image";
import React from "react";

import styles from "./musicDemo.module.scss";

type MusicDemoProps = {
  cta: string;
  format: string;
  title: string;
  url: string;
}

const playMusic = (format: string, url: string) => {
  const audio = new Audio(url);
  audio.play();
}

const uploadMusic = () => {
  console.log("uploading music...");
}

const MusicDemo: React.FC<MusicDemoProps> = ({cta, format, title, url}) => {
  return (
    <div className={styles.musicDemoWrapper}>
      <div className={styles.demoLabel}>{title}</div>
      <div className={styles.musicDemo}>
        <button className={styles.button} onClick={()=>playMusic(format, url)}>
          <Image src={"/images/play-button.svg"} alt={"play button"} width={52} height={52} />
        </button>
        <div className={styles.audioWavWrapper}>
          <Image src={"/images/audio-wav.svg"} alt={"audio wav"} width={387} height={52} className={styles.audioWavImage}/>
        </div>
        <Image src={"/images/line.svg"} alt={"line"} width={1} height={52}/>
        <button className={styles.cta} onClick={uploadMusic}>
          {cta}
        </button>
      </div>
    </div>

  )
}

export default MusicDemo;