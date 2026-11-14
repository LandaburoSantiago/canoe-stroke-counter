"use client";

import { useRef, useState } from "react";
import Icon from "./components/Icon";
import Stopwatch from "./components/Stopwatch";

const DEFAULT_CYCLES = 3;

export default function Home() {
  const startedAt = useRef<number | null>(null);
  const [measuring, setMeasuring] = useState(false);
  const [ppm, setPPM] = useState<number | null>(null);
  const [cycles, setCycles] = useState(DEFAULT_CYCLES);
  const [error, setError] = useState("");

  const toggleMeasurement = () => {
    if (startedAt.current === null) {
      startedAt.current = performance.now();
      setPPM(null);
      setError("");
      setMeasuring(true);
      return;
    }

    const elapsed = performance.now() - startedAt.current;
    startedAt.current = null;
    setMeasuring(false);
    if (elapsed < 100) {
      setError("La medición fue muy breve. Volvé a intentarlo.");
      return;
    }
    setPPM((cycles / elapsed) * 60000);
  };

  const reset = () => {
    startedAt.current = null;
    setMeasuring(false);
    setPPM(null);
    setError("");
  };

  return (
    <main className="training-tool">
      <section aria-labelledby="counter-title" className="stroke-counter">
        <h1 id="counter-title">Contador de paladas</h1>
        <div className={`stroke-result ${ppm !== null ? "has-result" : ""}`}>
          <output className="stroke-value" aria-label="Paladas por minuto" aria-live="polite">
            {ppm === null ? "—" : ppm.toFixed(0)}
          </output>
          <p className="stroke-unit">paladas / min</p>
          <p className={`measurement-state ${measuring ? "is-measuring" : ""}`} role="status">
            <span className="state-dot" aria-hidden="true" />
            {measuring ? `Midiendo ${cycles} ${cycles === 1 ? "ciclo" : "ciclos"}` : ppm !== null ? "Medición completa" : "Listo para medir"}
          </p>
        </div>

        <fieldset className="cycle-picker" disabled={measuring} aria-describedby="measurement-help">
          <legend>Ciclos a medir</legend>
          <div className="cycle-options">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="cycle-option">
                <input type="radio" name="cycles" value={value} checked={cycles === value} onChange={() => setCycles(value)} aria-label={`${value} ${value === 1 ? "ciclo" : "ciclos"}`} />
                <span>{value}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <p id="measurement-help" className="measurement-help">
          {measuring ? `Contá ${cycles} ${cycles === 1 ? "ciclo" : "ciclos"} y tocá parar.` : `Tocá empezar, contá ${cycles} ${cycles === 1 ? "ciclo" : "ciclos"} y tocá parar.`}
        </p>
        {error && <p className="measurement-error" role="alert">{error}</p>}

        <button type="button" onClick={toggleMeasurement} className={`measure-button ${measuring ? "is-measuring" : ""}`}>
          <Icon name={measuring ? "stop" : "play"} />
          {measuring ? "Parar medición" : "Empezar medición"}
        </button>
        <button type="button" onClick={reset} disabled={!measuring && ppm === null && !error} className="reset-measurement">
          <Icon name="reset" /> Reiniciar medición
        </button>
      </section>
      <Stopwatch />
    </main>
  );
}
