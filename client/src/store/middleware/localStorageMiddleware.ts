import { Middleware } from "@reduxjs/toolkit";
import checkAuth from "@store/thunk/checkAuth";

import login from "@store/thunk/login";
import logout from "@store/thunk/logout";

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
