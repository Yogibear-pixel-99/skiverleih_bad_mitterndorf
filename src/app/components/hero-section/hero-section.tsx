"use client";

import React from "react";
import GlassContainer from "../shared/layout/glass-container";
import styles from "./hero-section.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import WeatherWidget from "../shared/weather/weather-bad-mitterndorf";
import WeatherBadMitterndorf from "../shared/weather/weather-bad-mitterndorf";
import WeatherTauplitzAlm from "../shared/weather/weather-tauplitz";
import { FlexContainer } from "../shared/layout/flex-container";
import { Button } from "../ui/button";
import { Star, Users } from "lucide-react";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className={styles.contentwrapper}>
      <div className={styles.imagemask}></div>
    <FlexContainer className="flex-row justify-between ml-4 mr-4">

      <GlassContainer variant={"high"} className="w-[40%] p-4 mb-25">
        <h2 className="text-xl font-semibold mb-4">{t("hero.title")}</h2>
        <p className="pb-2 text-lg">{t("hero.partOne")}</p>
        <p className="pb-2 text-lg">{t("hero.partTwo")}</p>
        <p className="pb-2 text-lg">{t("hero.partThree")}</p>
      </GlassContainer>
      <FlexContainer>
     <WeatherTauplitzAlm />
        <WeatherBadMitterndorf />
      </FlexContainer>
    </FlexContainer>
      <FlexContainer className="absolute flex flex-row bottom-0 right-0 left-0 gap-4 justify-between">
        <FlexContainer className="flex-row mt-auto ml-4 mb-4">
          <Button className="text-lg h-16" variant={"main"} size={"lg"}>{t("hero.buttons.equip")}</Button>
          <Button className="text-lg h-16" variant={"main"} size={"lg"}>{t("hero.buttons.service")}</Button>
          <Button className="text-lg h-16" variant={"main"} size={"lg"}>{t("hero.buttons.prices")}</Button>
        </FlexContainer>
          <span className="self-center text-2xl font-semibold font-serif">"Wir lieben Schnee!"</span>

        <FlexContainer className="flex-row">
        <div className="flex gap-4 z-20">
          {/* Google Bewertung */}
          <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-xl flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold text-gray-800">4.9</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600">Google Bewertung</div>
              <div className="text-xs text-gray-500">basierend auf 187 Bewertungen</div>
            </div>
          </div>


          {/* 5000+ Kunden */}
          <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-xl flex items-center gap-4">
            <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-gray-800">5000+</div>
              <div className="text-sm text-gray-600">Zufriedene Kunden</div>
              <div className="text-xs text-gray-500">seit 1992</div>
            </div>
          </div>
        </div>
   
        </FlexContainer>
      </FlexContainer>
      {/* <Image src="/images/hero/head.png" alt="logo" width={70} height={40} />
  <Image src="/images/hero/nordica1_29.png" alt="logo" width={90} height={40} />
  <Image src="/images/hero/salomon.png" alt="logo" width={50} height={30} />
  <Image src="/images/hero/jupitervedge.jpg" alt="logo" width={90} height={40} />
  <Image src="/images/hero/Wintersteiger-logo.png" alt="logo" width={90} height={60} />
  <Image src="/images/hero/toko.webp" alt="logo" width={90} height={40} /> */}
    </div>
  );
}
