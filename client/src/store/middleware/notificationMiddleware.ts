import { Middleware } from "@reduxjs/toolkit";

import { openNotification } from "@store/slices/notificationSlice/notificationSlice";
import checkAuth from "@store/thunk/checkAuth";
import login from "@store/thunk/login";
import logout from "@store/thunk/logout";
import registration from "@store/thunk/registration";

const notificationMiddleware: Middleware = (store) => (next) => (action) => {
  if (registration.fulfilled.match(action)) {
    store.dispatch(
      openNotification({
        message:
          "Registration successful! Please check your email to confirm your account.",
        severity: "success",
      })
    );
  }

  if (registration.rejected.match(action)) {
    store.dispatch(
      openNotification({
        message: action.payload,
        severity: "error",
      })
    );
  }

  if (login.fulfilled.match(action)) {
    store.dispatch(
      openNotification({ message: "Login successful!", severity: "success" })
    );
  }

  if (login.rejected.match(action)) {
    store.dispatch(
      openNotification({
        message: action.payload,
        severity: "error",
      })
    );
  }

  if (logout.fulfilled.match(action)) {
    store.dispatch(
      openNotification({ message: "Logout successful!", severity: "success" })
    );
  }

  if (logout.rejected.match(action)) {
    store.dispatch(
      openNotification({
        message: "Logout failed!",
        severity: "error",
      })
    );
  }

  return next(action);
};

export default notificationMiddleware;
