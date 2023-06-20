import type { IntlShape } from "react-intl";

import { getArmors, getMaterials } from "../../data";
import type { IArmor } from "../../redux/armors";
import { getActiveStatus, getSlug } from "../functions";

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
  order: number;
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

export interface ICalculateListItemsOptions {
  armorsState: IArmor[];
  intl: IntlShape;
  order?: "alphabetical" | "game";
  selectionFilter?: "no" | "owned" | "visible" | "visible-owned";
  text: string;
}

export const calculateListItems = ({
  armorsState,
  intl,
  order,
  selectionFilter,
  text
}: ICalculateListItemsOptions): { items: ICalculatedItems[]; rupee: IItems; rupeeBuy: IItems } => {
  const items: Record<string, { all: IItemCounts[]; order: number; selection: IItemCounts[] }> = {};
  const rupeeCount: { all: IItemCounts[]; selection: IItemCounts[] } = { all: [], selection: [] };
  const rupeeBuyCount: { all: IItemCounts[]; selection: IItemCounts[] } = { all: [], selection: [] };

  let armorsFiltered = [...getArmors(intl)];
  const materials = getMaterials(intl);

  if (selectionFilter && selectionFilter !== "no") {
    armorsFiltered = armorsFiltered.filter((armor) => {
      const armorStateFound = armorsState.find((a) => a.id === armor.id) as IArmor;
      if (!armorStateFound) {
        return false;
      }
      switch (selectionFilter) {
        case "owned":
          return armorStateFound.owned;
        case "visible":
          return !armorStateFound.hidden;
        case "visible-owned":
          return armorStateFound.owned && !armorStateFound.hidden;
      }

      return true;
    });
  }

  armorsFiltered.forEach((armorData) => {
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
        const material = materials.find((material) => material.id === id);

        const name = `${material?.name ?? id}`;

        if (!items[name]) {
          items[name] = { all: [], order: material?.order ?? 999, selection: [] };
        }

        items[name].selection.push([armorData.name, count]);
      });

      materialsAll.forEach(([id, count]) => {
        const material = materials.find((material) => material.id === id);

        const name = `${material?.name ?? id}`;
        if (!items[name]) {
          items[name] = { all: [], order: material?.order ?? 999, selection: [] };
        }
        items[name].all.push([armorData.name, count]);
      });
    }
  });

  const array: ICalculatedItems[] = Object.keys(items).map((id) => {
    const all: IItemsCounts = deduplicateItems(items[id].all);
    const selection: IItemsCounts = deduplicateItems(items[id].selection);

    return {
      all,
      id,
      name: id,
      order: items[id].order,
      selection,
      slug: getSlug(id)
    };
  });

  const rupeeAll = deduplicateItems(rupeeCount.all);
  const rupeeSelection = deduplicateItems(rupeeCount.selection);

  const rupeeBuyAll = deduplicateItems(rupeeBuyCount.all);
  const rupeeBuySelection = deduplicateItems(rupeeBuyCount.selection);

  return {
    items: array
      .filter((material) => {
        if (text) {
          return material.name.toLowerCase().includes(text);
        }

        return true;
      })
      .sort((a, b) => {
        if (!order || order === "alphabetical") {
          return a.name.localeCompare(b.name);
        }
        return a.order - b.order;
      }),
    rupee: { all: rupeeAll, selection: rupeeSelection },
    rupeeBuy: { all: rupeeBuyAll, selection: rupeeBuySelection }
  };
};
