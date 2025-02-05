"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [paddles, setPaddles] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [ppm, setPPM] = useState<number>(0);

  const registerPaddle = () => {
    const now = Date.now();
    if (!startTime) {
      setStartTime(now);
    }
    setPaddles((prev) => prev + 1);
  };
  const reset = () => {
    setPaddles(0);
    setStartTime(null);
    setPPM(0);
  };

  useEffect(() => {
    if (paddles > 0 && startTime) {
      const elapsedTime = (Date.now() - startTime) / 60000; // Minutes
      setPPM(Math.round(paddles / elapsedTime));
    }
  }, [paddles, startTime]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 max-w-3xs w-full">
      <p className="text-xl">Paladas: {paddles}</p>
      <p className="text-xl">
        Paladas por Minuto: <b>{ppm} </b>
      </p>
      <button
        onClick={registerPaddle}
        className="px-10 py-6 text-xl bg-sky-500/50 text-white rounded-lg shadow-md hover:bg-sky-600/60 w-full"
      >
        Registrar Paladas
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
