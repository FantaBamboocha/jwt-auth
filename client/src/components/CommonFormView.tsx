import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";

import TextFieldWrapper from "./TextFieldWrapper";
import SubmitButton from "./SubmitButton";
import LinkBlockContainer from "./LinkBlock/containers/LinkBlockContainer";
import { ICommonFormProps } from "#types/formikTypes/commonFormProps";

const CommonFormView: FC<ICommonFormProps> = ({
  title,
  submitButtonText,
  formik,
  fields,
  isLoading,
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Paper
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ p: 4, mb: 3 }}
        >
          <Box mb={2} sx={{ textAlign: "center" }}>
            <Typography variant="h5">{title}</Typography>
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

          <SubmitButton isLoading={isLoading} text={submitButtonText} />
        </Paper>
        <LinkBlockContainer />
      </Box>
    </Box>
  );
};

export default CommonFormView;
