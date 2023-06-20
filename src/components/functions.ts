import { useEffect, useState } from "react";

import { type IArmor } from "../redux/armors";

export const getActiveStatus = (armor: IArmor) => (rank: number) => {
  if (!armor || armor.wanted === undefined || armor.ownedLevel === undefined) {
    return false;
  }

  if (armor.wanted < rank) {
    return false;
  }

  if (armor.ownedLevel >= rank) {
    return false;
  }

  return true;
};

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

export const getSlug = (name: string) => name.toLowerCase().replace(/[^a-z]/g, "");
