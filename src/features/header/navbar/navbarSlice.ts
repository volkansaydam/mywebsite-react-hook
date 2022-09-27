import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItems, MenuType } from "../../types/menu";

interface NavbarState {
  currentMenu: MenuType;
}

const initialState: NavbarState = {
  currentMenu: MenuItems.HOME,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setCurrentMenu: (state, action: PayloadAction<MenuType>) => {
      state.currentMenu = action.payload;
    },
  },
});

export const { setCurrentMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
