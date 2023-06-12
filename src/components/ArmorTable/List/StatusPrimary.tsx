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
          id={`toggle-owned-${slug}`}
          checked={status.owned}
          className="form-check-input"
          onChange={onChangeOwned}
          role="switch"
          type="checkbox"
        />
      </div>
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor={`toggle-hidden-${slug}`}>
          Hidden ?
        </label>
        <input
          id={`toggle-hidden-${slug}`}
          checked={status.hidden}
          className="form-check-input"
          onChange={onChangeHidden}
          role="switch"
          type="checkbox"
        />
      </div>
    </>
  );
};
