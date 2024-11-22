import SocialMediaHandles from "@/Components/common/SocialMediaHandles";
import { Label } from "@/Components/ui/label";
import React from "react";

export default function page() {
  return (
    <div className="max-w-2xl mx-auto px-4  flex flex-col justify-between min-h-[calc(100vh-80px)]">
      <h2 className=" text-lg text-center mb-10">Say Hi! 👋</h2>
      <form className=" flex flex-col gap-10   ">
        <div className=" flex flex-col gap-2 ">
          <Label className=" text-sm font-thin">Fullname</Label>
          <input
            type="text"
            placeholder="Your name"
            className="border-[#e5eaf2] border-b outline-none px-4  py-3 focus:border-[#3B9DF8] transition-colors duration-300 dark:bg-transparent"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <Label className=" text-sm font-thin">Email</Label>
          <input
            type="text"
            placeholder="Your email"
            className="border-[#e5eaf2] border-b outline-none px-4  py-3 focus:border-[#3B9DF8] transition-colors duration-300 dark:bg-transparent"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <Label className=" text-sm font-thin">Message</Label>
          <textarea
            placeholder="Your name"
            className=" h-28 sm:min-h-40 border-[#e5eaf2] border-b outline-none px-4  py-3 focus:border-[#3B9DF8] transition-colors duration-300 dark:bg-transparent"
          />
        </div>
      </form>

      <SocialMediaHandles />
    </div>
  );
}
