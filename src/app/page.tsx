import EmojiEyes from "@/Components/common/EmojiEyes";
import SocialMediaHandles from "@/Components/common/SocialMediaHandles";

export default function Home() {
  return (
    <div className=" 2xl:container h-[calc(100vh-120px)] sm:h-[calc(100vh-100px)] flex flex-col relative items-center justify-center ">
      {/* <div className=" flex bg-green-600"> */}
      <section className="flex md:flex-row flex-col items-center justify-center  place-items-center gap-4 px-4 sm:px-8 ">
        <EmojiEyes />
        {/* MY DETAILS */}
        <div className=" text-center space-y-8">
          <div className=" space-y-2">
            <h2 className=" text-4xl text-gray-900 dark:text-white">Milan Prajapati</h2>
            <p className=" text-gray-700 dark:text-gray-300 text-xl">
              Full Stack Developer
            </p>
          </div>
          <p className=" text-gray-600 dark:text-gray-400 text-sm">
            Designing seamless solutions for intricate challenges. Committed to
            writing clean, efficient code, enhancing user experiences, and
            fostering ongoing growth and learning.
          </p>
          <button
            aria-label="Download CV"
            className=" mt-4 sm:mt-0 w-full sm:w-fit px-4 py-4  rounded-full text-white min-h-[48px] min-w-[48px]"
          >
            <a 
              href={"/milan_prajapati.pdf"} 
              download="Milan Prajapati CV"
              aria-label="Download Milan Prajapati's CV"
              className="block w-full h-full"
            >
              <span className="block px-8 py-3 text-sm bg-slate-900 dark:bg-slate-50 rounded-full hover:bg-black   dark:text-black text-white transition-colors duration-200">
                Download CV
              </span>
            </a>
          </button>
          <SocialMediaHandles />
        </div>
      </section>
    </div>
  );
}
