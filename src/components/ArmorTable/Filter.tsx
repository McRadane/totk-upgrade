import SearchIcon from "@mui/icons-material/Search";
import { FormControlLabel, InputAdornment, Stack, Switch, TextField } from "@mui/material";
import { type FC, useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { setHideArmors } from "../../redux/navigation";
import { type IRootState } from "../../redux/store";

export interface IFilterProps {
  updateTextFilter: (text: string) => void;
}

export const Filter: FC<IFilterProps> = ({ updateTextFilter }) => {
  const hideArmors = useSelector((state: IRootState) => state.navigation.hideArmors);
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
      <Stack direction="row" justifyContent="space-between">
        <FormControlLabel
          control={<Switch checked={hideArmors} onChange={onChangeHideArmors} />}
          label={<FormattedMessage id="filterArmors" defaultMessage="Filter armors" />}
        />

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          label={<FormattedMessage id="searchArmors" defaultMessage="Search" />}
          onChange={onChangeTextFilter}
          type="search"
          value={textFilter}
          variant="standard"
        />
      </Stack>
    </>
  );
};
