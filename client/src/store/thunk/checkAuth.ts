import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IAuthResponse } from "#types/responses/AuthResponse";
import { BASE_URL } from "@api/axiosIstance";

const checkAuth = createAsyncThunk<IAuthResponse>(
  "auth/checkAuth",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/refresh`, {
        withCredentials: true,
      });

      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export default checkAuth;
