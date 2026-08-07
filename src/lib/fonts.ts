import { Geist, Geist_Mono } from "next/font/google";

/**
 * Centralized font definitions. Import the exposed CSS variables in the root
 * layout so every component can reference `font-sans` / `font-mono`.
 */
export const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${fontSans.variable} ${fontMono.variable}`;
