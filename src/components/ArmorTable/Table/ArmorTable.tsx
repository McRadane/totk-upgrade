import type { FC } from "react";
import { FormattedMessage } from "react-intl";

import type { IArmorsProps } from "../types";

import { ArmorTableHead } from "./ArmorTableHead";
import { RowTable } from "./RowTable";

export const ArmorTable: FC<IArmorsProps> = ({ grouped, nonSet, nonUpgradable, nonUpgradableNonSet, set }) => {
  if (!grouped) {
    return (
      <div className="table-responsive">
        <table className="table table-sm">
          <ArmorTableHead />
          <tbody>{set.length > 0 && set.map((armor) => <RowTable armor={armor} key={armor.id} />)}</tbody>
        </table>
      </div>
    );
  }
  return (
    <div className="table-responsive">
      <table className="table table-sm">
        <ArmorTableHead />
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
