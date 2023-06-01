import { FC } from "react";
import { RowList } from "./RowList";
import { IArmorsProps } from "../types";

export const ArmorList: FC<IArmorsProps> = ({ armors }) => {
  return (
    <div className="cards-list">
      {armors.map((armor) => (
        <RowList key={armor.name} armor={armor} />
      ))}
    </div>
  );
};
