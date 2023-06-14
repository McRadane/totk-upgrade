import { type FC, useMemo } from "react";
import { FormattedMessage } from "react-intl";

import { type IDataArmor } from "../../../data";
import { useArmorStatus } from "../../../reducers/armors";
import { getActiveStatus } from "../../functions";
import { MaterialList } from "../MaterialList";
import { Status } from "../Status";

import { StatusPrimary } from "./StatusPrimary";

export interface IRowProps {
  armor: IDataArmor;
}

export const RowList: FC<IRowProps> = ({ armor }) => {
  const status = useArmorStatus(armor.id);

  const activeStatus = useMemo(() => {
    return getActiveStatus(status);
  }, [status]);

  return (
    <section className="card">
      <div className="table-responsive card-body">
        <table className="table table-sm">
          <tbody>
            <tr>
              <th scope="col">
                <FormattedMessage id="armorName" defaultMessage="Name" />
              </th>
              <th scope="col">{armor.name}</th>
            </tr>

            <tr>
              <td>
                <FormattedMessage id="armorSet" defaultMessage="Set" />
              </td>
              <td>{armor.set}</td>
            </tr>

            <tr>
              <td>
                <FormattedMessage id="status" defaultMessage="Status" />
                <StatusPrimary armor={armor} />
              </td>
              <td>
                <Status armor={armor} />
              </td>
            </tr>

            <tr>
              <td>
                <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 1 }} />
                <br />
                <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 10 }} />
              </td>
              <td>
                <MaterialList active={activeStatus(1)} materials={armor.rank1} />
              </td>
            </tr>

            <tr>
              <td>
                <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 2 }} />
                <br />
                <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 50 }} />
              </td>
              <td>
                <MaterialList active={activeStatus(2)} materials={armor.rank2} />
              </td>
            </tr>

            <tr>
              <td>
                <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 3 }} />
                <br />
                <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 200 }} />
              </td>
              <td>
                <MaterialList active={activeStatus(3)} materials={armor.rank3} />
              </td>
            </tr>

            <tr>
              <td>
                <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 4 }} />
                <br />
                <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 500 }} />
              </td>
              <td>
                <MaterialList active={activeStatus(4)} materials={armor.rank4} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
