import { faCheck, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type FC, useCallback } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../../data";
import { setHidden, setOwned, useArmorStatus } from "../../../reducers/armors";

export interface IStatusProps {
  armor: IDataArmor;
}

export const StatusPrimary: FC<IStatusProps> = ({ armor }) => {
  const status = useArmorStatus(armor.name);
  const dispatch = useDispatch();

  const intl = useIntl();

  const onChangeOwned = useCallback(() => {
    dispatch(setOwned([armor.name, !status.owned]));
  }, [armor.name, dispatch, status?.owned]);

  const onChangeHidden = useCallback(() => {
    dispatch(setHidden([armor.name, !status.hidden]));
  }, [armor.name, dispatch, status?.hidden]);
  //
  return (
    <>
      <button
        aria-label={intl.formatMessage({
          defaultMessage: "Toggle owned status",
          id: "toggleOwnedStatus",
        })}
        className={`btn btn-outline-primary btn-sm btn-floating ${
          status.owned ? "active" : ""
        }`}
        onClick={onChangeOwned}
        type="button"
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        aria-label={intl.formatMessage({
          defaultMessage: "Toggle hidden status",
          id: "toggleHiddenStatus",
        })}
        className={`btn btn-outline-primary btn-sm btn-floating ${
          status.hidden ? "active" : ""
        }`}
        onClick={onChangeHidden}
        type="button"
      >
        <FontAwesomeIcon icon={faEyeSlash} />
      </button>
    </>
  );
};
