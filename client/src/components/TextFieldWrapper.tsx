import { FC } from "react";
import { Box, TextField } from "@mui/material";

import { ITextFieldProps } from "#types/formikTypes/textFieldProps";

const TextFieldWrapper: FC<ITextFieldProps> = ({
  name,
  type,
  label,
  formik,
}) => {
  const errorText =
    formik.touched[name] && typeof formik.errors[name] === "string"
      ? formik.errors[name]
      : undefined;

  return (
    <Box mb={2}>
      <TextField
        type={type}
        label={label}
        {...formik.getFieldProps(name)}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={errorText}
        fullWidth
      />
    </Box>
  );
};

export default TextFieldWrapper;
