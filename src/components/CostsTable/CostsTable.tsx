import { FormControlLabel, Switch } from "@mui/material";
import { useCallback, useMemo } from "react";
import type React from "react";
import { FormattedMessage, type IntlShape, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import { setHideNoCost } from "../../redux/navigation";
import type { IRootState } from "../../redux/store";
import { DataContainer } from "../DataContainer";
import { type IData, TableScroller } from "../TableScroller/TableScroller";
import { type ICalculatedItems, calculateListItems } from "../functions";

interface ColumnData {
  dataKey: keyof ICalculatedItems;
  label: string;
  numeric?: boolean;
  width: number;
}

const getColumns = (intl: IntlShape): ColumnData[] => [
  {
    dataKey: "name",
    label: intl.formatMessage({ defaultMessage: "Material", id: "material" }),
    width: 200
  },
  {
    dataKey: "selection",
    label: intl.formatMessage({ defaultMessage: "Count (Selection)", id: "countSelection" }),
    numeric: true,
    width: 120
  },
  {
    dataKey: "all",
    label: intl.formatMessage({ defaultMessage: "Count (All Armors)", id: "countAll" }),
    numeric: true,
    width: 120
  }
];

export const CostsTable = () => {
  const armorsState = useSelector((state: IRootState) => state.armors.armors);
  const hideNoCost = useSelector((state: IRootState) => state.navigation.hideNoCost);
  const dispatch = useDispatch();
  const intl = useIntl();
  const columns = useMemo(() => getColumns(intl), [intl]);

  const { filterLocked, items } = useMemo(() => {
    const costsMemo = calculateListItems(armorsState, intl);

    const rupeeItems = [
      {
        all: costsMemo.rupee.all,
        id: "rupee",
        name: intl.formatMessage({
          defaultMessage: "Rupee (upgrades)",
          id: "rupeeCostUpgrade"
        }),
        selection: costsMemo.rupee.selection
      },
      {
        all: costsMemo.rupeeBuy.all,
        id: "rupeeBuy",
        name: intl.formatMessage({
          defaultMessage: "Rupee (armor prices)",
          id: "rupeeCostBuy"
        }),
        selection: costsMemo.rupeeBuy.selection
      }
    ];

    const resultsFiltered = costsMemo.items.filter((cost) => cost.selection !== 0);

    if (hideNoCost) {
      if (resultsFiltered.length > 0) {
        return {
          filterLocked: false,

          items: [...rupeeItems, ...resultsFiltered]
        };
      }
    }

    return { filterLocked: resultsFiltered.length === 0, items: [...rupeeItems, ...costsMemo.items] };
  }, [armorsState, hideNoCost, intl]);

  const onChangeHideNoCost = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setHideNoCost(event.target.checked));
    },
    [dispatch]
  );

  return (
    <>
      <FormControlLabel
        control={<Switch checked={hideNoCost} disabled={filterLocked && !hideNoCost} onChange={onChangeHideNoCost} />}
        label={<FormattedMessage id="filterMaterials" defaultMessage="Filter materials" />}
      />
      <DataContainer offset={88}>
        <TableScroller columns={columns} items={items as unknown as IData[]} />
      </DataContainer>
    </>
  );
};
