"use client"

import { useState, useEffect } from "react";
import styles from "./lang-switch.module.scss";
import i18n from "@/i18n/i18next";


export default function LangSwitch() {
const [langClass, setLangClass] = useState("de");

useEffect(() => {
  const selectedLang = localStorage.getItem("skiverleih_bm_lang");
  if (selectedLang) {
    setLangClass(selectedLang);
    i18n.changeLanguage(selectedLang);
  } else {
    setLangClass("de");
  }
}, [])

const changeLang = (lang:string) => {
  i18n.changeLanguage(lang);
  setLangClass(lang);
  localStorage.setItem("skiverleih_bm_lang", lang);
}

  return (
    <section className={`${styles["lang-content"]} flex flex-row`}>
      <span onClick={() => changeLang("de")} className={`${langClass === "de" ? styles['active-lang'] : styles['inactive-lang']} text-sm`}>DE</span>
      <div>
        <div className={`${langClass === "de" ? styles['de-active'] : styles['en-active']}`}></div>
      </div>
      <span onClick={() => changeLang("en")} className={`${langClass === "en" ? styles['active-lang'] : styles['inactive-lang']} text-sm`}>EN</span>
    </section>
  );
}
