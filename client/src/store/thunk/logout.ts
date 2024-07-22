import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "@api/authApi";

const logout = createAsyncThunk("auth/logout", async () => {
  await authAPI.logout();
});

export default logout;
