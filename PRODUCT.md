# Cuenta Paladas

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Entrenadores de canotaje que observan a sus palistas desde una lancha. El uso puede ser con una o dos manos; se prioriza una mano (confirmado por el usuario).

## Product Purpose

Medir las paladas por minuto con la menor atención posible sobre la pantalla. El contador de paladas es la función principal; el cronómetro con vueltas es secundario.

## Operating Context

Entrenamiento en el agua desde una lancha, con la atención puesta en los palistas. La interfaz debe facilitar lecturas rápidas y acciones cómodas.

## Capabilities and Constraints

- Medición por 1 a 5 ciclos: tocar para empezar y tocar para parar; 3 ciclos predeterminados.
- Cronómetro independiente con inicio, pausa, continuación, vueltas parciales y acumuladas, y reinicio.
- PWA existente en Next.js, React y TypeScript; conservar su funcionamiento.
- Los tiempos y vueltas viven en la sesión actual de página; no hay almacenamiento persistente implementado.
- No cambiar la interpretación de ciclos ni inventar funciones de seguimiento de deportistas.

## Brand Commitments

Nombre existente: Cuenta Paladas. Interfaz en español.

## Evidence on Hand

Código existente, README, manifest e iconos en public/. El usuario confirmó el escenario real de uso.

## Product Principles

- Contar paladas tiene prioridad visual y operativa.
- Priorizar el uso con una mano.
- Reducir el tiempo mirando la pantalla.
- Mantener independientes contador y cronómetro.
