import { ThemeType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userPreferencesType {
  theme: ThemeType;
}

// INITIAL STATES
const initialState: userPreferencesType = {
  theme: "none",
};

// USER PREFERENCES SLICE
export const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Step 1: Determine the current theme
      let currentTheme: ThemeType = state.theme;

      // Step 2: If the state is "none", check localStorage
      if (currentTheme === "none" && typeof window !== "undefined") {
        const localStorageTheme = window.localStorage.getItem(
          "theme"
        ) as ThemeType | null;
        currentTheme = localStorageTheme || currentTheme;
      }

      // Step 3: If no valid theme is found, check system preferences
      if (currentTheme === "none" && typeof window !== "undefined") {
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }

      // Step 4: Default to "light" if still "none", or toggle the theme
      const newTheme: ThemeType =
        currentTheme === "dark"
          ? "light"
          : currentTheme === "light"
          ? "dark"
          : "light";

      // Step 5: Update state and apply the new theme
      state.theme = newTheme;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", newTheme);
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(newTheme);
      }
    },
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      let newTheme = action.payload;

      // Step 1: Check if the theme is valid (either "dark" or "light")
      if (newTheme !== "dark" && newTheme !== "light") {
        // Step 2: If the provided theme is invalid (e.g., "none"), check localStorage
        if (typeof window !== "undefined") {
          const localStorageTheme = window.localStorage.getItem(
            "theme"
          ) as ThemeType | null;
          newTheme = localStorageTheme || newTheme;
        }
      }

      // Step 3: If still invalid, fall back to system preferences
      if (
        newTheme !== "dark" &&
        newTheme !== "light" &&
        typeof window !== "undefined"
      ) {
        newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }

      // Step 4: Default to "light" if all else fails
      if (newTheme !== "dark" && newTheme !== "light") {
        newTheme = "light";
      }

      // Step 5: Update state and apply the theme
      state.theme = newTheme;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", newTheme);
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(newTheme);
      }
    },
  },
});

// Export actions
export const { toggleTheme, setTheme } = userPreferencesSlice.actions;

// Export reducer
export default userPreferencesSlice.reducer;
