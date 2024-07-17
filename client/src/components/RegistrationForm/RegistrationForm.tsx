import { Formik, Form, useFormik } from "formik";
import { Button, Box, TextField } from "@mui/material";

import { registrationValidationSchema } from "../../utils/validationSchema";
import { useAppDispatch } from "@store/store";
import registration from "@store/thunk/registration";

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
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

  return (
    <Box>
      <Box mb={2}>
        <TextField
          type="text"
          label="First Name"
          {...formik.getFieldProps("firstName")}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <TextField
          type="email"
          label="Email"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <TextField
          type="password"
          label="Password"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <TextField
          type="password"
          label="Confirm Password"
          {...formik.getFieldProps("confirmPassword")}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          fullWidth
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        onClick={formik.handleSubmit}
      >
        Create
      </Button>
    </Box>
  );
};

export default RegistrationForm;
