import { Middleware } from "@reduxjs/toolkit";
import checkAuth from "@store/thunk/checkAuth";

import login from "@store/thunk/login";
import logout from "@store/thunk/logout";
import registration from "@store/thunk/registration";

const localStorageMiddleware: Middleware = (store) => {
  return (next) => {
    return (action: any) => {
      if (
        action.type === login.fulfilled.type ||
        // action.type === registration.fulfilled.type ||
        action.type === checkAuth.fulfilled.type
      ) {
        localStorage.setItem("token", action.payload.accessToken);
        // store.dispatch(
        //   openSnackbar("data has been successfully received via Redux Thunk")
        // );
      }

      if (action.type === logout.fulfilled.type) {
        localStorage.removeItem("token");
        // store.dispatch(
        //   openSnackbar("data has been successfully received via Redux Saga")
        // );
      }

      if (
        action.type === login.rejected.type ||
        action.type === logout.rejected.type
      ) {
        // store.dispatch(
        //   openSnackbar("something went wrong: data has not been received")
        // );
      }

      next(action);
    };
  };
};

export default localStorageMiddleware;
