import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Icon from "./components/Icon";
import ServiceWorker from "./components/ServiceWorker";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f5f7fa",
};

export const metadata: Metadata = {
  title: "Cuentapaladas",
  description: "Una aplicación para contar paladas por minuto",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico?v=regata-2", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon.svg?v=regata-2", type: "image/svg+xml" },
      { url: "/favicon-32x32.png?v=regata-2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=regata-2", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=regata-2", sizes: "180x180", type: "image/png" }],
  },
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
        className={`${geistSans.variable} antialiased`}
      >
        <GoogleTagManager gtmId="GTM-5T77TCGN" />
        <ServiceWorker />
        <div className="app-shell">
          <header className="app-header">
            <div className="brand"><span className="brand-mark"><Icon name="paddle" /></span><span>Cuenta Paladas</span></div>
          </header>
          {children}
          <footer className="app-footer">
            Desarrollado por <a href="https://santiagolandaburo.com/" target="_blank" rel="noopener noreferrer">Santiago Landaburo</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
