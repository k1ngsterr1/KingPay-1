import { configureStore } from "@reduxjs/toolkit";
import burgerMenuSlice from "./slices/burgerMenuSlice";
import menuSlice from "./slices/menuSlice";
import tabSlice from "./slices/tabSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    tab: tabSlice,
    burgerMenu: burgerMenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
