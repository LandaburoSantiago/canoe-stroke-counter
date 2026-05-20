import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorker from "./components/ServiceWorker";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuentapaladas",
  description: "Una aplicación para contar paladas por minuto",
  manifest: "/manifest.json",
};
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    workbox: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManager gtmId="GTM-5T77TCGN" />
        <ServiceWorker />
        <div className="flex flex-col items-center justify-center h-screen gap-4 px-4 py-16">
          <h1 className="text-2xl font-bold">Cuenta Paladas</h1>
          {children}
          <p>
            Desarrollado por{" "}
            <a href="https://santiagolandaburo.com/" target="__blank">
              Santiago Landaburo
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
