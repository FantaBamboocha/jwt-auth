import { FC } from "react";

import { IFormViewProps } from "#types/formikTypes/formViewProps";
import CommonFormView from "@components/CommonFormView";

const LoginFormView: FC<IFormViewProps> = ({ isLoading, formik }) => {
  const fields = [
    { name: "email", type: "email", label: "Email" },
    { name: "password", type: "password", label: "Password" },
  ];

  return (
    <CommonFormView
      title="Log In"
      isLoading={isLoading}
      formik={formik}
      fields={fields}
      submitButtonText="Log In"
    />
  );
};

export default LoginFormView;
