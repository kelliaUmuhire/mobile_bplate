import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: null,
    user: {},
    isAuth: false,
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = {};
      state.isAuth = null;
    },
  },
});

export const { authenticate, logout } = appSlice.actions;

export default appSlice.reducer;
