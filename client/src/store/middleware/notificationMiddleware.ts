import { Middleware } from "@reduxjs/toolkit";

import { openNotification } from "@store/slices/notificationSlice/notificationSlice";
import login from "@store/thunk/login";
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
  } else if (registration.rejected.match(action)) {
    store.dispatch(
      openNotification({
        message: action.payload,
        severity: "error",
      })
    );
  } else if (login.fulfilled.match(action)) {
    store.dispatch(
      openNotification({ message: "Login successful!", severity: "success" })
    );
  } else if (login.rejected.match(action)) {
    store.dispatch(
      openNotification({
        message: action.payload,
        severity: "error",
      })
    );
  }

  return next(action);
};

export default notificationMiddleware;
