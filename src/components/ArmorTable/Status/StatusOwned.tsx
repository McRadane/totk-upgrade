import { FormControlLabel, Switch } from "@mui/material";
import { type FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../../data";
import { setOwned, useArmorStatus } from "../../../redux/armors";

export interface IStatusOwnedProps {
  armor: IDataArmor;
  disabled?: boolean;
}

export const StatusOwned: FC<IStatusOwnedProps> = ({ armor, disabled }) => {
  const status = useArmorStatus(armor.id);
  const dispatch = useDispatch();

  const onChangeOwned = useCallback(() => {
    dispatch(setOwned([armor.id, !status.owned]));
  }, [armor.id, dispatch, status.owned]);

  return (
    <FormControlLabel
      control={<Switch checked={status.owned} disabled={disabled} onChange={onChangeOwned} />}
      //label={disabled ? undefined : <CheckIcon opacity={status.owned ? 1 : 0.5} />}
      label={undefined}
    />
  );
};
