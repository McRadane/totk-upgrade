import { useEffect, useState } from "react";
import type { IntlShape } from "react-intl";

import { getArmors, getMaterials } from "../data";
import { type IArmor } from "../redux/armors";

type IItemCounts = [string, number];
export interface IItemsCounts {
  items: IItemCounts[];
  sum: number;
}
interface IItems {
  all: IItemsCounts;
  selection: IItemsCounts;
}
export interface ICalculatedItems extends IItems {
  id: string;
  name: string;
  slug: string;
}

export const deduplicateItems = (items: IItemCounts[]): IItemsCounts => {
  const deduplicatedItems: Record<string, number> = {};
  let totalSum = 0;

  for (const [item, value] of items) {
    if (deduplicatedItems[item] !== undefined) {
      (deduplicatedItems[item] as number) += value;
    } else {
      deduplicatedItems[item] = value;
    }
  }

  const deduplicatedItemsArray: [string, number][] = [];
  for (const item in deduplicatedItems) {
    deduplicatedItemsArray.push([item, deduplicatedItems[item] as number]);
    totalSum += deduplicatedItems[item] as number;
  }

  return { items: deduplicatedItemsArray.sort((a, b) => a[0].localeCompare(b[0])), sum: totalSum };
};

export const calculateListItems = (
  armorsState: IArmor[],
  intl: IntlShape
): { items: ICalculatedItems[]; rupee: IItems; rupeeBuy: IItems } => {
  const items: Record<string, { all: IItemCounts[]; name: string; selection: IItemCounts[] }> = {};
  const rupeeCount: { all: IItemCounts[]; selection: IItemCounts[] } = { all: [], selection: [] };
  const rupeeBuyCount: { all: IItemCounts[]; selection: IItemCounts[] } = { all: [], selection: [] };

  const armors = getArmors(intl);
  const materials = getMaterials(intl);

  armors.forEach((armorData) => {
    const armor = armorsState.find((a) => a.id === armorData.id) as IArmor;

    if (armor && armorData && armorData.rank1) {
      const materialsSelection = [];
      const materialsAll = [];
      const getStatus = getActiveStatus(armor);
      const getStatusAll = getActiveStatus({ ...armor, wanted: 4 });

      if (!armor.owned && armorData.buyPrice !== undefined) {
        rupeeBuyCount.all.push([armorData.name, armorData.buyPrice]);
      }

      const status1 = getStatus(1);
      if (status1) {
        materialsSelection.push(...armorData.rank1);

        rupeeCount.selection.push([armorData.name, 10]);

        if (!armor.owned && armorData.buyPrice !== undefined) {
          rupeeBuyCount.selection.push([armorData.name, armorData.buyPrice]);
        }
      }

      const status1All = getStatusAll(1);

      if (status1All) {
        materialsAll.push(...armorData.rank1);

        rupeeCount.all.push([armorData.name, 10]);
      }

      if (armorData.rank2) {
        const status2 = getStatus(2);
        if (status2) {
          materialsSelection.push(...armorData.rank2);

          rupeeCount.selection.push([armorData.name, 50]);
        }

        const status2All = getStatusAll(2);

        if (status2All) {
          materialsAll.push(...armorData.rank2);

          rupeeCount.all.push([armorData.name, 50]);
        }
      }

      if (armorData.rank3) {
        const status3 = getStatus(3);
        if (status3) {
          materialsSelection.push(...armorData.rank3);

          rupeeCount.selection.push([armorData.name, 200]);
        }

        const status3All = getStatusAll(3);

        if (status3All) {
          materialsAll.push(...armorData.rank3);

          rupeeCount.all.push([armorData.name, 200]);
        }
      }

      if (armorData.rank4) {
        const status4 = getStatus(4);
        if (status4) {
          materialsSelection.push(...armorData.rank4);

          rupeeCount.selection.push([armorData.name, 500]);
        }

        const status4All = getStatusAll(4);

        if (status4All) {
          materialsAll.push(...armorData.rank4);

          rupeeCount.all.push([armorData.name, 500]);
        }
      }

      materialsSelection.forEach(([id, count]) => {
        const name = materials.find((material) => material.id === id)?.name ?? id;

        if (!items[name]) {
          items[name] = { all: [], name, selection: [] };
        }

        items[name].selection.push([armorData.name, count]);
      });

      materialsAll.forEach(([id, count]) => {
        const name = materials.find((material) => material.id === id)?.name ?? id;
        if (!items[name]) {
          items[name] = { all: [], name, selection: [] };
        }
        items[name].all.push([armorData.name, count]);
      });
    }
  });

  const array: ICalculatedItems[] = Object.keys(items).map((id) => {
    /*const armors = Array.from(
      new Set([...items[id].all.map(([armor]) => armor), ...items[id].selection.map(([armor]) => armor)])
    );*/

    const all: IItemsCounts = deduplicateItems(items[id].all);
    const selection: IItemsCounts = deduplicateItems(items[id].selection);

    return {
      all,
      id: id,
      name: id,
      selection,
      slug: getSlug(id)
    };
  });

  const rupeeAll = deduplicateItems(rupeeCount.all);
  const rupeeSelection = deduplicateItems(rupeeCount.selection);

  const rupeeBuyAll = deduplicateItems(rupeeBuyCount.all);
  const rupeeBuySelection = deduplicateItems(rupeeBuyCount.selection);

  return {
    items: array.sort((a, b) => a.name.localeCompare(b.name)),
    rupee: { all: rupeeAll, selection: rupeeSelection },
    rupeeBuy: { all: rupeeBuyAll, selection: rupeeBuySelection }
  };
};

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
