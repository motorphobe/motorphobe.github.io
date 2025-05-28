import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ubuntu.variable} font-[--font-ubuntu] antialiased select-none min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
