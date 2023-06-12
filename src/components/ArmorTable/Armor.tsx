import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { type IRootState } from "../../configureStore";
import { useMediaQuery } from "../functions";

import { Filter } from "./Filter";
import { ArmorList } from "./List/ArmorList";
import { ArmorTable } from "./Table/ArmorTable";
import { filterArmors } from "./functions";

export const Armor = () => {
  const small = useMediaQuery("(max-width: 900px)");

  const [textFilter, setTextFilter] = useState("");

  const armorsState = useSelector((state: IRootState) => state.armors.armors);
  const hidden = useSelector(
    (state: IRootState) => state.navigation.hideArmors
  );

  const armorsFiltered = useMemo(
    () => filterArmors({ armorsState, hidden, text: textFilter }),
    [armorsState, hidden, textFilter]
  );

  if (small) {
    return (
      <>
        <Filter updateTextFilter={setTextFilter} />
        <ArmorList armors={armorsFiltered} />
      </>
    );
  }
  return (
    <>
      <Filter updateTextFilter={setTextFilter} />
      <ArmorTable armors={armorsFiltered} />
    </>
  );
};
