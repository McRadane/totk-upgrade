import { armors } from "../../data";
import { type IArmor } from "../../reducers/armors";

export interface IFiltersOptions {
  armorsState: IArmor[];
  hidden?: boolean;
  text?: string;
}

export const filterArmors = ({
  armorsState,
  hidden,
  text,
}: IFiltersOptions) => {
  if (!text && !hidden) {
    return armors;
  }

  let filtered = [...armors];

  if (text) {
    filtered = filtered.filter((armor) => armor.name.toLowerCase().includes(text));
  }

  if (hidden) {
    filtered = filtered.filter((armor) => {
      const status = armorsState.find((stat) => stat.name === armor.name);

      if (status) {
        return !status.hidden;
      }

      return true;
    });
  }

  return filtered;
};
