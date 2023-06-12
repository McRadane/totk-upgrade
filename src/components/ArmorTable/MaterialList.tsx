import { type FC } from "react";

export interface IMaterialListProps {
  active: boolean;
  materials?: [string, number][];
}

export const MaterialList: FC<IMaterialListProps> = ({ active, materials }) => {
  if (!materials) {
    return null;
  }

  return (
    <ul aria-disabled={!active} className={`list-group list-group-flush ${active ? "active" : "no-active"}`}>
      {materials.map((item) => (
        <li className="list-group-item d-flex justify-content-between align-items-center small-fonts" key={item[0]}>
          {item[0]}
          <span className="badge bg-primary rounded-pill">{item[1]}</span>
        </li>
      ))}
    </ul>
  );
};
