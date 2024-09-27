import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
export var store = configureStore({
    reducer: {
        menu: menuSlice,
    },
});
export default store;
