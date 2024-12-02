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
            <h2 className=" text-4xl">Milan Prajapati</h2>
            <p className=" text-muted-foreground text-xl">
              Full Stack Developer
            </p>
          </div>
          <p className=" text-muted-foreground text-sm">
            Designing seamless solutions for intricate challenges. Committed to
            writing clean, efficient code, enhancing user experiences, and
            fostering ongoing growth and learning.
          </p>
          <button
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.5 }}
            className=" bg-clip-border bg-[#ffb886]  mt-4   sm:mt-0 bg-transparent w-full sm:w-fit px-1 py-1 hover:bg-[#ffb886] rounded-full  text-white"
          >
            <a href={"/milan_prajapati.pdf"} download>
              <span className=" block px-6 py-2 text-sm bg-[#121212] rounded-full hover:bg-black">
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
