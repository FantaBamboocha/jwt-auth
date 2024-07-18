import { useFormik } from "formik";
import { useSelector } from "react-redux";

import { registrationValidationSchema } from "@utils/validationSchema";
import { useAppDispatch } from "@store/store";
import registration from "@store/thunk/registration";
import { isLoadingSelector } from "@store/slices/authSlice/selectors";
import RegistrationFormView from "../components/RegistrationFormView";

const RegistrationFormContainer = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(isLoadingSelector);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registrationValidationSchema,
    onSubmit: ({ firstName, email, password }) => {
      dispatch(registration({ firstName, email, password }));
    },
  });

  return <RegistrationFormView isLoading={isLoading} formik={formik} />;
};

export default RegistrationFormContainer;
