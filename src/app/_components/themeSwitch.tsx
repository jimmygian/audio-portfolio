"use client";

import React from "react";
import { BsMoon, BsSun, BsThermometer } from "react-icons/bs";
import { ThemeType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { selectTheme } from "@/store/features/userPreferences/userPreferencesSelector";
import {
  toggleTheme,
} from "@/store/features/userPreferences/userPreferencesSlice";

type ThemeSwitchProps = {
  position?: "block";
};

export default function ThemeSwitch(props: ThemeSwitchProps) {
  const { position } = props;
  const theme: ThemeType = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  console.log(theme);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      aria-label="toggle theme mode"
      onClick={handleClick}
      className={`
        ${position ? position : "fixed"} 
        bottom-[4%]
        right-[10%]
        flex justify-center items-center
        w-[3rem] 
        h-[3rem]
        bg-zinc-50 
        bg-opacity-80 
        backdrop-blur[0.5rem] 
        border 
        border-white 
        border-opacity-70 
        shadow-2xl 
        rounded-full
        hover:scale-[1.15]
        hover:bg-zinc-100
        active:scale-105
        transition-all 
        dark:bg-zinc-950
        dark:hover:bg-zinc-900
        dark:border-opacity-10
      `}
    >
      {theme === "light" ? (
        <BsSun className={`w-[1.1rem]`} />
      ) : theme === "dark" ? (
        <BsMoon className={`w-[1.1rem]`} />
      ) : (
        <BsThermometer className={`w-[1.1rem]`} />
      )}
    </button>
  );
}
