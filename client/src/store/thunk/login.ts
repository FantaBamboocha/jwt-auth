import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "@api/authApi";
import { IAuthResponse } from "#types/responses/AuthResponse";

const login = createAsyncThunk<
  IAuthResponse,
  { email: string; password: string }
>("auth/login", async ({ email, password }) => {
  const response = await authAPI.login(email, password);
  console.log(response.data);

  return response.data;
});

export default login;
