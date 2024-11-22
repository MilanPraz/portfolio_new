import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function SocialMediaHandles() {
  return (
    <div className=" flex flex-col ">
      <div className=" flex gap-4 items-center justify-center w-full">
        <Link
          href={"https://github.com/MilanPraz"}
          target="_blank"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
          className="border p-2 rounded-full"
        >
          <Github size={16} className=" drop-shadow-xl" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/milan-praz-a565ba270/"}
          target="_blank"
          className="border p-2 rounded-full"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <Linkedin size={16} />
        </Link>

        <Link
          href={"mailto:mln.praz12@gmail.com"}
          className="border p-2 rounded-full"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <Mail size={16} />
        </Link>
      </div>
      <footer className="text-center py-4  text-xs text-gray-600">
        © 2024 Milan Prajapati. All rights reserved.
      </footer>
    </div>
  );
}
