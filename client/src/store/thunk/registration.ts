import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "@api/authApi";
import { IAuthResponse } from "#types/responses/AuthResponse";
import { AxiosError } from "axios";

const registration = createAsyncThunk<
  IAuthResponse,
  { firstName: string; email: string; password: string }
>(
  "auth/registration",
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const response = await authAPI.registration(firstName, email, password);

      return response.data;
    } catch (e: any) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response?.data?.message);
      }

      return rejectWithValue("Something went wrong");
    }
  }
);

export default registration;
