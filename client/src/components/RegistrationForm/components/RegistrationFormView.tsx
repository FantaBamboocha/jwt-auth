import { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

import { IFormViewProps } from "#types/formikTypes/formViewProps";
import TextFieldWrapper from "@components/TextFieldWrapper";
import SubmitButton from "@components/SubmitButton";
import LinkBlockContainer from "@components/LinkBlock/containers/LinkBlockContainer";

const RegistrationFormView: FC<IFormViewProps> = ({ isLoading, formik }) => {
  const fields = [
    { name: "firstName", type: "text", label: "First Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "password", type: "password", label: "Password" },
    { name: "confirmPassword", type: "password", label: "Confirm Password" },
  ];
  return (
    <Box>
      <Paper
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ p: 4, mb: 3 }}
      >
        <Box mb={2} sx={{ textAlign: "center" }}>
          <Typography variant="h5">Create an account</Typography>
        </Box>

        {fields.map(({ name, type, label }) => (
          <TextFieldWrapper
            key={label}
            name={name}
            type={type}
            label={label}
            formik={formik}
          />
        ))}

        <SubmitButton isLoading={isLoading} text="Sign Up" />
      </Paper>
      <LinkBlockContainer />
    </Box>
  );
};

export default RegistrationFormView;
