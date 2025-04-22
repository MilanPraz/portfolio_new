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
  title: "Milan Prajapati - Fullstack Developer | TypeScript, React, Next.js Expert",
  description:
    "I'm Milan Prajapati, a Fullstack Developer proficient in TypeScript, React, Next.js, and NestJS. With a background in creating dynamic web applications and scalable solutions, I have worked on projects ranging from complex web applications to smooth animated landing pages.",
  keywords: [
    "Milan Prajapati",
    "Fullstack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "Web Development",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Milan Prajapati" }],
  creator: "Milan Prajapati",
  publisher: "Milan Prajapati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milanprajapati.com.np",
    title: "Milan Prajapati - Fullstack Developer | TypeScript, React, Next.js Expert",
    description: "I'm Milan Prajapati, a Fullstack Developer proficient in TypeScript, React, Next.js, and NestJS. With a background in creating dynamic web applications and scalable solutions, I have worked on projects ranging from complex web applications to smooth animated landing pages.",
    siteName: "Milan Prajapati Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Prajapati - Fullstack Developer | TypeScript, React, Next.js Expert",
    description: "I'm Milan Prajapati, a Fullstack Developer proficient in TypeScript, React, Next.js, and NestJS. With a background in creating dynamic web applications and scalable solutions.",
    creator: "@milanprajapati",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
