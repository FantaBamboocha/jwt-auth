const activation = createAsyncThunk("auth/activation", async (token) => {
  const response = await authAPI.activation(token);
  return response.data;
});
