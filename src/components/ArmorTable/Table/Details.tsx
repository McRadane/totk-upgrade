import { Container, Typography } from "@mui/material";
import type { FC } from "react";
import { FormattedMessage } from "react-intl";

import type { IDataArmor } from "../../../data";
import { MaterialList } from "../MaterialList";

export interface IDetailsProps {
  armor: IDataArmor;
}

export const Details: FC<IDetailsProps> = ({ armor }) => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3">
        <FormattedMessage id="material" defaultMessage="Material" />
      </Typography>
      <Typography variant="h4">
        <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 1 }} />{" "}
        <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 10 }} />
      </Typography>
      <MaterialList armor={armor} rank={1} />
      <Typography variant="h4">
        <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 2 }} />{" "}
        <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 50 }} />
      </Typography>
      <MaterialList armor={armor} rank={2} />
      <Typography variant="h4">
        <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 3 }} />{" "}
        <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 200 }} />
      </Typography>
      <MaterialList armor={armor} rank={3} />
      <Typography variant="h4">
        <FormattedMessage id="starCost" defaultMessage="{num} Star Cost" values={{ num: 4 }} />{" "}
        <FormattedMessage id="rupeesAmountParentheses" defaultMessage="({num} Rupees)" values={{ num: 500 }} />
      </Typography>
      <MaterialList armor={armor} rank={4} />
    </Container>
  );
};
