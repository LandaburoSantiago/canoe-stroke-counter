"use client";
import { useEffect } from "react";

export default function ServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) =>
          console.log("Service Worker registrado correctamente:", reg)
        )
        .catch((err) =>
          console.error("Error al registrar el Service Worker:", err)
        );
    }
  }, []);

  return null; // No renderiza nada en pantalla
}
