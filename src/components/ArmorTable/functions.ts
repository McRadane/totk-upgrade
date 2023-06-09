import { type IDataArmor } from "../../data";
import { type IArmor, type IArmorWithoutUpgrade } from "../../redux/armors";

export interface IFiltersOptions {
  armors: IDataArmor[];
  armorsState: IArmor[];
  armorsStateNonUpgradable: IArmorWithoutUpgrade[];
  hidden?: boolean;
  text?: string;
}

export const filterArmors = ({ armors, armorsState, armorsStateNonUpgradable, hidden, text }: IFiltersOptions) => {
  if (!text && !hidden) {
    return armors;
  }

  let filtered = [...armors];

  if (text) {
    filtered = filtered.filter((armor) => {
      if (armor.set) {
        return armor.name.toLowerCase().includes(text) || armor.set.toLowerCase().includes(text) || armor.id.toLowerCase().includes(text);
      }
      return armor.name.toLowerCase().includes(text) || armor.id.toLowerCase().includes(text);
    });
  }

  if (hidden) {
    filtered = filtered.filter((armor) => {
      const status = armorsState.find((stat) => stat.id === armor.id);

      if (status) {
        return !status.hidden;
      }

      const statusNonUpgradable = armorsStateNonUpgradable.find((stat) => stat.id === armor.id);

      if (statusNonUpgradable) {
        return !statusNonUpgradable.hidden;
      }

      return true;
    });
  }

  return filtered;
};

export const sortArmorAlphabetical = (a: IDataArmor, b: IDataArmor) => {
  if (a.set !== undefined && b.set !== undefined) {
    const setCompare = a.set.localeCompare(b.set);

    if (setCompare !== 0) {
      return setCompare;
    }
  }

  return a.name.localeCompare(b.name);
};

export const sortArmorGame = (a: IDataArmor, b: IDataArmor) => {
  return a.order - b.order;
};
