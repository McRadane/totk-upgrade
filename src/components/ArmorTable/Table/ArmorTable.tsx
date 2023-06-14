import type { FC } from "react";
import { FormattedMessage } from "react-intl";

import type { IArmorsProps } from "../types";

import { RowTable } from "./RowTable";

export const ArmorTable: FC<IArmorsProps> = ({ nonSet, nonUpgradable, nonUpgradableNonSet, set }) => {
  return (
    <div className="table-responsive">
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">
              <FormattedMessage id="armorPiece" defaultMessage="Armor Piece" />
            </th>
            <th scope="col">
              <FormattedMessage id="armorSet" defaultMessage="Set" />
            </th>
            <th colSpan={2} scope="col">
              <FormattedMessage id="status" defaultMessage="Status" />
            </th>
            <th scope="col">
              <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 1 }} />{" "}
              <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 10 }} />
            </th>
            <th scope="col">
              <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 2 }} />{" "}
              <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 50 }} />
            </th>
            <th scope="col">
              <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 3 }} />{" "}
              <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 200 }} />
            </th>
            <th scope="col">
              <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 4 }} />{" "}
              <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 500 }} />
            </th>
          </tr>
        </thead>
        <tbody>
          {set.length > 0 && (
            <>
              <tr>
                <td colSpan={7}>
                  <h2>
                    <FormattedMessage id="headerUpgradableSets" defaultMessage="Upgradable Sets" />
                  </h2>
                </td>
              </tr>
              {set.map((armor) => (
                <RowTable armor={armor} key={armor.id} />
              ))}
            </>
          )}
          {nonSet.length > 0 && (
            <>
              <tr>
                <td colSpan={7}>
                  <h2>
                    <FormattedMessage id="headerUpgradableItems" defaultMessage="Upgradable Items" />
                  </h2>
                </td>
              </tr>
              {nonSet.map((armor) => (
                <RowTable armor={armor} key={armor.id} />
              ))}
            </>
          )}
          {nonUpgradable.length > 0 && (
            <>
              <tr>
                <td colSpan={7}>
                  <h2>
                    <FormattedMessage id="headerNonUpgradableSets" defaultMessage="Non-Upgradable Sets" />
                  </h2>
                </td>
              </tr>
              {nonUpgradable.map((armor) => (
                <RowTable armor={armor} key={armor.id} />
              ))}
            </>
          )}
          {nonUpgradableNonSet.length > 0 && (
            <>
              <tr>
                <td colSpan={7}>
                  <h2>
                    <FormattedMessage id="headerNonUpgradableItems" defaultMessage="Non-Upgradable Items" />
                  </h2>
                </td>
              </tr>
              {nonUpgradableNonSet.map((armor) => (
                <RowTable armor={armor} key={armor.id} />
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};
