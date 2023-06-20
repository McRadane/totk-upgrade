import type { FC } from "react";
import { FormattedMessage } from "react-intl";

export const ArmorTableHead: FC = () => {
  return (
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
          <FormattedMessage id="starCost" defaultMessage="{num} Star" values={{ num: 1 }} />{" "}
          <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 10 }} />
        </th>
        <th scope="col">
          <FormattedMessage id="starCost" defaultMessage="{num} Star" values={{ num: 2 }} />{" "}
          <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 50 }} />
        </th>
        <th scope="col">
          <FormattedMessage id="starCost" defaultMessage="{num} Star" values={{ num: 3 }} />{" "}
          <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 200 }} />
        </th>
        <th scope="col">
          <FormattedMessage id="starCost" defaultMessage="{num} Star" values={{ num: 4 }} />{" "}
          <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 500 }} />
        </th>
      </tr>
    </thead>
  );
};
