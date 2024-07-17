import { Box, Button, TextField } from "@mui/material";
import { Field, Form, Formik, useFormik } from "formik";

import { loginValidationSchema } from "../../utils/validationSchema";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <Box>
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

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        onClick={formik.handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
