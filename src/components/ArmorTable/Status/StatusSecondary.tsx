import { type FC } from "react";

import { type IDataArmor } from "../../../data";

import { StatusOwnedLevel } from "./StatusOwnedLevel";
import { StatusWanted } from "./StatusWanted";

export interface IStatusProps {
  armor: IDataArmor;
}

export const Status: FC<IStatusProps> = ({ armor }) => {
  return (
    <div className="status">
      <StatusOwnedLevel armor={armor} />

      <StatusWanted armor={armor} />
    </div>
  );
};
