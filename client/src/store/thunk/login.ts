import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "@api/authApi";
import { IAuthResponse } from "#types/responses/AuthResponse";
import { AxiosError } from "axios";

const login = createAsyncThunk<
  IAuthResponse,
  { email: string; password: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await authAPI.login(email, password);

    return response.data;
  } catch (e: any) {
    if (e instanceof AxiosError) {
      return rejectWithValue(e.response?.data?.message);
    }

    return rejectWithValue("Something went wrong");
  }
});

export default login;
