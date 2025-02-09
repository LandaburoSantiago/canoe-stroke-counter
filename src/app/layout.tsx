import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <div className="flex flex-col items-center justify-center h-screen gap-4 px-4 py-16">
          <h1 className="text-2xl font-bold">Cuenta Paladas</h1>
          {children}
          <p className="italic text-xs text-white-600/50">pal boko por santi</p>
        </div>
      </body>
    </html>
  );
}
