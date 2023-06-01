import { FC, useCallback } from "react";
import { IDataArmor } from "../../../data";
import { useDispatch } from "react-redux";
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

  const onChangeOwned = useCallback(() => {
    dispatch(setOwned([armor.name, !status.owned]));
  }, [armor.name, dispatch, status.owned]);

  const onChangeHidden = useCallback(() => {
    dispatch(setHidden([armor.name, !status.hidden]));
  }, [armor.name, dispatch, status.hidden]);
  //
  return (
    <>
      <button
        type="button"
        className={`btn btn-outline-primary btn-sm btn-floating ${
          status.owned ? "active" : ""
        }`}
        onClick={onChangeOwned}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary btn-sm btn-floating ${
          status.hidden ? "active" : ""
        }`}
        onClick={onChangeHidden}
      >
        <i className="fas fa-eye-slash"></i>
      </button>
    </>
  );
};
