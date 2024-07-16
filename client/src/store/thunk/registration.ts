import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "@api/authApi";
import { IAuthResponse } from "#types/responses/AuthResponse";

const registration = createAsyncThunk<
  IAuthResponse,
  { email: string; password: string }
>("auth/registration", async ({ email, password }) => {
  const response = await authAPI.registration(email, password);

  return response.data;
});

export default registration;
