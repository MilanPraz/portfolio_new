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
          <SocialMediaHandles />
        </div>
      </section>
    </div>
  );
}
