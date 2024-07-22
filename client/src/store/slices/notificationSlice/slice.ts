import { createSlice } from "@reduxjs/toolkit";

interface NotificationState {
  message: string;
  severity: "success" | "error" | "info" | "warning";
  isOpen: boolean;
}

const initialState: NotificationState = {
  message: "",
  severity: "info",
  isOpen: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    openNotification: (state, action) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.isOpen = true;
    },
    closeNotification: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openNotification, closeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
