import useMediaQuery from "../functions";
import { ArmorList } from "./List/ArmorList";
import { ArmorTable } from "./Table/ArmorTable";

export const Armor = () => {
  const small = useMediaQuery("(max-width: 900px)");

  if (small) {
    return <ArmorList />;
  }
  return <ArmorTable />;
};
