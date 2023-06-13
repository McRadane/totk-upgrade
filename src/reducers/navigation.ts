import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import type { IRootState } from "../configureStore";

export interface NavigationState {
  hideArmors: boolean;
  hideNoCost: boolean;
  language?: string;
  page: number;
}

const initialState: NavigationState = {
  hideArmors: true,
  hideNoCost: true,
  page: 1,
};

export const navigationSlice = createSlice({
  initialState,
  name: "navigation",
  reducers: {
    setHideArmors: (state, action: PayloadAction<boolean>) => {
      state.hideArmors = action.payload;
    },
    setHideNoCost: (state, action: PayloadAction<boolean>) => {
      state.hideNoCost = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string | undefined>) => {
      state.language = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setHideArmors, setHideNoCost, setLanguage, setPage } =
  navigationSlice.actions;

export const useLanguage = () =>
  useSelector((state: IRootState) => state.navigation.language);

export default navigationSlice.reducer;
