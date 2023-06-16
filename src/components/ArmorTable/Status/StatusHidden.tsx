import { FormControlLabel, Switch } from "@mui/material";
import { type FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../../data";
import { setHidden, useArmorStatus } from "../../../redux/armors";

export interface IStatusHiddenProps {
  armor: IDataArmor;
  disabled?: boolean;
}

export const StatusHidden: FC<IStatusHiddenProps> = ({ armor, disabled }) => {
  const status = useArmorStatus(armor.id);
  const dispatch = useDispatch();

  const onChangeOwned = useCallback(() => {
    dispatch(setHidden([armor.id, !status.hidden]));
  }, [armor.id, dispatch, status.hidden]);

  return (
    <FormControlLabel
      control={<Switch checked={status.owned} disabled={disabled} onChange={onChangeOwned} />}
      // label={disabled ? undefined : <VisibilityOffIcon opacity={status.owned ? 1 : 0.5} />}
      label={undefined}
    />
  );
};
