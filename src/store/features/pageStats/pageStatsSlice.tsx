import { pageStatsType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Set Initial State
const initialState: pageStatsType = {
    currentPage: "",
    currentSection: "",
    hasScrolled: false,
  };


const pageStatsSlice = createSlice({
  name: "pageStats",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
    setSection(state, action: PayloadAction<string>) {
      state.currentSection = action.payload;
    },
    setHasScrolled(state, action: PayloadAction<boolean>) {
      state.hasScrolled = action.payload;
    },
  },
});


export const { setPage, setSection, setHasScrolled } = pageStatsSlice.actions;
export default pageStatsSlice.reducer;
