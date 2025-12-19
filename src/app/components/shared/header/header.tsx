"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {SparklesIcon} from "@heroicons/react/24/solid";
import { WiSnowflakeCold } from "react-icons/wi";
import styles from "./header.module.scss";
import { cn } from "@/lib/utils"; 
import { Separator } from "../../ui/separator";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-orange-200 flex flex-row items-center justify-between flex-1 h-40">
      <div className="flex items-center gap-6 p-6">
        <Image
          src="/images/logos/main_logo.png"
          alt="Skiverleih Logo"
          width={100}
          height={100}
        />
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-3xl -translate-y-[3px]">{t("header.title")}</h1>
          <div className="h-6 px-2"><Separator orientation="vertical" className="bg-amber-900"/></div>
          <span>{t("header.since")}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <nav className="ml-auto border-b border-l rounded-bl-md border-amber-900 text-lg font-semibold">
          <ul className={cn("flex-row flex", styles.mainnav)}>
            <li className="bg-amber-900/40 rounded-bl-md">

              <WiSnowflakeCold/>
              <a href="">{t("navbars.corporate.skirental")}</a>
            </li>
            <li><Separator orientation="vertical" className="bg-amber-900"/></li>
            <li>
              <a href="">{t("navbars.corporate.painting")}</a>
            </li>
                        <Separator orientation="vertical"/>

            <li>
              <a href="">{t("navbars.corporate.apartmentRental")}</a>
            </li>
          </ul>
        </nav>
        {/* <div className="flex-1"> </div> */}
        <nav className="border-t border-l rounded-tl-md border-amber-900">
            <ul className={cn("flex-row flex", styles.subnav)}>
            <li className="rounded-tl-md">
              <a href="">{t("navbars.header.rental")}</a>
            </li>
             <li><Separator orientation="vertical" className="bg-amber-900"/></li>
            <li>
              <a href="">{t("navbars.header.service")}</a>
            </li>
             <li><Separator orientation="vertical" className="bg-amber-900"/></li>
            <li>
              <a href="">{t("navbars.header.shop")}</a>
            </li>
             <li><Separator orientation="vertical" className="bg-amber-900"/></li>
            <li>
              <a href="">{t("navbars.header.skiresorts")}</a>
            </li>
             <li><Separator orientation="vertical" className="bg-amber-900"/></li>
            <li>
              <a href="">{t("navbars.header.contact")}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
