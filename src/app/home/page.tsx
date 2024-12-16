import React from "react";
import Link from "next/link";
import TrackedPage from "@/app/_components/trackedPage";

export default function Home() {
  return (
    <TrackedPage
      pageName="home"
      sections={["section1", "section2", "section3"]}
      className="h-full w-full"
    >
      <div id="section1" className="full-center">
        {/* Title / Subtitle */}
        <h1
          className={`
            font-monsterratRegular
            font-bold
            text-[2rem] sm:text-[3rem] landscape-sm:text-[2rem]
            font-[700]
            tracking-tighter
            max-w-[700px] landscape-sm:max-w-[75%]
            mx-5
          `}
        >
          Crafting Exceptional Audio Experiences
        </h1>
        <h3
          className={`
            mt-10
            text-[1.05rem] landscape-sm:text-[1.05rem] sm:text-xl 
            leading-7 landscape-sm:leading-5 sm:leading-8 
            font-monsterratRegular
            max-w-[800px] landscape-sm:max-w-[65%]
            mx-4 sm:mx-5
          `}
        >
          Audio Engineer & musician with 3+ years of industry experience in
          Audio Post. Recording, creative sound designing, and mixing for TV,
          Radio, and social media.
        </h3>

        {/* Summary */}

        <div
          className={`
        mt-12
        font-monsterratRegular
        flex
        flex-col sm:flex-row min-[420px]:flex-row landscape-sm:flex-row
        flex-wrap  
      `}
        >
          <Link href="/audio-post">
            <button className="m-2 w-[8.3rem] h-[3.1rem] bg-slate-500">
              Explore Work
            </button>
          </Link>
          <Link href="/">
            <button className="m-2 w-[8.2rem] h-[3rem] border-[0.1em]">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div id="section2" className="full-center bg-slate-300">
        HI!
      </div>
      <div id="section3" className="full-center bg-slate-600">
        HI!
      </div>
    </TrackedPage>
  );
}
