import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authReducer from "@store/slices/authSlice/slice";
import notificationReducer from "@store/slices/notificationSlice/slice";
import localStorageMiddleware from "./middleware/localStorageMiddleware";
import notificationMiddleware from "./middleware/notificationMiddleware";

const store = configureStore({
  reducer: {
    auth: authReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      localStorageMiddleware,
      notificationMiddleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
