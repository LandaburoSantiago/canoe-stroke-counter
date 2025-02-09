"use client";
import { useState } from "react";

const DEFAULT_CYCLES = 3;

export default function Home() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [ppm, setPPM] = useState<number | null>(0);
  const [cycles, setCycles] = useState<number>(DEFAULT_CYCLES);
  const startCounting = () => {
    setPPM(null);
    setStartTime(Date.now());
  };

  const stopCounting = () => {
    if (startTime !== null) {
      const elapsedTime = (Date.now() - startTime) / 1000;
      const paddles = cycles;
      setPPM((paddles / elapsedTime) * 60);
      setStartTime(null);
    }
  };
  const reset = () => {
    setStartTime(null);
    setPPM(0);
  };

  const cyclesOptions = [
    {
      label: "1 ciclo",
      value: 1,
    },
    {
      label: "2 ciclos",
      value: 2,
    },
    {
      label: "3 ciclos",
      value: 3,
    },
    {
      label: "4 ciclos",
      value: 4,
    },
    {
      label: "5 ciclos",
      value: 5,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 max-w-3xs w-full">
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => setCycles(parseInt(e.target.value))}
        defaultValue={DEFAULT_CYCLES}
      >
        {cyclesOptions.map((option, index) => (
          <option key={`cicle-option-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="text-xl">
        Paladas por Minuto: <b>{ppm?.toFixed(0)} </b>
      </p>
      <button
        onClick={!startTime ? startCounting : stopCounting}
        className={`px-10 py-12 text-xl ${
          !startTime ? "bg-sky-500/50" : "bg-red-500/50"
        } text-white rounded-lg shadow-md ${
          !startTime ? "hover:bg-sky-600/60" : "hover:bg-red-600/60"
        } w-full`}
      >
        {!startTime ? "Empezar" : "Parar"}
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 bg-transparent text-white rounded-lg shadow-md border border-solid border-white w-full"
      >
        Reiniciar
      </button>
    </div>
  );
}
