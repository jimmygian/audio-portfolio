"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { selectTheme } from "@/store/features/userPreferences/userPreferencesSelector";
import { setTheme } from "@/store/features/userPreferences/userPreferencesSlice";
// import { ThemeType } from "@/types";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme); // Get the current theme from the Redux store

  // Apply the theme on initial load
  useEffect(() => {
    dispatch(setTheme(theme))
  }, [dispatch, theme]);

  return <div>{children}</div>;
}
