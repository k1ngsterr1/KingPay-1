import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  activeCategory: number;
}

const initialState: MenuState = {
  activeCategory: 0,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<{ index: number }>) => {
      state.activeCategory = action.payload.index;
    },
  },
});

export const { setActive } = tabSlice.actions;
export default tabSlice.reducer;
