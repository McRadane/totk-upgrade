import { faCheck, faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type FC, useCallback } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../../data";
import { setHidden, setOwned, useArmorStatus } from "../../../redux/armors";

export interface IStatusProps {
  armor: IDataArmor;
}

export const StatusPrimary: FC<IStatusProps> = ({ armor }) => {
  const status = useArmorStatus(armor.id);
  const dispatch = useDispatch();

  const intl = useIntl();

  const onChangeOwned = useCallback(() => {
    dispatch(setOwned([armor.id, !status.owned]));
  }, [armor.id, dispatch, status.owned]);

  const onChangeHidden = useCallback(() => {
    dispatch(setHidden([armor.id, !status.hidden]));
  }, [armor.id, dispatch, status.hidden]);
  //
  return (
    <>
      <button
        aria-label={intl.formatMessage({
          defaultMessage: "Toggle owned status",
          id: "toggleOwnedStatus"
        })}
        className={`btn btn-outline-primary btn-sm btn-floating ${status.owned ? "active" : ""}`}
        onClick={onChangeOwned}
        onKeyDown={onChangeOwned}
        type="button"
      >
        <FontAwesomeIcon icon={status.owned ? faCheck : faXmark} />
      </button>
      <button
        aria-label={intl.formatMessage({
          defaultMessage: "Toggle hidden status",
          id: "toggleHiddenStatus"
        })}
        className={`btn btn-outline-primary btn-sm btn-floating ${status.hidden ? "active" : ""}`}
        onClick={onChangeHidden}
        onKeyDown={onChangeHidden}
        type="button"
      >
        <FontAwesomeIcon icon={status.hidden ? faEyeSlash : faEye} />
      </button>
    </>
  );
};
