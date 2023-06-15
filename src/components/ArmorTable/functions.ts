import { type IDataArmor } from "../../data";
import { type IArmor } from "../../redux/armors";

export interface IFiltersOptions {
  armors: IDataArmor[];
  armorsState: IArmor[];
  hidden?: boolean;
  text?: string;
}

export const filterArmors = ({ armors, armorsState, hidden, text }: IFiltersOptions) => {
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

      return true;
    });
  }

  return filtered;
};

export const sortArmor = (a: IDataArmor, b: IDataArmor) => {
  if (a.set !== undefined && b.set !== undefined) {
    const setCompare = a.set.localeCompare(b.set);

    if (setCompare !== 0) {
      return setCompare;
    }
  }

  return a.name.localeCompare(b.name);
};
