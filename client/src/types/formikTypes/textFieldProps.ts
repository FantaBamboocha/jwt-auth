import { FormikProps } from "formik";

export interface ITextFieldProps {
  name: string;
  type: string;
  label: string;
  formik: FormikProps<any>;
}
