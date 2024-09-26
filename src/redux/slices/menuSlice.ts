import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InfoPopupState {
  isOpen: boolean;
  description: string | null;
  name: string | null;
  icon: IconDefinition | null;
  link: string | null;
}

const initialState: InfoPopupState = {
  isOpen: false,
  description: null,
  name: null,
  icon: null,
  link: null,
};

const infoPopupSlice = createSlice({
  name: "infoPopup",
  initialState,
  reducers: {
    openPopup: (
      state,
      action: PayloadAction<{
        description: string;
        name: string;
        icon: IconDefinition;
        link: string;
      }>
    ) => {
      state.isOpen = true;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.icon = action.payload.icon;
      state.link = action.payload.link;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.name = null;
      state.description = null;
      state.icon = null;
      state.link = null;
    },
  },
});

export const { openPopup, closePopup } = infoPopupSlice.actions;

export default infoPopupSlice.reducer;
