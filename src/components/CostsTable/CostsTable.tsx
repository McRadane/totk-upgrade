import { useCallback, useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import { setHideNoCost } from "../../redux/navigation";
import type { IRootState } from "../../redux/store";
import { calculateListItems } from "../functions";

import { CostsCell } from "./CostsCell";

export const CostsTable = () => {
  const armorsState = useSelector((state: IRootState) => state.armors.armors);
  const hideNoCost = useSelector((state: IRootState) => state.navigation.hideNoCost);
  const dispatch = useDispatch();
  const intl = useIntl();

  const { costs, filterLocked } = useMemo(() => {
    const costsMemo = calculateListItems(armorsState, intl);

    const resultsFiltered = costsMemo.items.filter((cost) => cost.selection.sum !== 0);

    if (hideNoCost) {
      if (resultsFiltered.length > 0) {
        return {
          costs: { ...costsMemo, items: resultsFiltered },
          filterLocked: false
        };
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
            <th scope="col">
              <FormattedMessage id="material" defaultMessage="Material" />
            </th>
            <th scope="col">
              <FormattedMessage id="countSelection" defaultMessage="Count (Selection)" />
            </th>
            <th scope="col">
              <FormattedMessage id="countAll" defaultMessage="Count (All Armors)" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <FormattedMessage id="rupeeCostUpgrade" defaultMessage="Rupee (upgrades)" />
            </th>
            <td>
              <CostsCell id={`selection-rupee`} element={costs.rupee.selection} />
            </td>
            <td>
              <CostsCell id={`all-rupee`} element={costs.rupee.all} />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <FormattedMessage id="rupeeCostBuy" defaultMessage="Rupee (armor prices)" />
            </th>
            <td>
              <CostsCell id={`selection-rupee-buy`} element={costs.rupeeBuy.selection} />
            </td>
            <td>
              <CostsCell id={`all-rupee-buy`} element={costs.rupeeBuy.all} />
            </td>
          </tr>
          {costs.items.map(({ all, id, name, selection, slug }) => (
            <tr key={id}>
              <th scope="row">{name}</th>
              <td>
                <CostsCell id={`selection-${slug}`} element={selection} />
              </td>
              <td>
                <CostsCell id={`all-${slug}`} element={all} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
