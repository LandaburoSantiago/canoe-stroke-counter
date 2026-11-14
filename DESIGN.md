---
name: Cuenta Paladas
description: Hoja de regata clara y directa para medir de un vistazo.
colors:
  background: "#f5f7fa"
  foreground: "#102542"
  surface: "#ffffff"
  muted: "#526278"
  border: "#cbd4e0"
  accent: "#cc4c1a"
  accent-hover: "#b23d11"
  stop: "#9f302b"
  focus: "#174bc8"
  disabled: "#707d8f"
  quiet-hover: "#e5ebf3"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "6rem"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.5
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.9375rem"
    lineHeight: 1.5
  helper:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.875rem"
    lineHeight: 1.5
  action:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 650
    lineHeight: 1.5
rounded:
  small: "8px"
  medium: "10px"
  main: "14px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-measure:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.action}"
    rounded: "{rounded.main}"
    padding: "20px 12px"
    height: "100px"
    width: "100%"
  button-measure-hover:
    backgroundColor: "{colors.accent-hover}"
  button-stop:
    backgroundColor: "{colors.stop}"
    textColor: "{colors.surface}"
    typography: "{typography.action}"
    rounded: "{rounded.main}"
    padding: "20px 12px"
    height: "100px"
    width: "100%"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.medium}"
    padding: "12px 8px"
    height: "56px"
  button-reset:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "12px 8px"
    height: "52px"
    width: "100%"
  cycle-select:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.small}"
    padding: "8px 12px"
    height: "48px"
  stopwatch-disclosure:
    textColor: "{colors.foreground}"
    rounded: "6px"
    padding: "16px 0"
    height: "80px"
    width: "100%"
  measurement-readout:
    textColor: "{colors.foreground}"
    typography: "{typography.display}"
    padding: "24px 0 28px"
---

# Design System: Cuenta Paladas

## Overview

**Creative North Star: "Hoja de regata"**

Una herramienta clara y sobria, inspirada en las planillas de resultados de regata. El fondo frío, la tinta azul y las superficies blancas sostienen una lectura rápida; el naranja concentra la acción de medir. La interfaz está en español y usa formas de control reconocibles, sin texturas ni imágenes decorativas.

La escala nace del uso con una mano y de mirar la pantalla de reojo. Los números tienen más peso que el entorno; las acciones tienen áreas amplias, texto directo e iconos de trazo. Los cambios de estado ocurren en posiciones estables, con movimiento breve y prescindible.

**Key Characteristics:**
- Fondo claro frío y tinta azul de alto contraste.
- Cifras tabulares y resultado dominante.
- Controles táctiles amplios, redondeados y sin sombras.
- Naranja para iniciar; rojo oscuro para parar.
- Animación breve de estado con respeto por movimiento reducido.

## Colors

Una paleta restringida de papel frío, tinta azul y naranja cálido; los valores normativos están en el frontmatter y se corresponden con la hoja de estilos global.

### Primary
- **Naranja de salida — accent:** inicio de medición; texto blanco sobre el relleno.
- **Naranja profundo — accent-hover:** respuesta de hover de la acción principal.

### Secondary
- **Rojo de parada — stop:** acción de parar, estado de medición en curso y errores.
- **Azul de foco — focus:** contorno de foco visible, separado del color de selección.

### Neutral
- **Papel frío — background:** lienzo de la página, selector deshabilitado y cabecera de vueltas.
- **Tinta azul — foreground:** títulos, cifras y texto principal.
- **Blanco de control — surface:** selector de ciclos y botones secundarios; texto de acciones con relleno intenso.
- **Azul gris — muted:** unidades, instrucciones, estados y encabezados de tabla.
- **Línea fría — border:** divisores y bordes de controles secundarios.
- **Tinta deshabilitada — disabled:** acciones de reinicio y cronómetro sin disponibilidad.
- **Baño frío — quiet-hover:** hover compartido por las acciones de reinicio.

**The State Color Rule.** El naranja identifica inicio; el rojo identifica la medición en curso y su acción de parada. Acompañar siempre el color con texto o forma de estado.

## Typography

**Body Font:** Geist, con Arial y sans-serif como respaldo. La misma familia compone títulos, acciones y cifras; no hay una tipografía decorativa separada.

**Character:** sans de interfaz compacta y directa. El tamaño y el peso organizan la atención; los tiempos y el resultado usan cifras tabulares.

### Hierarchy
- **Display:** resultado principal con peso medio fuerte; se reduce a (5rem) en pantallas bajas. La unidad queda debajo, en tono secundario y tamaño (1.125rem).
- **Title:** encabezado de herramienta; su escala y tracking están en el token title. La marca usa la misma escala con peso (750).
- **Body:** texto de interfaz y apertura del cronómetro.
- **Label:** leyendas, estados y acciones secundarias; los controles combinan pesos (500–600) según jerarquía.
- **Helper:** instrucciones y tabla de vueltas; los encabezados de tabla se reducen a (0.8125rem).
- **Action:** texto de la acción principal; baja a (1.25rem) por debajo de (360px) de ancho.

**The Stable Digits Rule.** Resultados, tiempos y vueltas usan cifras tabulares; el cambio de valor no debe desplazar la lectura horizontal.

## Layout

Una columna centrada con ancho máximo (524px). Los márgenes internos son (24px), pasan a (32px) desde (768px) de ancho y a (16px) por debajo de (360px). La cabecera y los divisores definen el marco; el escritorio conserva la misma escala de herramienta.

El ritmo reutiliza pasos de (8px), (12px), (16px), (24px) y (32px). La configuración de ciclos ocupa una fila compacta debajo de las acciones de medición: etiqueta a la izquierda y selector nativo a la derecha. Las acciones del cronómetro forman dos columnas con separación (12px). Los controles mantienen su altura táctil al reducir el ancho.

En pantallas de hasta (740px) de alto y menos de (768px) de ancho, se compactan cabecera, separación superior y resultado. El historial de vueltas tiene altura máxima (272px), desplazamiento propio y encabezado fijo. El pie reserva el margen inferior seguro del dispositivo.

## Elevation & Depth

No hay sombras. La profundidad se comunica con blanco sobre papel frío, cambios de relleno en interacción y líneas finas entre secciones. El foco visible usa contorno azul (3px) con separación (4px), incluido el selector de ciclos.

**The Flat Surface Rule.** Separar con tono, espacio o línea; mantener los controles y grupos planos.

## Shapes

El radio principal define la acción de medición. Los controles menores alternan radios pequeños y medianos del frontmatter. El selector de ciclos y los botones secundarios usan borde (1px).

Los iconos son SVG de trazo redondeado (1.8px), normalmente de (24px), reducidos en acciones secundarias. El indicador de estado es un punto (7px) que pasa a cuadrado suave durante la medición, reforzando el cambio de texto y color.

## Components

### Buttons

Acciones amplias y explícitas. La medición tiene la mayor altura mínima del sistema; las alturas del frontmatter son mínimos, no recortes fijos de contenido.

- **Primary / Stop:** ancho completo, texto blanco e icono; cambia de naranja a rojo durante la medición. El hover cambia el relleno y el estado presionado lo oscurece.
- **Secondary:** superficie blanca con línea fría, peso (600), dos columnas en el cronómetro; hover con borde de tinta y relleno frío, estado presionado más oscuro.
- **Reset:** acción plana de ancho completo, peso (500); el hover agrega el baño frío. La disponibilidad se expresa con tinta deshabilitada y semántica disabled.
- **Focus / Motion:** todos muestran foco visible. La acción principal cambia su fondo en (150ms ease-out); movimiento reducido elimina transiciones y animaciones.

### Cycle Selector

Una fila secundaria debajo del reinicio, sin tarjeta ni acento naranja. La etiqueta «Ciclos a medir» acompaña un selector nativo de 1 a 5 ciclos, con 3 predeterminados y altura táctil mínima de (48px). El texto del selector usa (1rem) para evitar zoom automático en móviles. La cantidad elegida también aparece en la instrucción junto a la acción principal. Durante la medición se bloquea el selector; conserva el valor al reiniciar y entre mediciones de la sesión actual.

### Measurement Readout

Resultado central, unidad y estado en una columna. El resultado vacío usa una raya; el área de estado conserva su altura mínima (24px). Al obtener un resultado, la cifra pasa brevemente del naranja a la tinta en (220ms ease-out), sin desplazamiento.

### Stopwatch Disclosure

Una fila entre dos divisores con icono, nombre, tiempo alineado a la derecha y flecha. Mantiene visible el tiempo al plegarse. El despliegue conserva la separación de acciones secundarias; la flecha gira en (180ms ease-out). La fila usa un hover frío y foco visible.

### Lap Table

Cifras tabulares alineadas a la derecha; número de vuelta a la izquierda. Filas separadas por línea fina, sin cajas individuales. La cabecera fija usa el fondo de página; el área desplazable admite foco de teclado.

## Do's and Don'ts

### Do:
- **Do** mantener cifras tabulares y posiciones estables para resultados y tiempos.
- **Do** conservar áreas amplias para medir, seleccionar ciclos y operar el cronómetro.
- **Do** acompañar estados y disponibilidad con texto, forma y semántica accesible.
- **Do** usar los colores normativos del frontmatter y el foco visible azul.
- **Do** respetar movimiento reducido y reservar la animación para cambios de estado.

### Don't:
- **Don't** agregar sombras a los controles o grupos planos.
- **Don't** usar el naranja de selección para la acción de parada.
- **Don't** reducir los controles a sus iconos o depender solo del color para explicar su estado.
