import { type IDataArmor } from "../../data";

export interface IArmorsProps {
  grouped: boolean;
  nonSet: IDataArmor[];
  nonUpgradable: IDataArmor[];
  nonUpgradableNonSet: IDataArmor[];
  set: IDataArmor[];
}
