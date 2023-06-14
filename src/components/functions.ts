import { useEffect, useState } from "react";
import type { IntlShape } from "react-intl";

import { getArmors, getMaterials } from "../data";
import { type IArmor } from "../reducers/armors";

interface IItems {
  all: number;
  selection: number;
}
export interface ICalculatedItems extends IItems {
  id: string;
  name: string;
}

export const calculateListItems = (
  armorsState: IArmor[],
  intl: IntlShape
): { items: ICalculatedItems[]; rupee: IItems; rupeeBuy: IItems } => {
  const items: Record<string, { all: number; name: string; selection: number }> = {};
  const rupee: IItems = { all: 0, selection: 0 };
  const rupeeBuy: IItems = { all: 0, selection: 0 };

  const armors = getArmors(intl);
  const materials = getMaterials(intl);

  armors.forEach((armorData) => {
    const armor = armorsState.find((a) => a.id === armorData.id) as IArmor;

    if (armor && armorData && armorData.rank1) {
      const materialsSelection = [];
      const materialsAll = [];
      const getStatus = getActiveStatus(armor);
      const getStatusAll = getActiveStatus({ ...armor, wanted: 4 });

      const status1 = getStatus(1);
      if (status1) {
        materialsSelection.push(...armorData.rank1);
        rupee.selection += 10;
      }

      const status1All = getStatusAll(1);

      if (status1All) {
        materialsAll.push(...armorData.rank1);
        rupee.all += 10;
      }

      if (armorData.rank2) {
        const status2 = getStatus(2);
        if (status2) {
          materialsSelection.push(...armorData.rank2);
          rupee.selection += 50;
        }

        const status2All = getStatusAll(2);

        if (status2All) {
          materialsAll.push(...armorData.rank2);
          rupee.all += 50;
        }
      }

      if (armorData.rank3) {
        const status3 = getStatus(3);
        if (status3) {
          materialsSelection.push(...armorData.rank3);
          rupee.selection += 200;
        }

        const status3All = getStatusAll(3);

        if (status3All) {
          materialsAll.push(...armorData.rank3);
          rupee.all += 200;
        }
      }

      if (armorData.rank4) {
        const status4 = getStatus(4);
        if (status4) {
          materialsSelection.push(...armorData.rank4);
          rupee.selection += 500;
        }

        const status4All = getStatusAll(4);

        if (status4All) {
          materialsAll.push(...armorData.rank4);
          rupee.all += 500;
        }
      }

      materialsSelection.forEach(([id, count]) => {
        const name = materials.find((material) => material.id === id)?.name ?? id;

        if (!items[name]) {
          items[name] = { all: 0, name, selection: 0 };
        }

        items[name].selection += count;
      });

      materialsAll.forEach(([id, count]) => {
        const name = materials.find((material) => material.id === id)?.name ?? id;
        if (!items[name]) {
          items[name] = { all: 0, name, selection: 0 };
        }

        items[name].all += count;
      });
    }
  });

  const array: ICalculatedItems[] = Object.keys(items).map((id) => ({
    all: items[id].all ?? 0,
    id: id,
    name: id,
    selection: items[id].selection ?? 0
  }));

  return {
    items: array.sort((a, b) => a.name.localeCompare(b.name)),
    rupee,
    rupeeBuy
  };
};

export const getActiveStatus = (armor: IArmor) => (rank: number) => {
  if (!armor || armor.wanted === undefined || armor.ownedLevel === undefined) {
    //console.log({ armor });
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
