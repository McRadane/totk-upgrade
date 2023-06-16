import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { Drawer, IconButton } from "@mui/material";
import { type FC, useCallback, useMemo, useState } from "react";
import { type IntlShape, useIntl } from "react-intl";

import type { IDataArmor } from "../../../data";
import { DataContainer } from "../../DataContainer";
import { type IComponentDisablerProps, type IData, TableScroller } from "../../TableScroller/TableScroller";
import { StatusHidden } from "../Status/StatusHidden";
import { StatusOwned } from "../Status/StatusOwned";
import { StatusOwnedLevel } from "../Status/StatusOwnedLevel";
import { StatusWanted } from "../Status/StatusWanted";
import type { IArmorsProps } from "../types";

import { Details } from "./Details";

type IColumns =
  | "materials"
  | "name"
  | "set"
  | "star1"
  | "star2"
  | "star3"
  | "star4"
  | "statusHidden"
  | "statusOwned"
  | "statusOwnedLevel"
  | "statusWanted";

interface ColumnData {
  dataKey: IColumns;
  label: string;
  numeric?: boolean;
  width?: number;
}

const getColumns = (intl: IntlShape): ColumnData[] => [
  {
    dataKey: "name",
    label: intl.formatMessage({ defaultMessage: "Armor Piece", id: "armorPiece" })
  },
  {
    dataKey: "set",
    label: intl.formatMessage({ defaultMessage: "Set", id: "armorSet" }),
    width: 120
  },
  {
    dataKey: "statusOwned",
    label: intl.formatMessage({ defaultMessage: "Owned ?", id: "statusOwned" }),
    width: 120
  },
  {
    dataKey: "statusHidden",
    label: intl.formatMessage({ defaultMessage: "Hidden", id: "statusHidden" }),
    width: 120
  },
  {
    dataKey: "statusOwnedLevel",
    label: intl.formatMessage({ defaultMessage: "Owned", id: "statusOwnedLevel" }),
    width: 200
  },
  {
    dataKey: "statusWanted",
    label: intl.formatMessage({ defaultMessage: "Wanted", id: "statusWanted" }),
    width: 200
  },
  {
    dataKey: "materials",
    label: intl.formatMessage({ defaultMessage: "Material", id: "material" }),
    width: 120
  }
];

export const ArmorTable: FC<IArmorsProps> = ({ nonSet, nonUpgradable, nonUpgradableNonSet, set }) => {
  const intl = useIntl();
  const columns = useMemo(() => getColumns(intl), [intl]);

  const [details, setDetails] = useState<IDataArmor | null>(null);

  const removeDetails = useCallback(() => {
    setDetails(null);
  }, []);

  const getDataFromArmor = useCallback(
    (armor: IDataArmor): IData => ({
      materials: ({ isScrolling }: IComponentDisablerProps) =>
        isScrolling ? (
          <></>
        ) : (
          <IconButton
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => {
              setDetails(armor);
            }}
            aria-label="open details"
          >
            <ImportContactsIcon />
          </IconButton>
        ),
      name: armor.name,

      set: armor.set,

      statusHidden: ({ isScrolling }: IComponentDisablerProps) => <StatusHidden armor={armor} disabled={isScrolling} />,

      statusOwned: ({ isScrolling }: IComponentDisablerProps) => <StatusOwned armor={armor} disabled={isScrolling} />,
      statusOwnedLevel: ({ isScrolling }: IComponentDisablerProps) => <StatusOwnedLevel armor={armor} disabled={isScrolling} />,
      statusWanted: ({ isScrolling }: IComponentDisablerProps) => <StatusWanted armor={armor} disabled={isScrolling} />
    }),
    []
  );

  const items = useMemo(() => {
    const data: IData[] = [];

    if (set.length > 0) {
      data.push({ name: { colSpan: 7, label: intl.formatMessage({ defaultMessage: "Upgradable Sets", id: "headerUpgradableSets" }) } });
      data.push(...set.map(getDataFromArmor));
    }

    if (nonSet.length > 0) {
      data.push({ name: { colSpan: 7, label: intl.formatMessage({ defaultMessage: "Upgradable Items", id: "headerUpgradableItems" }) } });
      data.push(...nonSet.map(getDataFromArmor));
    }

    if (nonUpgradable.length > 0) {
      data.push({
        name: { colSpan: 7, label: intl.formatMessage({ defaultMessage: "Non-Upgradable Sets", id: "headerNonUpgradableSets" }) }
      });
      data.push(...nonUpgradable.map(getDataFromArmor));
    }

    if (nonUpgradableNonSet.length > 0) {
      data.push({
        name: { colSpan: 7, label: intl.formatMessage({ defaultMessage: "Non-Upgradable Items", id: "headerNonUpgradableItems" }) }
      });
      data.push(...nonUpgradableNonSet.map(getDataFromArmor));
    }

    return data;
  }, [getDataFromArmor, intl, nonSet, nonUpgradable, nonUpgradableNonSet, set]);

  return (
    <>
      <DataContainer offset={88}>
        <TableScroller columns={columns} items={items as unknown as IData[]} />
      </DataContainer>
      <Drawer anchor="right" onClose={removeDetails} open={details !== null}>
        {details && <Details armor={details} />}
      </Drawer>
    </>
  );
};
