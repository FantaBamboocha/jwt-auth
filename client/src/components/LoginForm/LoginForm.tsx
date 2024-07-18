import {
  Box,
  Button,
  CircularProgress,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";

import { loginValidationSchema } from "../../utils/validationSchema";
import { useAppDispatch } from "@store/store";
import login from "@store/thunk/login";
import { useSelector } from "react-redux";
import {
  isAuthSelector,
  isLoadingSelector,
} from "@store/slices/authSlice/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
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

  return (
    <Box>
      <Paper
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ p: 4, mb: 3 }}
      >
        <Box mb={2} sx={{ textAlign: "center" }}>
          <Typography variant="h5">Log in</Typography>
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

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            "Log in"
          )}
        </Button>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>
            Don't have an account?
            <Link sx={{ textDecoration: "none", pl: 1 }} href="/registration">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
