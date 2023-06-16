import { useMediaQuery } from "@mui/material";
import { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

import { getArmors } from "../../data";
import { type IRootState } from "../../redux/store";

import { Filter } from "./Filter";
import { ArmorList } from "./List/ArmorList";
import { ArmorTable } from "./Table/ArmorTable";
import { filterArmors, sortArmor } from "./functions";

export const Armor = () => {
  const small = useMediaQuery("(max-width: 900px)");

  const [textFilter, setTextFilter] = useState("");
  const intl = useIntl();

  const armorsState = useSelector((state: IRootState) => state.armors.armors);
  const hidden = useSelector((state: IRootState) => state.navigation.hideArmors);

  const armorsFiltered = useMemo(() => {
    const filtered = filterArmors({
      armors: getArmors(intl),
      armorsState,
      hidden,
      text: textFilter
    }).sort(sortArmor);

    return {
      nonSet: filtered.filter((armor) => armor.category === "upgradable-non-set"),
      nonUpgradable: filtered.filter((armor) => armor.category === "non-upgradable-set"),
      nonUpgradableNonSet: filtered.filter((armor) => armor.category === "non-upgradable-non-set"),
      set: filtered.filter((armor) => armor.category === "upgradable-set")
    };
  }, [armorsState, hidden, intl, textFilter]);

  if (small) {
    return (
      <>
        <Filter updateTextFilter={setTextFilter} />
        <ArmorList
          nonSet={armorsFiltered.nonSet}
          nonUpgradable={armorsFiltered.nonUpgradable}
          nonUpgradableNonSet={armorsFiltered.nonUpgradableNonSet}
          set={armorsFiltered.set}
        />
      </>
    );
  }
  return (
    <>
      <Filter updateTextFilter={setTextFilter} />
      <ArmorTable
        nonSet={armorsFiltered.nonSet}
        nonUpgradable={armorsFiltered.nonUpgradable}
        nonUpgradableNonSet={armorsFiltered.nonUpgradableNonSet}
        set={armorsFiltered.set}
      />
    </>
  );
};
