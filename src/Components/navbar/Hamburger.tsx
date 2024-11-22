import React from "react";

export default function Hamburger({
  setNavOpen,
  navOpen,
}: {
  setNavOpen: (navOpen: boolean) => void;
  navOpen: boolean;
}) {
  return (
    <div>
      {" "}
      <div
        onClick={() => setNavOpen(!navOpen)}
        className="menu relative cursor-pointer w-[36px] h-[34px] z-[9999] transition-all duration-300"
      >
        {/* Top Line */}
        <span
          className={`line-1 h-[3px] w-[50%] transform origin-center rounded-md absolute    transition-all duration-300 ${
            navOpen
              ? "rotate-45 top-[35%] left-[15%] -translate-x-[15%] -translate-y-[35%] bg-white dark:bg-background"
              : "top-0 left-0 dark:bg-white  bg-black"
          }`}
        ></span>

        {/* Middle Line */}
        <span
          className={`line-2 h-[3px] w-[100%] transform origin-center rounded-md absolute  transition-all duration-300 ${
            navOpen
              ? "-rotate-45 top-[50%] left-0 bg-white dark:bg-background"
              : "top-[50%] left-0 -translate-y-[50%] dark:bg-white  bg-black"
          }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`line-3 h-[3px] w-[50%] transform origin-center rounded-md absolute  transition-all duration-300 ${
            navOpen
              ? "rotate-45 bottom-[26%] right-[13%] bg-white dark:bg-background translate-y-[26%] translate-x-[13%]"
              : "bottom-0 right-0 dark:bg-white bg-black"
          }`}
        ></span>
      </div>
    </div>
  );
}
