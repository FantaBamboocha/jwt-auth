import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "@api/authApi";
import { IAuthResponse } from "#types/responses/AuthResponse";

const registration = createAsyncThunk<
  IAuthResponse,
  { firstName: string; email: string; password: string }
>("auth/registration", async ({ firstName, email, password }) => {
  const response = await authAPI.registration(firstName, email, password);

  return response.data;
});

export default registration;
