import { type FC, useMemo } from "react";

import { type IDataArmor } from "../../../data";
import { useArmorStatus } from "../../../reducers/armors";
import { Status } from "../Status";
import { getActiveStatus } from "../../functions";
import { MaterialList } from "../MaterialList";

import { StatusPrimary } from "./StatusPrimary";

export interface IRowProps {
  armor: IDataArmor;
}

export const RowTable: FC<IRowProps> = ({ armor }) => {
  const status = useArmorStatus(armor.name);

  const activeStatus = useMemo(() => {
    return getActiveStatus(status);
  }, [status]);

  return (
    <tr>
      <th scope="row">{armor.name}</th>
      <td>{armor.set}</td>
      <td>
        <div className="status-button">
          <StatusPrimary armor={armor} />
        </div>
      </td>
      <td>
        <Status armor={armor} />
      </td>
      <td>
        <MaterialList active={activeStatus(1)} materials={armor.rank1} />
      </td>
      <td>
        <MaterialList active={activeStatus(2)} materials={armor.rank2} />
      </td>
      <td>
        <MaterialList active={activeStatus(3)} materials={armor.rank3} />
      </td>
      <td>
        <MaterialList active={activeStatus(4)} materials={armor.rank4} />
      </td>
    </tr>
  );
};
