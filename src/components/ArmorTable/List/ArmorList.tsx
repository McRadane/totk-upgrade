import { type FC } from "react";

import { type IArmorsProps } from "../types";

import { RowList } from "./RowList";

export const ArmorList: FC<IArmorsProps> = ({ armors }) => {
  return (
    <div className="cards-list">
      {armors.map((armor) => (
        <RowList key={armor.name} armor={armor} />
      ))}
    </div>
  );
};
