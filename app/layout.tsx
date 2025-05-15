import type { Metadata, Viewport } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reverb",
  description: "The next generation of Hypixel SkyBlock scripting.",
};

export const viewport: Viewport = {
  themeColor: "#2196F3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${exo.variable} antialiased bg-[#0e0e10] text-white`}>
        {children}
      </body>
    </html>
  );
}
