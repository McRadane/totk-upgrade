import { armors } from "../data";
import { IArmor } from "../reducers/armors";

export const calculateListItems = (
  armorsState: IArmor[]
): [string, number, number][] => {
  const items: Record<string, { selection: number; all: number }> = {};

  armors.forEach((armorData) => {
    const armor = armorsState.find((a) => a.name === armorData.name) as IArmor;

    if (armorData && armorData.rank1) {
      const materialsSelection = [];
      const materialsAll = [];
      const getStatus = getActiveStatus(armor);
      const getStatusAll = getActiveStatus({ ...armor, wanted: 4 });

      const status1 = getStatus(1);
      if (status1) {
        materialsSelection.push(...armorData.rank1);
      }

      const status1All = getStatusAll(1);

      if (status1All) {
        materialsAll.push(...armorData.rank1);
      }

      if (armorData.rank2) {
        const status2 = getStatus(2);
        if (status2) {
          materialsSelection.push(...armorData.rank2);
        }

        const status2All = getStatusAll(2);

        if (status2All) {
          materialsAll.push(...armorData.rank2);
        }
      }

      if (armorData.rank3) {
        const status3 = getStatus(3);
        if (status3) {
          materialsSelection.push(...armorData.rank3);
        }

        const status3All = getStatusAll(3);

        if (status3All) {
          materialsAll.push(...armorData.rank3);
        }
      }

      if (armorData.rank4) {
        const status4 = getStatus(4);
        if (status4) {
          materialsSelection.push(...armorData.rank4);
        }

        const status4All = getStatusAll(4);

        if (status4All) {
          materialsAll.push(...armorData.rank4);
        }
      }

      materialsSelection.forEach(([name, count]) => {
        if (!items[name]) {
          items[name] = { selection: 0, all: 0 };
        }

        items[name].selection += count;
      });

      materialsAll.forEach(([name, count]) => {
        if (!items[name]) {
          items[name] = { selection: 0, all: 0 };
        }

        items[name].all += count;
      });
    }
  });

  const array: [string, number, number][] = Object.keys(items).map((name) => [
    name,
    items[name].selection ?? 0,
    items[name].all ?? 0,
  ]);

  return array.sort((a, b) => a[0].localeCompare(b[0]));
};

export const getActiveStatus = (armor: IArmor) => (rank: number) => {
  if (armor.wanted < rank) {
    return false;
  }

  if (armor.ownedLevel >= rank) {
    return false;
  }

  return true;
};

import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
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
}

export default useMediaQuery;
