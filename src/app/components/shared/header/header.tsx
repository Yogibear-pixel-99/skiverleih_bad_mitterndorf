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
          <div className="flex flex-col items-center justify-center w-fit">
            <h1 className="-translate-y-[6px] text-brand-darkbrown font-bold font-(family-name:--font-condiment)">
              {t("header.title")}
            </h1>
            <div className="flex flex-row w-full items-center gap-2">
              <div className="translate-y-[4px] w-8 h-[2px] ">
                <Separator className="bg-brand-darkbrown" />
              </div>
              <span className="text-brand-darkbrown text-lg whitespace-nowrap">
                {t("header.since")}
              </span>
               <div className="translate-y-[4px] flex-1 h-[2px] ">
                <Separator className="bg-brand-darkbrown" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full pt-4">
          <div className="ml-auto pr-4">
            <LangSwitch />
          </div>
          <div className="overflow-hidden">
            <Image
                      className="translate-x-[2px]"

              src="/images/hero/woodski.png"
              alt="Wooden skiers"
              width={300}
              height={40}
            />
          </div>
          <div></div>
        </div>
      </div>
      <nav className="border-t border-amber-900">
        <ul className={cn("flex-row flex", styles.subnav)}>
          <a href="" className="group transition-colors duration-150 delay-[250ms] hover:bg-orange-300">
            <li className="rounded-tl-md relative">
              {t("navbars.header.rental")}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-900 transition-all duration-[250ms] ease-out group-hover:w-full group-hover:left-0"></span>
            </li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="" className="group transition-colors duration-150 delay-[250ms] hover:bg-orange-300">
            <li className="relative">
              {t("navbars.header.service")}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-900 transition-all duration-[250ms] ease-out group-hover:w-full group-hover:left-0"></span>
            </li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="" className="group transition-colors duration-150 delay-[250ms] hover:bg-orange-300">
            <li className="relative">
              {t("navbars.header.shop")}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-900 transition-all duration-[250ms] ease-out group-hover:w-full group-hover:left-0"></span>
            </li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="" className="group transition-colors duration-150 delay-[250ms] hover:bg-orange-300">
            <li className="relative">
              {t("navbars.header.skiresorts")}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-900 transition-all duration-[250ms] ease-out group-hover:w-full group-hover:left-0"></span>
            </li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="" className="group transition-colors duration-150 delay-[250ms] hover:bg-orange-300">
            <li className="relative">
              {t("navbars.header.wisperer")}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-900 transition-all duration-[250ms] ease-out group-hover:w-full group-hover:left-0"></span>
            </li>
          </a>
          <li>
            <Separator orientation="vertical" className="bg-amber-900" />
          </li>
          <a href="" className="group transition-colors duration-150 delay-[250ms] hover:bg-orange-300">
            <li className="relative">
              {t("navbars.header.contact")}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-900 transition-all duration-[250ms] ease-out group-hover:w-full group-hover:left-0"></span>
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}