import { type IDataArmor } from "../../data";

export interface IArmorsProps {
  nonSet: IDataArmor[];
  nonUpgradable: IDataArmor[];
  nonUpgradableNonSet: IDataArmor[];
  set: IDataArmor[];
}
