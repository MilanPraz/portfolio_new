"use client";
import React, { useState } from "react";

import Link from "next/link";
import ThemeSwitcher from "./navbar/ThemeSwitcher";
import { MessageCircleMore } from "lucide-react";
import Hamburger from "./navbar/Hamburger";
import Image from "next/image";
import { useTheme } from "next-themes";

const navLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About Me",
    to: "/about-me",
  },
  {
    title: "Blogs",
    to: "/blogs",
  },
  {
    title: "Portfolio",
    to: "/portfolio",
  },
  {
    title: "Say Hi ",
    to: "/contact",
  },
];

export default function Header() {
  const { theme } = useTheme();
  console.log("THEMEMEME:", theme);

  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className=" flex   justify-between 2xl:container px-4  py-4">
      <Link href={"/"} className=" dark:hidden block">
        <Image
          src="/signature.png"
          alt="sign"
          className=" w-20"
          width={120}
          height={120}
        />
      </Link>
      <Link href={"/"} className="hidden dark:block">
        <Image
          src="/white-sign.png"
          alt="sign"
          className=" w-20 "
          width={120}
          height={120}
        />
      </Link>

      <div className=" flex gap-8 items-center ">
        <ThemeSwitcher />
        <Hamburger setNavOpen={setNavOpen} navOpen={navOpen} />
        {/* NAVCONTETNT SHOW HERE */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-500 ${
            navOpen ? " clip-path-circle-open " : "clip-path-circle-close"
          }   `}
        >
          <ul className=" flex  flex-col dark:text-background  text-muted bg-black dark:bg-white gap-12 justify-center items-center h-full text-5xl font-thin">
            {navLinks.map((l, idx) => {
              if (l.to === "/contact") {
                return (
                  <li key={idx}>
                    <Link
                      className="flex relative  gap-4 items-center  before:absolute before:h-[2px] before:w-0 hover:before:w-full before:bg-white before:bottom-0 before:transition-all before:duration-300"
                      onClick={() => setNavOpen(false)}
                      href={l.to}
                    >
                      {l.title}
                      <MessageCircleMore size={50} strokeWidth={1.5} />
                    </Link>
                  </li>
                );
              }
              return (
                <li key={idx}>
                  <Link
                    className="relative before:absolute before:h-[2px] before:w-0 hover:before:w-full before:bg-white before:bottom-0 before:transition-all before:duration-300"
                    onClick={() => setNavOpen(false)}
                    href={l.to}
                  >
                    {l.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
