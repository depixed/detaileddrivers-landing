import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DetailedDrivers - Global Executive Transportation Excellence",
  description: "Experience precision in motion worldwide. DetailedDrivers offers unparalleled chauffeur service across major global cities where every detail is managed with meticulous care for discerning clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased bg-[#121212] text-[#F5F5F5] font-lato`}
      >
        {children}
      </body>
    </html>
  );
}