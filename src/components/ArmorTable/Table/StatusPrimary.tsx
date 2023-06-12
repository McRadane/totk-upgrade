import { faCheck, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type FC, useCallback } from "react";
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
        className={`btn btn-outline-primary btn-sm btn-floating ${
          status.owned ? "active" : ""
        }`}
        aria-label="Toggle owned status"
        onClick={onChangeOwned}
        type="button"
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        className={`btn btn-outline-primary btn-sm btn-floating ${
          status.hidden ? "active" : ""
        }`}
        aria-label="Toggle hidden status"
        onClick={onChangeHidden}
        type="button"
      >
        <FontAwesomeIcon icon={faEyeSlash} />
      </button>
    </>
  );
};
