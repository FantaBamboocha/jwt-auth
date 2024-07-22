import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginValidationSchema } from "@utils/validationSchema";
import LoginFormView from "@pages/LoginPage/components/LoginFormView";
import {
  isAuthSelector,
  isLoadingSelector,
} from "@store/slices/authSlice/selectors";
import { useAppDispatch } from "@store/store";
import login from "@store/thunk/login";

const LoginFormContainer = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const isAuth = useSelector(isAuthSelector);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return <LoginFormView isLoading={isLoading} formik={formik} />;
};

export default LoginFormContainer;
