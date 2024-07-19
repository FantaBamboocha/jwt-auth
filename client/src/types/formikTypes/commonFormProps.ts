import { IFormViewProps } from "./formViewProps";

export interface ICommonFormProps extends IFormViewProps {
  title: string;
  submitButtonText: string;
  fields: { name: string; type: string; label: string }[];
}
