import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "#types/responses/IUser";
import login from "@store/thunk/login";
import registration from "@store/thunk/registration";
import logout from "@store/thunk/logout";
import checkAuth from "@store/thunk/checkAuth";

const initialState = {
  user: {} as IUser,
  isAuth: false,
  isActivated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload.user;
    });

    // builder.addCase(registration.fulfilled, (state, action) => {
    //   state.isAuth = true;
    //   state.user = action.payload.user;
    // });

    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
      state.user = {} as IUser;
    });

    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload.user;
    });
  },
});

export default authSlice.reducer;
