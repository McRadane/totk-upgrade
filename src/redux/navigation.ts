import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import type { IRootState } from "./store";

export interface NavigationState {
  armorsOrder?: "alphabetical" | "alphabetical-groups" | "game";
  hideArmors: boolean;
  hideNoCost: boolean;
  language?: string;
  materialsOrder?: "alphabetical" | "game";
  page: number;
  selectionFilter?: "no" | "owned" | "visible" | "visible-owned";
}

const initialState: NavigationState = {
  hideArmors: true,
  hideNoCost: true,
  page: 1
};

export const navigationSlice = createSlice({
  initialState,
  name: "navigation",
  reducers: {
    setArmorsOrder: (state, action: PayloadAction<"alphabetical" | "alphabetical-groups" | "game">) => {
      state.armorsOrder = action.payload;
    },
    setHideArmors: (state, action: PayloadAction<boolean>) => {
      state.hideArmors = action.payload;
    },
    setHideNoCost: (state, action: PayloadAction<boolean>) => {
      state.hideNoCost = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string | undefined>) => {
      state.language = action.payload;
    },
    setMaterialsOrder: (state, action: PayloadAction<"alphabetical" | "game">) => {
      state.materialsOrder = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSelectionFilter: (state, action: PayloadAction<"no" | "owned" | "visible" | "visible-owned">) => {
      state.selectionFilter = action.payload;
    }
  }
});

export const { setArmorsOrder, setHideArmors, setHideNoCost, setLanguage, setMaterialsOrder, setPage, setSelectionFilter } =
  navigationSlice.actions;

export const useLanguage = () => useSelector((state: IRootState) => state.navigation.language);

export default navigationSlice.reducer;
