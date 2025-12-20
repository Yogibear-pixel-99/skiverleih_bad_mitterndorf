"use client";

import React from "react";
import GlassContainer from "../shared/layout/glass-container";

export default function HeroSection() {
  return (

  <GlassContainer variant={"high"} className="w-[40%] p-4">
    <h2 className="text-xl font-semibold">Skiverleih mit Herz seit vielen Jahre</h2>
    <p>
      Mitten in den verschneiten Bergen führen wir unseren Familienbetrieb seit
      1992 mit viel Leidenschaft und einem klaren Anspruch: erstklassiger
      Service, hochwertiges Verleihmaterial und echte Kompetenz auf und neben
      der Piste. Jedes Paar Ski wird sorgfältig gewartet, jede Beratung
      individuell abgestimmt – denn bei uns steht der Kunde immer im
      Mittelpunkt. Für unvergessliche Skitage, vom ersten Schwung bis zur
      letzten Abfahrt.
    </p>
  </GlassContainer>
  );
}
