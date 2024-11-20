"use client";

import React from "react";


export default function Home() {
  return (
    <div
      className={`
          flex 
          flex-col
          justify-center
          items-center
          m-4
          sm:m-2`}
    >
      {/* Title / Subtitle */}
      <h1
        className={`
          font-bold
          text-4xl
        `}
      >
        Dimitris Giannoulis
      </h1>
      <h3
        className={`
          text-xl
        `}
      >
        Audio Engineer
      </h3>

      {/* Summary */}
      <div
        className={`
            flex
            flex-col
            my-16
            mx-2
            max-w-[800px]
        `}
      >
        <p className={`mb-2`}>
          Audio Engineer & musician with 3+ years of industry experience in
          Audio Post.
        </p>
        <p className={`mb-12`}>
          Recording, creative sound designing, and mixing for TV, Radio, and
          social media. Creative experience includes producing music for artists
          and composing bespoke music for visual media.
        </p>
        <p className={``}>
          Worked in projects for top-tier clients including Spotify, Audible,
          Tonies, and Paddy Power.
        </p>
      </div>

      {/* 'Explore' Buttons */}
      <div
        className={`
          flex
          flex-col
          justify-center
          items-center
          m-2
        `}
      >
        <h3
          className={`
            text-sm
            mb-2
          `}
        >
          Explore Projects
        </h3>

        <button
          className={`
            px-6 py-[0.45rem] 
            bg-gray-500 
            text-white 
            rounded-xl 
            hover:bg-gray-600 
            mb-1
            text-lg 
          `}
        >
          Audio Post
        </button>
        <button
          className={`
            px-6 py-[0.45rem]
            bg-gray-500 
            text-white 
            rounded-xl 
            hover:bg-gray-600
            text-lg 
          `}
        >
          Music
        </button>
      </div>


    </div>
  );
}
