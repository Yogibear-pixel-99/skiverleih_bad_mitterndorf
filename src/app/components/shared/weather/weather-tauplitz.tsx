"use client";

import React, { useEffect, useState } from "react";

interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

const weatherCodeMap: Record<number, string> = {
  0: "Klar",
  1: "Meist klar",
  2: "Teilweise bewölkt",
  3: "Bewölkt",
  45: "Nebel",
  48: "Reifnebel",
  61: "Leichter Regen",
  63: "Mäßiger Regen",
  65: "Starker Regen",
  71: "Leichter Schneefall",
  73: "Mäßiger Schneefall",
  75: "Starker Schneefall",
};

export default function TauplitzalmMountainWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [snowDepth, setSnowDepth] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast" +
            "?latitude=47.560" +
            "&longitude=13.980" +
            "&current_weather=true" +
            
            "&timezone=Europe/Vienna"
        );

        const data = await res.json();

        // aktuelles Wetter
        setWeather(data.current_weather ?? null);

        // letzte verfügbare Schneehöhe (oben am Berg)
        if (data.hourly?.snow_depth?.length) {
          const latestSnowDepth =
            data.hourly.snow_depth[data.hourly.snow_depth.length - 1];
          setSnowDepth(latestSnowDepth);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Bergwetterdaten:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Lade Bergwetter...</div>;
  if (!weather) return <div>Bergwetter nicht verfügbar</div>;

  return (
    <div className="p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md max-w-sm text-center">
      <h3 className="text-xl font-semibold mb-2">
        Tauplitzalm – Bergstation
      </h3>

      <p className="text-3xl font-bold">{weather.temperature}°C</p>

      <p className="text-sm">
        {weatherCodeMap[weather.weathercode] || "Unbekanntes Wetter"}
      </p>

      <p className="text-sm">Wind: {weather.windspeed} km/h</p>


    </div>
  );
}
