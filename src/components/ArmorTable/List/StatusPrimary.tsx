import { type FC, useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../../data";
import { setHidden, setHiddenNonUpgradable, setOwned, setOwnedNonUpgradable, useArmorStatus } from "../../../redux/armors";

export interface IStatusProps {
  armor: IDataArmor;
}

export const StatusPrimary: FC<IStatusProps> = ({ armor }) => {
  const status = useArmorStatus(armor.id);
  const dispatch = useDispatch();

  const slug = useMemo(() => armor.name.replace(/[^a-z]/g, ""), [armor.name]);

  const onChangeOwned = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (armor.rank1 !== undefined) {
        dispatch(setOwned([armor.name, event.target.checked]));
      } else {
        dispatch(setOwnedNonUpgradable([armor.name, event.target.checked]));
      }
    },
    [armor.name, armor.rank1, dispatch]
  );

  const onChangeHidden = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (armor.rank1 !== undefined) {
        dispatch(setHidden([armor.name, event.target.checked]));
      } else {
        dispatch(setHiddenNonUpgradable([armor.name, event.target.checked]));
      }
    },
    [armor.name, armor.rank1, dispatch]
  );
  return (
    <>
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor={`toggle-owned-${slug}`}>
          <FormattedMessage id="ownedQuestion" defaultMessage="Owned ?" />
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
          <FormattedMessage id="hiddenQuestion" defaultMessage="Hidden ?" />
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
