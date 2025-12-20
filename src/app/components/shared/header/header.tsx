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
          <div className="flex flex-col items-center justify-center w-[420px]">
  <h1 className="-translate-y-[6px] text-brand-darkbrown font-bold">
    {t("header.title")}
  </h1>
  <div className="flex flex-row w-full items-center gap-2">
    <div className="w-8 h-[2px] bg-brand-darkbrown" />
    <span className="text-brand-darkbrown text-lg whitespace-nowrap">
      {t("header.since")}
    </span>
    <div className="flex-1 h-[2px] bg-brand-darkbrown" />
  </div>
</div>
        </div>
        <div className="flex flex-col justify-between h-full pt-4">
          <div className="ml-auto pr-4">
            <LangSwitch />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/images/hero/woodski.png"
              alt="Wooden skiers"
              width={300}
              height={40}
            />
          </div>
          {/* <nav className="ml-auto border-b border-l rounded-bl-md border-amber-900 text-lg">
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
        </nav> */}
          {/* <div className="flex-1"> </div> */}
          <div></div>
        </div>
      </div>
      <nav className="border-t border-amber-900">
        <ul className={cn("flex-row flex", styles.subnav)}>
          <a href="">
            <li className="rounded-tl-md">{t("navbars.header.rental")}</li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="">
            <li>{t("navbars.header.service")}</li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="">
            <li>{t("navbars.header.shop")}</li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="">
            <li>{t("navbars.header.skiresorts")}</li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="">
            <li>{t("navbars.header.wisperer")}</li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="">
            <li>{t("navbars.header.contact")}</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
