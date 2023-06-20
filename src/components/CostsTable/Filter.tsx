import { type FC, useCallback } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import { setHideNoCost, setMaterialsOrder, setSelectionFilter } from "../../redux/navigation";
import type { IRootState } from "../../redux/store";
import { TextFilter } from "../TextFilter";

export interface IFilterProps {
  filterLocked: boolean;
  updateTextFilter: (text: string) => void;
}

export const Filter: FC<IFilterProps> = ({ filterLocked, updateTextFilter }) => {
  const { hideNoCost, materialsOrder, selectionFilter } = useSelector((state: IRootState) => state.navigation);
  const intl = useIntl();

  const dispatch = useDispatch();

  const onSelectFilter = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSelectionFilter(e.target.value as "no"));
    },
    [dispatch]
  );

  const onSelectOrder = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setMaterialsOrder(e.target.value as "alphabetical"));
    },
    [dispatch]
  );

  const onChangeHideNoCost = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setHideNoCost(event.target.checked));
    },
    [dispatch]
  );

  return (
    <>
      <div className="row text-start">
        <div className="col-6 col-lg-3 form-check form-switch">
          <input
            id="flexSwitchHideNoCost"
            checked={hideNoCost}
            className="form-check-input"
            disabled={filterLocked && !hideNoCost}
            onChange={onChangeHideNoCost}
            role="switch"
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="flexSwitchHideNoCost">
            <FormattedMessage id="filterMaterials" defaultMessage="Filter materials" />
          </label>
        </div>
        <div className="col-6 col-lg-3 form-check form-switch">
          <select
            aria-label={intl.formatMessage({
              defaultMessage: "Filter selection",
              id: "filterSelection"
            })}
            className="form-select"
            onChange={onSelectFilter}
            value={selectionFilter ?? "no"}
          >
            <option value="no">
              <FormattedMessage id="filterSelectionNo" defaultMessage="No filter" />
            </option>
            <option value="owned">
              <FormattedMessage id="filterSelectionOwned" defaultMessage="Owned" />
            </option>
            <option value="visible">
              <FormattedMessage id="filterSelectionVisible" defaultMessage="Visible" />
            </option>
            <option value="visible-owned">
              <FormattedMessage id="filterSelectionVisibleOwned" defaultMessage="Visible and owned" />
            </option>
          </select>
        </div>
        <div className="col-6 col-lg-3 form-check form-switch">
          <select
            aria-label={intl.formatMessage({
              defaultMessage: "Material order",
              id: "materialsOrder"
            })}
            className="form-select"
            onChange={onSelectOrder}
            value={materialsOrder ?? "alphabetical"}
          >
            <option value="alphabetical">
              <FormattedMessage id="orderAlphabetical" defaultMessage="Alphabetical" />
            </option>
            <option value="visible">
              <FormattedMessage id="orderGame" defaultMessage="Game" />
            </option>
          </select>
        </div>

        <div className="col-6 col-lg-3">
          <TextFilter updateTextFilter={updateTextFilter} />
        </div>
      </div>
    </>
  );
};
