import { useFormik } from "formik";
import { useSelector } from "react-redux";
import {
  Button,
  Box,
  TextField,
  Paper,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";

import { registrationValidationSchema } from "../../utils/validationSchema";
import { useAppDispatch } from "@store/store";
import registration from "@store/thunk/registration";
import { isLoadingSelector } from "@store/slices/authSlice/selectors";

const RegistrationForm = () => {
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

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            "Sign up"
          )}
        </Button>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Box display={"flex"} justifyContent={"center"}>
          <Typography>
            Have an account?
            <Link sx={{ textDecoration: "none", pl: 1 }} href="/login">
              Log in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegistrationForm;
