import { type FC, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../data";
import {
  setOwnedLevel,
  setWanted,
  useArmorStatus,
} from "../../reducers/armors";

export interface IStatusProps {
  armor: IDataArmor;
}

export const Status: FC<IStatusProps> = ({ armor }) => {
  const status = useArmorStatus(armor.name);
  const dispatch = useDispatch();

  const slug = useMemo(() => armor.name.replace(/[^a-z]/g, ""), [armor.name]);

  const onChangeOwnedLevel = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const numberValue = Number.parseInt(event.target.value);
      dispatch(setOwnedLevel([armor.name, numberValue as 0]));
    },
    [armor.name, dispatch]
  );

  const onChangeWanted = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const numberValue = Number.parseInt(event.target.value);
      dispatch(setWanted([armor.name, numberValue as 0]));
    },
    [armor.name, dispatch]
  );

  return (
    <div className="status">
      <div className="status-owned">
        <label className="form-label" htmlFor={`slider-owned-${slug}`}>
          Owned
        </label>
        <input
          id={`slider-owned-${slug}`}
          className="form-range"
          disabled={!status.owned}
          max="4"
          min="0"
          onChange={onChangeOwnedLevel}
          type="range"
          value={status.ownedLevel}
        />
        <span>{status.ownedLevel === 0 ? "-" : status.ownedLevel}</span>
      </div>
      <div className="status-wanted">
        <label className="form-label" htmlFor={`slider-wanted-${slug}`}>
          Wanted
        </label>
        <input
          id={`slider-wanted-${slug}`}
          className="form-range"
          max="4"
          min="0"
          onChange={onChangeWanted}
          type="range"
          value={status.wanted}
        />
        <span>{status.wanted === 0 ? "-" : status.wanted}</span>
      </div>
    </div>
  );
};
