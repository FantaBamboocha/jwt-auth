import * as Yup from "yup";

const emailValidation = Yup.string()
  .email("Invalid email address")
  .required("Required");

const passwordValidation = Yup.string()
  .min(3, "Password must be at least 3 characters")
  .required("Required");

const firstNameValidation = Yup.string().required("Required");

export const loginValidationSchema = Yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export const registrationValidationSchema = Yup.object({
  firstName: firstNameValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});
