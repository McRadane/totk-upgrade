import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
  page: number;
  hideNoCost: boolean;
  hideArmors: boolean;
}

const initialState: NavigationState = {
  page: 1,
  hideNoCost: true,
  hideArmors: true,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setHideNoCost: (state, action: PayloadAction<boolean>) => {
      state.hideNoCost = action.payload;
    },
    setHideArmors: (state, action: PayloadAction<boolean>) => {
      state.hideArmors = action.payload;
    },
  },
});

export const { setHideNoCost, setPage, setHideArmors } = navigationSlice.actions;

export default navigationSlice.reducer;
