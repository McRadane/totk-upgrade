import { type FC, useMemo } from "react";
import { useIntl } from "react-intl";

import { getMaterials } from "../../data";

export interface IMaterialListProps {
  active: boolean;
  materials?: [string, number][];
}

export const MaterialList: FC<IMaterialListProps> = ({ active, materials: baseMaterials }) => {
  const intl = useIntl();

  const materials = useMemo(() => getMaterials(intl), [intl]);

  if (!baseMaterials) {
    return null;
  }

  return (
    <ul aria-disabled={!active} className={`list-group list-group-flush ${active ? "active" : "no-active"}`}>
      {baseMaterials.map(([id, count]) => {
        const materialName = materials.find((material) => material.id === id)?.name ?? id;

        return (
          <li className="list-group-item d-flex justify-content-between align-items-center small-fonts" key={id}>
            {materialName}
            <span className="badge bg-primary rounded-pill">{count}</span>
          </li>
        );
      })}
    </ul>
  );
};
