import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routeNames } from "./routeNames";
import PrivateRoute from "@components/PrivateRoute";
import { HomePage, LoginPage, RegistrationPage } from "@pages/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routeNames.HOME}
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path={routeNames.LOGIN} element={<LoginPage />} />
        <Route path={routeNames.REGISTRATION} element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
