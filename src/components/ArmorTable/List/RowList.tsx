import { FC, useMemo } from "react";
import { IDataArmor } from "../../../data";
import { useArmorStatus } from "../../../reducers/armors";
import { Status } from "../Status";
import { MaterialList } from "../MaterialList";
import { getActiveStatus } from "../../functions";

export interface IRowProps {
  armor: IDataArmor;
}

export const RowList: FC<IRowProps> = ({ armor }) => {
  const status = useArmorStatus(armor.name);

  const activeStatus = useMemo(() => {
    return getActiveStatus(status);
  }, [status]);

  return (
    <div className="table-responsive">
      <table className="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <th scope="row">{armor.name}</th>
          </tr>

          <tr>
            <td>Set</td>
            <td>{armor.set}</td>
          </tr>

          <tr>
            <td>Status</td>
            <td>
              <Status armor={armor} />
            </td>
          </tr>

          <tr>
            <td>
              1 Star Cost
              <br />
              (10 Rupees)
            </td>
            <td>
              <MaterialList active={activeStatus(1)} materials={armor.rank1} />
            </td>
          </tr>

          <tr>
            <td>
              2 Star Cost
              <br />
              (50 Rupees)
            </td>
            <td>
              <MaterialList active={activeStatus(2)} materials={armor.rank2} />
            </td>
          </tr>

          <tr>
            <td>
              3 Star Cost
              <br />
              (200 Rupees)
            </td>
            <td>
              <MaterialList active={activeStatus(3)} materials={armor.rank3} />
            </td>
          </tr>

          <tr>
            <td>
              4 Star Cost
              <br />
              (500 Rupees)
            </td>
            <td>
              <MaterialList active={activeStatus(4)} materials={armor.rank4} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
