import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { armors } from "../data";
import { useSelector } from "react-redux";
import { IRootState } from "../configureStore";

export interface IArmor {
  name: string;
  wanted: 0 | 1 | 2 | 3 | 4;
  ownedLevel: 0 | 1 | 2 | 3 | 4;
}

export interface ArmorState {
  armors: IArmor[];
}

const initialState: ArmorState = {
  armors: armors.map((armor) => ({
    name: armor.name,
    wanted: 0,
    ownedLevel: 0,
  })),
};

export const armorSlice = createSlice({
  name: "armor",
  initialState,
  reducers: {
    setWanted: (state, action: PayloadAction<[string, 0 | 1 | 2 | 3 | 4]>) => {
      state.armors = state.armors.map((armor) => {
        if (armor.name === action.payload[0]) {
          armor.wanted = action.payload[1];
          if (armor.wanted < armor.ownedLevel) {
            armor.wanted = armor.ownedLevel;
          }
        }
        return armor;
      });
    },
    setOwnedLevel: (
      state,
      action: PayloadAction<[string, 0 | 1 | 2 | 3 | 4]>
    ) => {
      state.armors = state.armors.map((armor) => {
        if (armor.name === action.payload[0]) {
          armor.ownedLevel = action.payload[1];
          if (armor.ownedLevel > armor.wanted) {
            armor.wanted = armor.ownedLevel;
          }
        }
        return armor;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWanted, setOwnedLevel } = armorSlice.actions;

export const useArmorStatus = (name: string) =>
  useSelector((state: IRootState) =>
    state.armors.armors.find((a) => a.name === name)
  ) as IArmor;

export default armorSlice.reducer;
