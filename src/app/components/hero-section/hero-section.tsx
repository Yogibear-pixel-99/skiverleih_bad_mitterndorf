"use client";

import React from "react";
import GlassContainer from "../shared/layout/glass-container";
import styles from "./hero-section.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import WeatherWidget from "../shared/weather/weather-widget";

export default function HeroSection() {

  const {t} = useTranslation();
  return (
    <div className={styles.contentwrapper}>
      <div className={styles.imagemask}></div>

      <GlassContainer variant={"high"} className="w-[40%] p-4 ml-4 mb-25">
        <h2 className="text-xl font-semibold mb-4">
          {t("hero.title")}
        </h2>
        <p className="pb-2 text-lg">
          {t("hero.partOne")}
        </p>
        <p className="pb-2 text-lg">
          {t("hero.partTwo")}
        </p>
        <p className="pb-2 text-lg">
          {t("hero.partThree")}
        </p>
      </GlassContainer>
      <div className="absolute flex flex-row bottom-2 right-2 gap-4 justify-around">
<WeatherWidget />
</div>
  {/* <Image src="/images/hero/head.png" alt="logo" width={70} height={40} />
  <Image src="/images/hero/nordica1_29.png" alt="logo" width={90} height={40} />
  <Image src="/images/hero/salomon.png" alt="logo" width={50} height={30} />
  <Image src="/images/hero/jupitervedge.jpg" alt="logo" width={90} height={40} />
  <Image src="/images/hero/Wintersteiger-logo.png" alt="logo" width={90} height={60} />
  <Image src="/images/hero/toko.webp" alt="logo" width={90} height={40} /> */}



    </div>
  );
}
