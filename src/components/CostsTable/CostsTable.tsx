import { useCallback, useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import type { IRootState } from "../../configureStore";
import { setHideNoCost } from "../../reducers/navigation";
import { calculateListItems } from "../functions";


export const CostsTable = () => {
  const armorsState = useSelector((state: IRootState) => state.armors.armors);
  const hideNoCost = useSelector(
    (state: IRootState) => state.navigation.hideNoCost
  );
  const dispatch = useDispatch();
  const intl = useIntl();

  const { costs, filterLocked } = useMemo(() => {
    const costsMemo = calculateListItems(armorsState, intl);

    const resultsFiltered = costsMemo.filter((cost) => cost.selection !== 0);

    if (hideNoCost) {
      if (resultsFiltered.length > 0) {
        return { costs: resultsFiltered, filterLocked: false };
      }
    }

    return { costs: costsMemo, filterLocked: resultsFiltered.length === 0 };
  }, [armorsState, hideNoCost, intl]);

  const onChangeHideNoCost = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setHideNoCost(event.target.checked));
    },
    [dispatch]
  );

  return (
    <>
      <div className="container text-start">
        <div className="form-check form-switch">
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
      </div>

      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col"><FormattedMessage id="material" defaultMessage="Material" /></th>
            <th scope="col"><FormattedMessage id="countSelection" defaultMessage="Count (Selection)" /></th>
            <th scope="col"><FormattedMessage id="countAll" defaultMessage="Count (All Armors)" /></th>
          </tr>
        </thead>
        <tbody>
          {costs.map(({ all, id, name, selection }) => (
            <tr key={id}>
              <th scope="row">{name}</th>
              <td>{selection}</td>
              <td>{all}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
