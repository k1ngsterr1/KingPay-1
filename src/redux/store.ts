import { configureStore } from "@reduxjs/toolkit";
import announcementPopupSlice from "./slices/announcementPopupSlice";
import infoPopupSlice from "./slices/infoPopupSlice";
import menuSlice from "./slices/menuSlice";
import paymentPopupSlice from "./slices/paymentPopupSlice";
import ratingPopupSlice from "./slices/ratingPopupSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    infoPopup: infoPopupSlice,
    paymentPopup: paymentPopupSlice,
    announcementPopup: announcementPopupSlice,
    ratingPopup: ratingPopupSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
