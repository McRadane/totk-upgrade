import { type FC } from "react";
import { FormattedMessage } from "react-intl";

import { type IArmorsProps } from "../types";

import { RowList } from "./RowList";

export const ArmorList: FC<IArmorsProps> = ({ nonSet, nonUpgradable, nonUpgradableNonSet, set }) => {
  return (
    <div className="cards-list">
      {set.length > 0 && (
        <>
          <h2>
            <FormattedMessage id="headerUpgradableSets" defaultMessage="Upgradable Sets" />
          </h2>

          {set.map((armor) => (
            <RowList armor={armor} key={armor.id} />
          ))}
        </>
      )}
      {nonSet.length > 0 && (
        <>
          <h2>
            <FormattedMessage id="headerUpgradableItems" defaultMessage="Upgradable Items" />
          </h2>
          {nonSet.map((armor) => (
            <RowList armor={armor} key={armor.id} />
          ))}
        </>
      )}
      {nonUpgradable.length > 0 && (
        <>
          <h2>
            <FormattedMessage id="headerNonUpgradableSets" defaultMessage="Non-Upgradable Sets" />
          </h2>

          {nonUpgradable.map((armor) => (
            <RowList armor={armor} key={armor.id} />
          ))}
        </>
      )}
      {nonUpgradableNonSet.length > 0 && (
        <>
          <h2>
            <FormattedMessage id="headerNonUpgradableItems" defaultMessage="Non-Upgradable Items" />
          </h2>
          {nonUpgradableNonSet.map((armor) => (
            <RowList armor={armor} key={armor.id} />
          ))}
        </>
      )}
    </div>
  );
};
