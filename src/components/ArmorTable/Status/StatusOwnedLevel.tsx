import { Slider, Stack } from "@mui/material";
import { type FC, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../../data";
import { setOwnedLevel, useArmorStatus } from "../../../redux/armors";

export interface IStatusOwnedLevelProps {
  armor: IDataArmor;
  disabled?: boolean;
}

export const StatusOwnedLevel: FC<IStatusOwnedLevelProps> = ({ armor, disabled }) => {
  const status = useArmorStatus(armor.id);
  const dispatch = useDispatch();

  const slug = useMemo(() => armor.id.replace(/[^a-z]/g, ""), [armor.id]);

  const onChangeOwnedLevel = useCallback(
    (_event: Event, value: number | number[]) => {
      if (Array.isArray(value)) {
        dispatch(setOwnedLevel([armor.id, value[0] as 0]));
      } else {
        dispatch(setOwnedLevel([armor.id, value as 0]));
      }
    },
    [armor.id, dispatch]
  );

  if (status.ownedLevel === undefined) {
    return null;
  }

  return (
    <Stack alignItems="center" direction="row" spacing={2} sx={{ mb: 1 }}>
      <Slider
        id={`slider-owned-${slug}`}
        className="slider"
        data-testid={`armor-${armor.id}-status-owned`}
        disabled={!status.owned || disabled}
        max={4}
        min={0}
        onChange={onChangeOwnedLevel}
        value={status.ownedLevel}
        marks
      />
      <span>{status.ownedLevel === 0 ? "-" : status.ownedLevel}</span>
    </Stack>
  );
};
