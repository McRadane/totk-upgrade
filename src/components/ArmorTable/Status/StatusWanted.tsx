import { Slider, Stack } from "@mui/material";
import { type FC, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../../data";
import { setWanted, useArmorStatus } from "../../../redux/armors";

export interface IStatusWantedProps {
  armor: IDataArmor;
  disabled?: boolean;
}

export const StatusWanted: FC<IStatusWantedProps> = ({ armor, disabled }) => {
  const status = useArmorStatus(armor.id);
  const dispatch = useDispatch();

  const slug = useMemo(() => armor.id.replace(/[^a-z]/g, ""), [armor.id]);

  const onChangeWanted = useCallback(
    (_event: Event, value: number | number[]) => {
      if (Array.isArray(value)) {
        dispatch(setWanted([armor.id, value[0] as 0]));
      } else {
        dispatch(setWanted([armor.id, value as 0]));
      }
    },
    [armor.id, dispatch]
  );

  if (status.wanted === undefined) {
    return null;
  }

  return (
    <Stack alignItems="center" direction="row" spacing={2} sx={{ mb: 1 }}>
      <Slider
        id={`slider-wanted-${slug}`}
        data-testid={`armor-${armor.id}-status-wanted`}
        disabled={!status.owned || disabled}
        max={4}
        min={0}
        onChange={onChangeWanted}
        value={status.wanted}
        marks
      />
      <span>{status.wanted === 0 ? "-" : status.wanted}</span>
    </Stack>
  );
};
