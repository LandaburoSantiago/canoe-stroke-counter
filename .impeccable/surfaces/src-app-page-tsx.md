---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/components/Stopwatch.tsx","src/app/globals.css","src/app/layout.tsx"]
---

# Home — Hoja de regata

Mode: operate. Scope: `/`, contador principal y cronómetro secundario. Uso con una mano priorizado por el usuario. Elección confirmada en el panel: regata, code-led, sketch `.impeccable/mocks/decision/regata.html`.

## Direction contract

THESIS: una herramienta de medición para mirar de reojo desde una lancha; una tarea principal, sin paneles de métricas adicionales.

OWN-WORLD: Hoja de regata. Fondo claro frío, tinta azul y naranja para iniciar; sans de interfaz, cifras tabulares, superficies sin textura y controles táctiles definidos. Luz natural en el agua motiva el tema claro de alto contraste.

STORY: empezar, observar al palista, parar y leer paladas/min. Los ciclos se configuran ocasionalmente en una fila secundaria debajo de las acciones; la instrucción mantiene visible la cantidad elegida. El cronómetro se despliega de forma independiente. El resultado y el estado cambian juntos en un lugar fijo: la firma de interacción es la sustitución estable del estado de medición, con énfasis breve al obtener resultado.

FIRST VIEWPORT: cabecera compacta, título del contador, resultado central grande con unidad, instrucción breve y botón naranja de 100px al alcance del pulgar. Reinicio secundario, configuración compacta de ciclos con selector nativo sin acento de color y fila plegable del cronómetro al pie. En desktop la misma herramienta centrada, sin inflar datos.

FORM: planillas de resultados de regata, candidato propio #1 elegido por el usuario en lugar del asignado #5. seed:be157347fa3ac047. Paleta restringida, cifras de medición y controles web estándar; motion breve de estado, respetando reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

No nuevas funciones de persistencia ni seguimiento de atletas en este alcance.
