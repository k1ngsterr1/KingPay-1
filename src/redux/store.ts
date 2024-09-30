import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import tabSlice from "./slices/tabSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    tab: tabSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
