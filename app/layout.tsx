import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visual Analogue Measurement Scales (VAMS) - Mood State Scoring Tool",
  description: "Visual Analogue Measurement Scales - a tool to measure mood state in individuals on a scale from 0 to 100.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <body className={`w-screen ${inter.className}`}>{children}</body>
    </html>
  );
}
