"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { WiSnowflakeCold } from "react-icons/wi";
import styles from "./header.module.scss";
import { cn } from "@/lib/utils";
import { Separator } from "../../ui/separator";
import LangSwitch from "../lang-switch/lang-switch";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-orange-200 h-[190px] flex flex-col justify-between">
      <div className=" flex flex-row items-center justify-between flex-1 h-40">
      <div className="flex items-center gap-6 p-6">
        <Image
          src="/images/logos/main_logo.png"
          alt="Skiverleih Logo"
          width={100}
          height={100}
        />
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-3xl -translate-y-[3px]">{t("header.title")}</h1>
          <div className="h-6 px-2">
            <Separator orientation="vertical" className="bg-amber-900" />
          </div>
          <span>{t("header.since")}</span>
        </div>
      </div>
        <LangSwitch/>
      <div className="flex flex-col justify-between h-full">
        <nav className="ml-auto border-b border-l rounded-bl-md border-amber-900 text-lg">
          <ul className={cn("flex-row flex", styles.mainnav)}>
            <li className="bg-amber-900/40 rounded-bl-md">
              <Image
                src="/images/logos/skiing-icon.svg"
                alt="ski icon"
                width={14}
                height={14}
              />
              <a href="">{t("navbars.corporate.skirental")}</a>
            </li>
            <li>
              <Separator orientation="vertical" className="bg-amber-900/40" />
            </li>
            <li>
              <Image
                src="/images/logos/brush-icon.svg"
                alt="ski icon"
                width={14}
                height={14}
              />
              <a href="">{t("navbars.corporate.painting")}</a>
            </li>
            <li className="h-[24px] self-center">

            <Separator orientation="vertical" className="bg-amber-900/40" />
            </li>

            <li>
              <Image
                src="/images/logos/home-icon.svg"
                alt="ski icon"
                width={14}
                height={14}
              />
              <a href="">{t("navbars.corporate.apartmentRental")}</a>
            </li>
          </ul>
        </nav>
        {/* <div className="flex-1"> </div> */}
       <div></div>
       
      </div>
      </div>
       <nav className="border-t border-amber-900">
          <ul className={cn("flex-row flex", styles.subnav)}>
            <li className="rounded-tl-md">
              <a href="">{t("navbars.header.rental")}</a>
            </li>
            <li>
              <Separator orientation="vertical" className="bg-amber-900" />
            </li>
            <li>
              <a href="">{t("navbars.header.service")}</a>
            </li>
            <li>
              <Separator orientation="vertical" className="bg-amber-900" />
            </li>
            <li>
              <a href="">{t("navbars.header.shop")}</a>
            </li>
            <li>
              <Separator orientation="vertical" className="bg-amber-900" />
            </li>
            <li>
              <a href="">{t("navbars.header.skiresorts")}</a>
            </li>
            <li>
              <Separator orientation="vertical" className="bg-amber-900" />
            </li>
            <li>
              <a href="">{t("navbars.header.wisperer")}</a>
            </li>
            <li>
              <Separator orientation="vertical" className="bg-amber-900" />
            </li>
            <li>
              <a href="">{t("navbars.header.contact")}</a>
            </li>
          </ul>
        </nav>
      
    </header>
  );
}
