import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routeNames } from "./routeNames";
import LoginForm from "@components/LoginForm/LoginForm";
import RegistrationForm from "@components/RegistrationForm/RegistrationForm";
import PrivateRoute from "@components/PrivateRoute";
import HomePage from "@pages/HomePage/HomePage";

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
        <Route path={routeNames.LOGIN} element={<LoginForm />} />
        <Route path={routeNames.REGISTRATION} element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
