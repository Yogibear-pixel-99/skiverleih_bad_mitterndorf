"use client";

import Image from "next/image";
import Header from "./components/shared/header/header";
import LangSwitch from "./components/shared/lang-switch/lang-switch";
import HeroSection from "./components/hero-section/hero-section";
import styles from "./root.module.scss";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className={cn("h-dvh overflow-hidden", styles.herowrapper)}>
        <Header />
        <HeroSection />
      </div>
    </>
  );
}
