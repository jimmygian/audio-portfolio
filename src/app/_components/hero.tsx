import React from "react";

interface HeroProps {
  hHeight?: number;
  title?: string;
  subtitle?: string;
}

const defProps: HeroProps = {
  hHeight: 80,
  title: "Hero Title",
  subtitle: "Place a subtitle that defines the purpose of this hero section.",
};

export default function Hero({
  hHeight = defProps.hHeight,
  title = defProps.title,
  subtitle = defProps.subtitle,
}: HeroProps) {
  return (
    <section
      style={{ height: `${hHeight}vh` }}
      className={`
        relative
        flex
        flex-col
        justify-center
        items-center
        m-10
      `}
    >
      {/* Hero Title */}
      <h1
        className={`text-[3rem] md:text-[4rem] md:max-w-[50rem] leading-10 mb-5`}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <h4 className={`text-[1.1rem] md:text-[1.4rem] md:max-w-[60rem] mx-3`}>
        {subtitle}
      </h4>

      {/* Button */}
      <button className={`absolute bottom-2`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="74px"
          viewBox="0 -960 960 960"
          width="64px"
          fill="none"
          stroke="#111111"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            fill="black"
            d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
          />
        </svg>
      </button>
    </section>
  );
}
