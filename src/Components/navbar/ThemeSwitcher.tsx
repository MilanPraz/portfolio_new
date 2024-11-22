"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <div className=" flex-shrink-0">
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger className="   focus:outline-none ">
          <Moon
            // size={30}
            className="dark:hidden h-6 w-6 block text-black cursor-pointer"
          />
          <Sun
            // size={30}
            className="hidden h-6 w-6 dark:block text-[#ffb886] cursor-pointer"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 text-sm">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>

          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className=" text-xs font-semibold"
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className=" text-xs font-semibold"
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className=" text-xs font-semibold"
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
