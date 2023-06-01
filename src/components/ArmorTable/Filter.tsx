import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../configureStore";
import { FC, useCallback, useState } from "react";
import { setHideArmors } from "../../reducers/navigation";
import { useDebouncedCallback } from "use-debounce";

export interface IFilterProps {
  updateTextFilter: (text: string) => void;
}

export const Filter: FC<IFilterProps> = ({ updateTextFilter }) => {
  const hideArmors = useSelector(
    (state: IRootState) => state.navigation.hideArmors
  );
  const [textFilter, setTextFilter] = useState("");
  const dispatch = useDispatch();

  const onChangeHideArmors = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setHideArmors(event.target.checked));
    },
    [dispatch]
  );

  const onChangeTextFilterDebounced = useDebouncedCallback((value: string) => {
    updateTextFilter(value);
  }, 500);

  const onChangeTextFilter = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextFilter(event.target.value);
      onChangeTextFilterDebounced(event.target.value.toLowerCase());
    },
    [onChangeTextFilterDebounced]
  );

  return (
    <>
      <div className="container text-start filters-group">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchHideArmors"
            checked={hideArmors}
            onChange={onChangeHideArmors}
          />
          <label className="form-check-label" htmlFor="flexSwitchHideArmors">
            Filter armors
          </label>
        </div>

        <div className="input-group">
          <div className="form-outline">
            <input
              type="search"
              id="searchFilter"
              className="form-control"
              onChange={onChangeTextFilter}
              value={textFilter}
            />
            <label className="form-label" htmlFor="searchFilter">
              Search
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};
