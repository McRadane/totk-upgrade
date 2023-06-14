import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import type { IRootState } from "../configureStore";
import { armorsNonUpgradableStatic, armorsStatic } from "../data";

export interface IArmorWithoutUpgrade {
  hidden: boolean;
  id: string;
  owned: boolean;
}

export interface IArmor extends IArmorWithoutUpgrade {
  ownedLevel: 0 | 1 | 2 | 3 | 4;
  wanted: 0 | 1 | 2 | 3 | 4;
}

export interface ArmorState {
  armors: IArmor[];
  nonUpgradedArmors: IArmorWithoutUpgrade[];
}

const initialState: ArmorState = {
  armors: armorsStatic.map((armor) => ({
    hidden: false,
    id: armor,
    owned: false,
    ownedLevel: 0,
    wanted: 0
  })),
  nonUpgradedArmors: armorsNonUpgradableStatic.map((armor) => ({
    hidden: false,
    id: armor,
    owned: false
  }))
};

export const armorSlice = createSlice({
  initialState,
  name: "armor",
  reducers: {
    setHidden: (state, action: PayloadAction<[string, boolean]>) => {
      state.armors = state.armors.map((armor) => {
        if (armor.id === action.payload[0]) {
          armor.hidden = action.payload[1];
        }
        return armor;
      });
    },
    setHiddenNonUpgradable: (state, action: PayloadAction<[string, boolean]>) => {
      state.nonUpgradedArmors = state.nonUpgradedArmors.map((armor) => {
        if (armor.id === action.payload[0]) {
          armor.hidden = action.payload[1];
        }
        return armor;
      });
    },
    setOwned: (state, action: PayloadAction<[string, boolean]>) => {
      state.armors = state.armors.map((armor) => {
        if (armor.id === action.payload[0]) {
          armor.owned = action.payload[1];
          if (!armor.owned) {
            armor.ownedLevel = 0;
          }
        }
        return armor;
      });
    },
    setOwnedLevel: (state, action: PayloadAction<[string, 0 | 1 | 2 | 3 | 4]>) => {
      state.armors = state.armors.map((armor) => {
        if (armor.id === action.payload[0]) {
          armor.ownedLevel = action.payload[1];
          if (armor.ownedLevel > armor.wanted) {
            armor.wanted = armor.ownedLevel;
          }
        }
        return armor;
      });
    },
    setOwnedNonUpgradable: (state, action: PayloadAction<[string, boolean]>) => {
      state.nonUpgradedArmors = state.nonUpgradedArmors.map((armor) => {
        if (armor.id === action.payload[0]) {
          armor.owned = action.payload[1];
        }
        return armor;
      });
    },
    setWanted: (state, action: PayloadAction<[string, 0 | 1 | 2 | 3 | 4]>) => {
      state.armors = state.armors.map((armor) => {
        if (armor.id === action.payload[0]) {
          armor.wanted = action.payload[1];
          if (armor.wanted < armor.ownedLevel) {
            armor.wanted = armor.ownedLevel;
          }
        }
        return armor;
      });
    }
  }
});

// Action creators are generated for each case reducer function
export const { setHidden, setHiddenNonUpgradable, setOwned, setOwnedLevel, setOwnedNonUpgradable, setWanted } = armorSlice.actions;

export const useArmorStatus = (name: string) =>
  useSelector((state: IRootState) => {
    const found = state.armors.armors.find((a) => a.id === name);
    if (found) {
      return found;
    }
    return state.armors.nonUpgradedArmors.find((a) => a.id === name) /* ?? {
        hidden: true,
        name,
        owned: false,
      }*/;
  }) as IArmor;

export default armorSlice.reducer;
