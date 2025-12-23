"use client";

import React, { useEffect, useState } from "react";

interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

const weatherCodeMap: Record<number, string> = {
  0: "Klarer Himmel",
  1: "Meist klar",
  2: "Teilweise bewölkt",
  3: "Bewölkt",
  45: "Nebel",
  48: "Reifnebel",
  51: "leichter Nieselregen",
  53: "mäßiger Nieselregen",
  55: "starker Nieselregen",
  61: "leichter Regen",
  63: "mäßiger Regen",
  65: "starker Regen",
  71: "leichter Schnee",
  73: "mäßiger Schnee",
  75: "starker Schnee",
  80: "Schauer",
  81: "Starke Schauer",
  82: "Extreme Schauer",
  95: "Gewitter",
  96: "Gewitter mit leichtem Hagel",
  99: "Gewitter mit starkem Hagel",
};

export default function WeatherBadMitterndorf() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=47.574&longitude=14.150&current_weather=true`
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error("Fehler beim Laden der Wetterdaten:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Lade Wetter...</div>;
  if (!weather) return <div>Wetterdaten nicht verfügbar</div>;

  return (
    <div className="p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md max-w-sm text-center">
      <h3 className="text-xl font-semibold mb-2">Bad Mitterndorf</h3>
      <p className="text-2xl font-bold">{weather.temperature}°C</p>
      <p className="text-sm">
        {weatherCodeMap[weather.weathercode] || "Unbekanntes Wetter"}
      </p>
      <p className="text-sm">Wind: {weather.windspeed} km/h</p>
    </div>
  );
}
