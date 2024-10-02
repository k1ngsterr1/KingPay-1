import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
