import { RootState } from "@/store/store"; // Adjust the import path based on where your store is defined
import { ThemeType } from "@/types";

export const selectTheme = (state: RootState): ThemeType => {
    return state.userPreferences.theme;
}