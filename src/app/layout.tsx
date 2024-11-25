import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/Components/Header";
import ThemeProvider from "@/Providers/ThemeProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const parkinsans = localFont({
  src: "./fonts/Parkinsans.ttf",
  variable: "--font-parkinsans-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milanprajapati.com.np"),
  title: "Milan Prajapati - Fullstack Developer",
  description:
    "I'm Milan Prajapati, a Fullstack Developer proficient in TypeScript, React, Next.js, and NestJS. With a background in creating dynamic web applications and scalable solutions, I have worked on projects ranging from complex web applications to smooth animated landing pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${parkinsans.variable} antialiased font-parkinsans`}>
        <ThemeProvider>
          <div className=" flex flex-col">
            <Header />
            <div className=" flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
