import { Chip, List, ListItem } from "@mui/material";
import { type FC, useMemo } from "react";
import { useIntl } from "react-intl";

import { type IDataArmor, getMaterials } from "../../data";
import { useArmorStatus } from "../../redux/armors";
import { getActiveStatus } from "../functions";

export interface IMaterialListProps {
  armor: IDataArmor;
  rank: 1 | 2 | 3 | 4;
}

export const MaterialList: FC<IMaterialListProps> = ({ armor, rank }) => {
  const intl = useIntl();

  const status = useArmorStatus(armor.id);

  const baseMaterials = useMemo(() => armor[`rank${rank}`], [armor, rank]);
  const materialsLocalized = useMemo(() => getMaterials(intl), [intl]);

  const activeStatus = useMemo(() => {
    return getActiveStatus(status);
  }, [status]);

  const active = useMemo(() => activeStatus(rank), [activeStatus, rank]);

  if (!baseMaterials) {
    return null;
  }

  return (
    <List>
      {baseMaterials.map(([id, count]) => {
        const materialName = materialsLocalized.find((material) => material.id === id)?.name ?? id;

        return (
          <ListItem key={id} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            {materialName}
            <Chip aria-disabled={!active} disabled={!active} label={count} />
          </ListItem>
        );

        /*return (
          <Badge badgeContent={count} color={active ? "primary" : "info"} key={id}>
            <Chip aria-disabled={!active} disabled={!active} label={materialName} />
          </Badge>
        );*/

        /*return (
          <li className="list-group-item d-flex justify-content-between align-items-center small-fonts" key={id}>
            {materialName}
            <span className="badge bg-primary rounded-pill">{count}</span>
          </li>
        );*/
      })}
    </List>
  );
};
