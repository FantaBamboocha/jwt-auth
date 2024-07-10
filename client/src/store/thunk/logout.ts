import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "@api/authApi";

const logout = createAsyncThunk("auth/logout", async () => {
  const response = await authAPI.logout();

  // return response.data;
});

export default logout;
