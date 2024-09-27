import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    activeCategory: "folder",
};
var menuSlice = createSlice({
    name: "menu",
    initialState: initialState,
    reducers: {
        setActive: function (state, action) {
            state.activeCategory = action.payload.name;
        },
    },
});
export var setActive = menuSlice.actions.setActive;
export default menuSlice.reducer;
