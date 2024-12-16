import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSection, setHasScrolled } from "@/store/features/pageStats/pageStatsSlice";
import { debounce } from "@/lib/debounce";
import { ThresholdValue } from "@/types";


interface useTrackInterface {
  sections: string[],
  debounceDelay: number,
  thresholdArr: ThresholdValue[]
}


// const thresArr: ThresholdValue[] = [];
// for (let i = 0; i < 100; i++) {
//     thresArr.push(Number(`0.${i}`) as ThresholdValue)
// }


/**
 * Custom hook to track the active section of a page using Intersection Observer.
 * The hook observes each section (id) provided and debounces the dispatch of the active section state to Redux.
 *
 * @param {Object} params - The input parameters for the hook.
 * - sections: array of all the ID's we want to track
*/
export const useTrackSections = ({sections, debounceDelay=200, thresholdArr}: useTrackInterface) => {
    const dispatch = useDispatch();
    const lastUpdatedSection = useRef<string | null>(null); // To track the last updated section
  
    // Debounced dispatch for setting the section
    const debouncedSetSection = debounce((currentSection: string) => {
      lastUpdatedSection.current = currentSection;
      dispatch(setSection(currentSection));
    }, debounceDelay);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target.getAttribute("id")!);
  
          if (visibleSections.length > 0) {
            const currentSection = visibleSections[0];
  
            if (currentSection !== lastUpdatedSection.current) {
              debouncedSetSection(currentSection);
            }
          }
        },
        {
          root: null, // viewport
          rootMargin: "0px",
          threshold: thresholdArr, // Trigger when 50% of the section is visible
        }
      );
  
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
  
      return () => {
        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (element) observer.unobserve(element);
        });
      };
    }, [sections, dispatch, debouncedSetSection, thresholdArr]);
  };



 export const useScrollTracker = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      let ticking = false;
  
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const isScrolled = window.scrollY > 0;
            dispatch(setHasScrolled(isScrolled));
            ticking = false;
          });
          ticking = true;
        }
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [dispatch]);
  };