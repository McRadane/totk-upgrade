import { type FC, useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";

import { type IDataArmor } from "../../data";
import { setOwnedLevel, setWanted, useArmorStatus } from "../../redux/armors";

export interface IStatusProps {
  armor: IDataArmor;
}

export const Status: FC<IStatusProps> = ({ armor }) => {
  const status = useArmorStatus(armor.id);
  const dispatch = useDispatch();

  const slug = useMemo(() => armor.id.replace(/[^a-z]/g, ""), [armor.id]);

  const onChangeOwnedLevel = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const numberValue = Number.parseInt(event.target.value);
      dispatch(setOwnedLevel([armor.id, numberValue as 0]));
    },
    [armor.id, dispatch]
  );

  const onChangeWanted = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const numberValue = Number.parseInt(event.target.value);
      dispatch(setWanted([armor.id, numberValue as 0]));
    },
    [armor.id, dispatch]
  );

  if (status.wanted === undefined) {
    return <div className="status" />;
  }

  return (
    <div className="status">
      <div className="status-owned">
        <label className="form-label" htmlFor={`slider-owned-${slug}`}>
          <FormattedMessage id="statusOwned" defaultMessage="Owned" />
        </label>
        <input
          id={`slider-owned-${slug}`}
          className="form-range"
          data-testid={`armor-${armor.id}-status-owned`}
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
          <FormattedMessage id="statusWanted" defaultMessage="Wanted" />
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
