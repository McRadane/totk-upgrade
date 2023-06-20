import type { FC } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import type { IItemsCounts } from "./functions";

import "mdb-ui-kit";

export interface ICostsCellProps {
  element: IItemsCounts;
  id: string;
}

export const CostsCell: FC<ICostsCellProps> = ({ element, id }) => {
  return (
    <>
      <FormattedNumber value={element.sum} />
      {element.sum > 0 && (
        <>
          {" "}
          <a aria-controls={id} aria-expanded="false" data-mdb-toggle="collapse" href={`#${id}`} role="button">
            (<FormattedMessage id="menuArmor" defaultMessage="Armor" />)
          </a>
          <div id={id} className="collapse mt-3">
            <ul className="list-group list-group-light">
              {element.items.map((armorDetails) => (
                <li className="list-group-item" key={armorDetails[0]}>
                  {armorDetails[0]} <span className="badge bg-primary rounded-pill">{armorDetails[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
