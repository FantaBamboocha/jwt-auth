import { Middleware } from "@reduxjs/toolkit";

import { login, logout, checkAuth } from "@store/index";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  if (login.fulfilled.match(action) || checkAuth.fulfilled.match(action)) {
    localStorage.setItem("token", action.payload.accessToken);
  }

  if (logout.fulfilled.match(action)) {
    localStorage.removeItem("token");
  }

  next(action);
};

export default localStorageMiddleware;
