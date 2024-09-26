import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  activeCategory: string;
}

const initialState: MenuState = {
  activeCategory: "folder",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<{ name: string }>) => {
      state.activeCategory = action.payload.name;
    },
  },
});

export const { setActive } = menuSlice.actions;

export default menuSlice.reducer;
