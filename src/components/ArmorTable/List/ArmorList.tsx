import { armors } from "../../../data";
import { RowList } from "./RowList";

export const ArmorList = () => {
  return (
    <ul className={`list-group list-group-flush`}>
      {armors.map((armor) => (
        <RowList key={armor.name} armor={armor} />
      ))}
    </ul>
  );
};
