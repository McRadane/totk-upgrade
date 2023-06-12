import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type IRootState } from "../../configureStore";
import { setHideArmors } from "../../reducers/navigation";

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
            id="flexSwitchHideArmors"
            checked={hideArmors}
            className="form-check-input"
            onChange={onChangeHideArmors}
            role="switch"
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="flexSwitchHideArmors">
            Filter armors
          </label>
        </div>

        <div className="input-group">
          <div className="form-outline">
            <input
              id="searchFilter"
              className="form-control"
              onChange={onChangeTextFilter}
              type="search"
              value={textFilter}
            />
            <label className="form-label" htmlFor="searchFilter">
              Search
            </label>
          </div>
          <button aria-label="Start search" className="btn btn-primary" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
};
