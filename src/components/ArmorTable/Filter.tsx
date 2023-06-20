import { type FC, useCallback } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import { setArmorsOrder, setHideArmors } from "../../redux/navigation";
import type { IRootState } from "../../redux/store";
import { TextFilter } from "../TextFilter";

export interface IFilterProps {
  updateTextFilter: (text: string) => void;
}

export const Filter: FC<IFilterProps> = ({ updateTextFilter }) => {
  const { armorsOrder, hideArmors } = useSelector((state: IRootState) => state.navigation);

  const dispatch = useDispatch();
  const intl = useIntl();

  const onChangeHideArmors = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setHideArmors(event.target.checked));
    },
    [dispatch]
  );

  const onSelectOrder = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setArmorsOrder(e.target.value as "alphabetical"));
    },
    [dispatch]
  );

  return (
    <>
      <div className="row text-start">
        <div className="col-6 col-sm-4 form-check form-switch">
          <input
            id="flexSwitchHideArmors"
            checked={hideArmors}
            className="form-check-input"
            onChange={onChangeHideArmors}
            role="switch"
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="flexSwitchHideArmors">
            <FormattedMessage id="filterArmors" defaultMessage="Filter armors" />
          </label>
        </div>

        <div className="col-6 col-sm-4 form-check form-switch">
          <select
            aria-label={intl.formatMessage({
              defaultMessage: "Armor order",
              id: "armorOrder"
            })}
            className="form-select"
            onChange={onSelectOrder}
            value={armorsOrder ?? "alphabetical-groups"}
          >
            <option value="alphabetical-groups">
              <FormattedMessage id="orderAlphabeticalGrouped" defaultMessage="Alphabetical with groups" />
            </option>
            <option value="alphabetical">
              <FormattedMessage id="orderAlphabetical" defaultMessage="Alphabetical" />
            </option>
            <option value="visible">
              <FormattedMessage id="orderGame" defaultMessage="Game" />
            </option>
          </select>
        </div>

        <div className="col-12 col-sm-4">
          <TextFilter updateTextFilter={updateTextFilter} />
        </div>
      </div>
    </>
  );
};
