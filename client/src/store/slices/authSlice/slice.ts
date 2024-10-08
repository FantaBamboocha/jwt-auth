import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "#types/responses/IUser";
import { login, registration, logout, checkAuth } from "@store/index";

export interface IAuthState {
  user: IUser;
  isAuth: boolean;
  isActivated: boolean;
  isLoading: boolean;
}

const initialState: IAuthState = {
  user: {} as IUser,
  isAuth: false,
  isActivated: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload.user;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registration.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(registration.rejected, (state) => {
      state.isLoading = false;
    });

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
