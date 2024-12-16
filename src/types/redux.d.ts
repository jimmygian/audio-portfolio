// Imported from store so that they can be exorted in types
export { AppDispatch, RootState } from "@/store/store";

// ==== //

export interface pageStatsType {
  currentPage: string; // e.g., "home"
  currentSection: string; // e.g., "section4"
  hasScrolled: boolean; // true if scrolled, false if at the top
}
