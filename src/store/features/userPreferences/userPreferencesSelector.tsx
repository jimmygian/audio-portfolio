import { RootState, ThemeType } from "@/types";

export const selectTheme = (state: RootState): ThemeType => {
    return state.userPreferences.theme;
}