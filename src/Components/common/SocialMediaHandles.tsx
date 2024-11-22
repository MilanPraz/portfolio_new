import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialMediaHandles() {
  return (
    <div className=" flex flex-col ">
      <div className=" flex gap-4 items-center justify-center w-full">
        <div
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
          className="border p-2 rounded-full"
        >
          <Github size={16} className=" drop-shadow-xl" />
        </div>
        <div
          className="border p-2 rounded-full"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <Linkedin size={16} />
        </div>

        <div
          className="border p-2 rounded-full"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <Mail size={16} />
        </div>
      </div>
      <footer className="text-center py-4  text-xs text-gray-600">
        © 2024 Milan Prajapati. All rights reserved.
      </footer>
    </div>
  );
}
