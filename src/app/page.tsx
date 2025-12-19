"use client"

import Image from "next/image";
import Header from "./components/shared/header/header";
import LangSwitch from "./components/shared/lang-switch/lang-switch";
import HeroSection from "./components/hero-section/hero-section";

export default function Home() {
  return (
    <>
      <div className="h-dvh bg-amber-950">
        <Header />
        <HeroSection />
        <LangSwitch/>
      </div>
    </>
  );
}
