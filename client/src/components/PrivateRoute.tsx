import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FC, ReactNode, useEffect } from "react";

import { isAuthSelector, useAppDispatch, checkAuth } from "@store/index";

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuth());
  }, []);

  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
