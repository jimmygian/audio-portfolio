import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/types";

export const getCounterValue = createSelector(
  // input selectors (we can have more than 1 of them)
  // Selectors can use the imported `RootState` type
  (state: RootState) => state.counter.value,
  // Output selector
  (value: number | undefined) => (value ?? 0) // nullish coalescing operator for better safety
);
