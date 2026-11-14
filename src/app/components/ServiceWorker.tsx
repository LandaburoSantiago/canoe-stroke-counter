"use client";
import { useEffect } from "react";

export default function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if ("serviceWorker" in navigator) {
        // A previously installed production worker can otherwise cache local assets.
        const scriptURL = new URL("/sw.js", window.location.origin).href;
        navigator.serviceWorker.getRegistrations().then(async (registrations) => {
          for (const registration of registrations) {
            const worker = registration.active ?? registration.waiting ?? registration.installing;
            if (worker?.scriptURL === scriptURL) {
              await registration.unregister();
            }
          }
        }).catch((error) => console.error("No se pudo desregistrar el service worker local:", error));
      }
      return;
    }

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
