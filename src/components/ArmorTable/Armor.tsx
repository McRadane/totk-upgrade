import { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

import { getArmors } from "../../data";
import { type IRootState } from "../../redux/store";
import { useMediaQuery } from "../functions";

import { Filter } from "./Filter";
import { ArmorList } from "./List/ArmorList";
import { ArmorTable } from "./Table/ArmorTable";
import { filterArmors, sortArmorAlphabetical, sortArmorGame } from "./functions";

export const Armor = () => {
  const small = useMediaQuery("(max-width: 900px)");

  const [text, setTextFilter] = useState("");
  const intl = useIntl();

  // const armorsState = useSelector((state: IRootState) => state.armors.armors);
  const { armors: armorsState, nonUpgradedArmors: armorsStateNonUpgradable } = useSelector((state: IRootState) => state.armors);
  const { armorsOrder, hideArmors: hidden } = useSelector((state: IRootState) => state.navigation);

  const armorsFiltered = useMemo(() => {
    const filtered = filterArmors({
      armors: getArmors(intl),
      armorsState,
      armorsStateNonUpgradable,
      hidden,
      text
    }).sort((...items) => {
      if (!armorsOrder || armorsOrder === "alphabetical" || armorsOrder === "alphabetical-groups") {
        return sortArmorAlphabetical(...items);
      }

      return sortArmorGame(...items);
    });

    if (!armorsOrder || armorsOrder === "alphabetical-groups") {
      return {
        grouped: true,
        nonSet: filtered.filter((armor) => armor.category === "upgradable-non-set"),
        nonUpgradable: filtered.filter((armor) => armor.category === "non-upgradable-set"),
        nonUpgradableNonSet: filtered.filter((armor) => armor.category === "non-upgradable-non-set"),
        set: filtered.filter((armor) => armor.category === "upgradable-set")
      };
    }

    return {
      grouped: false,
      nonSet: [],
      nonUpgradable: [],
      nonUpgradableNonSet: [],
      set: filtered
    };
  }, [armorsOrder, armorsState, armorsStateNonUpgradable, hidden, intl, text]);

  if (small) {
    return (
      <>
        <Filter updateTextFilter={setTextFilter} />
        <ArmorList
          grouped={armorsFiltered.grouped}
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
        grouped={armorsFiltered.grouped}
        nonSet={armorsFiltered.nonSet}
        nonUpgradable={armorsFiltered.nonUpgradable}
        nonUpgradableNonSet={armorsFiltered.nonUpgradableNonSet}
        set={armorsFiltered.set}
      />
    </>
  );
};
