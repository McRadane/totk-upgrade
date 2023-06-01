import { FC } from "react";
import { RowTable } from "./RowTable";
import { IArmorsProps } from "../types";

export const ArmorTable: FC<IArmorsProps> = ({ armors }) => {
  return (
    <div className="table-responsive">
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Armor Piece</th>
            <th scope="col">Set</th>
            <th scope="col" colSpan={2}>Status</th>
            <th scope="col">1 Star Cost (10 Rupees)</th>
            <th scope="col">2 Star Cost (50 Rupees)</th>
            <th scope="col">3 Star Cost (200 Rupees)</th>
            <th scope="col">4 Star Cost (500 Rupees)</th>
          </tr>
        </thead>
        <tbody>
          {armors.map((armor) => (
            <RowTable key={armor.name} armor={armor} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
