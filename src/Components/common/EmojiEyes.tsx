"use client";
import React, { useEffect, useRef } from "react";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className=" flex items-center justify-center ">
      <div className="h-64 w-64 bg-gray-100 animate-pulse self-center mx-auto rounded-md"></div>
    </div>
  ), // Custom loading component
});
// import Lottie from "lottie-react";
import coder from "../Animation//codingguy.json";
import "./emoji.css";
import dynamic from "next/dynamic";
export default function EmojiEyes() {
  const eyeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      eyeRefs.current.forEach((eye) => {
        if (eye) {
          const rect = eye.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;
          const radian = Math.atan2(event.clientX - x, event.clientY - y);
          const rot = radian * (180 / Math.PI) * -1 + 270;
          eye.style.transform = `rotate(${rot}deg)`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="   md:flex-shrink-0">
      <div className="relative w-[350px] md:w-[380px] lg:w-[480px] ">
        <Lottie animationData={coder} width={380} />
        <div className=" h-56 w-56 lg:block hidden dark:bg-[#09090b] bg-white absolute -top-[30%] -translate-y-[30%] left-[50%] -translate-x-[50%]"></div>
        <section className=" lg:block hidden  absolute -top-[18%] -translate-y-[18%] left-[50%] -translate-x-[48%] scale-[0.4]">
          <div className="face-container ">
            <div className="eyes">
              <div
                className="eye"
                ref={(el) => {
                  if (el) eyeRefs.current[0] = el; // Assign the element to the first index of the ref array
                }}
              />
              <div
                className="eye"
                ref={(el) => {
                  if (el) eyeRefs.current[1] = el; // Assign the element to the second index
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
