import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FC, ReactNode, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

import {
  isAuthSelector,
  isLoadingSelector,
} from "@store/slices/authSlice/selectors";
import { useAppDispatch } from "@store/store";
import checkAuth from "@store/thunk/checkAuth";

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuth());
  }, []);

  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
