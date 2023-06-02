import { type FC, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../../data";
import {
  setHidden,
  setOwned,
  useArmorStatus,
} from "../../../reducers/armors";

export interface IStatusProps {
  armor: IDataArmor;
}

export const StatusPrimary: FC<IStatusProps> = ({ armor }) => {
  const status = useArmorStatus(armor.name);
  const dispatch = useDispatch();

  const slug = useMemo(() => armor.name.replace(/[^a-z]/g, ""), [armor.name]);

  const onChangeOwned = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setOwned([armor.name, event.target.checked]));
    },
    [armor.name, dispatch]
  );

  const onChangeHidden = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setHidden([armor.name, event.target.checked]));
    },
    [armor.name, dispatch]
  );
  return (
    <>
      <div className="form-check form-switch">
      
        <label className="form-check-label" htmlFor={`toggle-owned-${slug}`}>
          Owned ?
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id={`toggle-owned-${slug}`}
          onChange={onChangeOwned}
          checked={status.owned}
        />
      </div>
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor={`toggle-hidden-${slug}`}>
          Hidden ?
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id={`toggle-hidden-${slug}`}
          onChange={onChangeHidden}
          checked={status.hidden}
        />
      </div>
    </>
  );
};
