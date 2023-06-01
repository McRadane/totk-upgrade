import { useDispatch, useSelector } from "react-redux";
import { calculateListItems } from "../functions";
import { IRootState } from "../../configureStore";
import { useCallback, useMemo } from "react";
import { setHideNoCost } from "../../reducers/navigation";

export const CostsTable = () => {
  const armorsState = useSelector((state: IRootState) => state.armors.armors);
  const hideNoCost = useSelector(
    (state: IRootState) => state.navigation.hideNoCost
  );
  const dispatch = useDispatch();

  const { costs, filterLocked } = useMemo(() => {
    const costsMemo = calculateListItems(armorsState);

    const resultsFiltered = costsMemo.filter((cost) => cost[1] !== 0);

    if (hideNoCost) {
      
      if (resultsFiltered.length > 0) {
        return { costs: resultsFiltered, filterLocked: false };
      }
    }

    return { costs: costsMemo, filterLocked: resultsFiltered.length === 0 };
  }, [armorsState, hideNoCost]);

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
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchHideNoCost"
            checked={hideNoCost}
            onChange={onChangeHideNoCost}
            disabled={filterLocked && !hideNoCost}
          />
          <label className="form-check-label" htmlFor="flexSwitchHideNoCost">
            Filter materials
          </label>
        </div>
      </div>

      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Material</th>
            <th scope="col">Count (Selection)</th>
            <th scope="col">Count (All Armors)</th>
          </tr>
        </thead>
        <tbody>
          {costs.map(([name, countSelection, countAll]) => (
            <tr>
              <th scope="row">{name}</th>
              <td>{countSelection}</td>
              <td>{countAll}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
