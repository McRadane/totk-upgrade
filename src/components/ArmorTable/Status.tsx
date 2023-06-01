import { FC, useCallback, useMemo } from "react";
import { IDataArmor } from "../../data";
import { useDispatch } from "react-redux";
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
        <label htmlFor={`slider-owned-${slug}`} className="form-label">
          Owned
        </label>
        <input
          type="range"
          className="form-range"
          id={`slider-owned-${slug}`}
          min="0"
          max="4"
          value={status.ownedLevel}
          onChange={onChangeOwnedLevel}
          disabled={!status.owned}
        />
        <span>{status.ownedLevel === 0 ? "-" : status.ownedLevel}</span>
      </div>
      <div className="status-wanted">
        <label htmlFor={`slider-wanted-${slug}`} className="form-label">
          Wanted
        </label>
        <input
          type="range"
          className="form-range"
          id={`slider-wanted-${slug}`}
          min="0"
          max="4"
          value={status.wanted}
          onChange={onChangeWanted}
        />
        <span>{status.wanted === 0 ? "-" : status.wanted}</span>
      </div>
    </div>
  );
};
