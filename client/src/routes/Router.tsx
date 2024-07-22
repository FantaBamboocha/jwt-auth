import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routeNames } from "./routeNames";
import PrivateRoute from "@components/PrivateRoute";
import LoginFormContainer from "@pages/LoginPage/containers/LoginFormContainer";
import HomePage from "@pages/HomePage/HomePage";
import RegistrationFormContainer from "@pages/RegistrationPage/containers/RegistrationFormContainer";

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
        <Route path={routeNames.LOGIN} element={<LoginFormContainer />} />
        <Route
          path={routeNames.REGISTRATION}
          element={<RegistrationFormContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
