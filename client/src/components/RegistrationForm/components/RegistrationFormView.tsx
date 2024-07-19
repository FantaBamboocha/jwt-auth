import { FC } from "react";

import { IFormViewProps } from "#types/formikTypes/formViewProps";
import CommonFormView from "@components/CommonFormView";

const RegistrationFormView: FC<IFormViewProps> = ({ isLoading, formik }) => {
  const fields = [
    { name: "firstName", type: "text", label: "First Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "password", type: "password", label: "Password" },
    { name: "confirmPassword", type: "password", label: "Confirm Password" },
  ];
  return (
    <CommonFormView
      title="Create an account"
      isLoading={isLoading}
      formik={formik}
      fields={fields}
      submitButtonText="Sign Up"
    />
  );
};

export default RegistrationFormView;
