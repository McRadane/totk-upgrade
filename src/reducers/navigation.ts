import { type PayloadAction , createSlice } from "@reduxjs/toolkit";

export interface NavigationState {
  hideArmors: boolean;
  hideNoCost: boolean;
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
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setHideArmors, setHideNoCost, setPage } = navigationSlice.actions;

export default navigationSlice.reducer;
