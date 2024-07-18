import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routeNames } from "./routeNames";
import LoginFormContainer from "@components/LoginForm/containers/LoginFormContainer";
import PrivateRoute from "@components/PrivateRoute";
import HomePage from "@pages/HomePage/HomePage";
import RegistrationFormContainer from "@components/RegistrationForm/containers/RegistrationFormContainer";

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
