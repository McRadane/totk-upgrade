import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type FC, useCallback, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useDebouncedCallback } from "use-debounce";

export interface ITextFilterProps {
  updateTextFilter: (text: string) => void;
}

export const TextFilter: FC<ITextFilterProps> = ({ updateTextFilter }) => {
  const [textFilter, setTextFilter] = useState("");
  const intl = useIntl();

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
    <div className="input-group">
      <div className="form-outline">
        <input id="searchFilter" className="form-control" onChange={onChangeTextFilter} type="search" value={textFilter} />
        <label className="form-label" htmlFor="searchFilter">
          <FormattedMessage id="searchArmors" defaultMessage="Search" />
        </label>
      </div>
      <button
        aria-label={intl.formatMessage({
          defaultMessage: "Start Search",
          id: "startSearch"
        })}
        className="btn btn-primary"
        type="button"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
