"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

type Lap = {
  number: number;
  duration: number;
  total: number;
};

function formatTime(milliseconds: number) {
  const centiseconds = Math.floor(milliseconds / 10);
  const minutes = Math.floor(centiseconds / 6000);
  const seconds = Math.floor((centiseconds % 6000) / 100);
  const fraction = centiseconds % 100;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(fraction).padStart(2, "0")}`;
}

export default function Stopwatch() {
  const [expanded, setExpanded] = useState(false);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [laps, setLaps] = useState<Lap[]>([]);
  const startedAt = useRef<number | null>(null);
  const accumulated = useRef(0);
  const lastLapAt = useRef(0);

  useEffect(() => {
    if (!running) return;

    const interval = window.setInterval(() => {
      if (startedAt.current !== null) {
        setElapsed(accumulated.current + performance.now() - startedAt.current);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, [running]);

  const toggle = () => {
    if (startedAt.current !== null) {
      accumulated.current += performance.now() - startedAt.current;
      startedAt.current = null;
      setElapsed(accumulated.current);
      setRunning(false);
    } else {
      startedAt.current = performance.now();
      setRunning(true);
    }
  };

  const markLap = () => {
    if (startedAt.current === null) return;
    const total = accumulated.current + performance.now() - startedAt.current;
    const duration = total - lastLapAt.current;
    lastLapAt.current = total;
    setElapsed(total);
    setLaps((previous) => [
      { number: previous.length + 1, duration, total },
      ...previous,
    ]);
  };

  const reset = () => {
    if (startedAt.current !== null) return;
    accumulated.current = 0;
    lastLapAt.current = 0;
    setElapsed(0);
    setLaps([]);
  };

  return (
    <section aria-labelledby="stopwatch-title" className="stopwatch">
      <h2 id="stopwatch-title">
        <button type="button" className="stopwatch-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="stopwatch-controls" aria-label={`${expanded ? "Ocultar" : "Mostrar"} cronómetro`}>
          <Icon name="timer" />
          <span>Cronómetro</span>
          <span role="timer" aria-label="Tiempo transcurrido" aria-live="off" className="stopwatch-time">{formatTime(elapsed)}</span>
          <Icon name="chevron" className={expanded ? "chevron is-open" : "chevron"} />
        </button>
      </h2>
      <div id="stopwatch-controls" hidden={!expanded} className="stopwatch-controls">
        <p role="status" className="stopwatch-state">{running ? "En marcha" : elapsed > 0 ? "En pausa" : "Iniciá el cronómetro para marcar vueltas."}</p>
        <div className="stopwatch-actions">
          <button type="button" onClick={toggle} className="secondary-button">
            <Icon name={running ? "pause" : "play"} />
            {running ? "Pausar" : elapsed > 0 ? "Continuar" : "Iniciar"}
          </button>
          <button type="button" onClick={markLap} disabled={!running} className="secondary-button">
            <Icon name="flag" /> Marcar vuelta
          </button>
        </div>
        <button type="button" onClick={reset} disabled={running || elapsed === 0} className="stopwatch-reset">
          <Icon name="reset" /> Reiniciar cronómetro
        </button>
        {laps.length > 0 && (
          <div role="region" aria-label="Vueltas registradas" tabIndex={0} className="lap-list">
            <table>
              <caption className="sr-only">Tiempos parciales y acumulados, de la vuelta más reciente a la primera</caption>
              <thead><tr><th scope="col">Vuelta</th><th scope="col">Parcial</th><th scope="col">Acumulado</th></tr></thead>
              <tbody>
                {laps.map((lap) => (
                  <tr key={lap.number}><th scope="row">{lap.number}</th><td>{formatTime(lap.duration)}</td><td>{formatTime(lap.total)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p role="status" className="sr-only">{laps.length > 0 ? `${laps.length} vueltas registradas. Última vuelta: ${formatTime(laps[0].duration)}.` : "Sin vueltas registradas."}</p>
      </div>
    </section>
  );
}
