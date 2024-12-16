"use client";

import { useTrackSections } from "@/lib/customHooks/hooks";
import { setPage } from "@/store/features/pageStats/pageStatsSlice";
import { useAppDispatch } from "@/store/reduxHooks";
import React, { useEffect } from "react";
import { ThresholdValue } from "@/types";

interface componentTypes {
  children: React.ReactNode;
  sections: string[];
  thresholdArr?: ThresholdValue[];
  debounceDelay?: number;
  pageName: string;
  className?: string;
}

export default function TrackedPage({
  children,
  sections,
  thresholdArr = [0.5],
  debounceDelay = 200,
  pageName,
  className = "",
}: componentTypes) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPage(pageName)); // Set the current page
  }, [dispatch, pageName]);

  useTrackSections({ sections, thresholdArr, debounceDelay }); // Track active sections
  // useScrollTracker(); // Track scroll state

  return <div className={className}>{children}</div>;
}
