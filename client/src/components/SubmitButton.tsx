import { ISubmitButtonProps } from "#types/formikTypes/submitButtonProps";
import { Button, CircularProgress } from "@mui/material";
import { FC } from "react";

const SubmitButton: FC<ISubmitButtonProps> = ({ isLoading, text }) => {
  return (
    <Button type="submit" variant="contained" color="primary" fullWidth>
      {isLoading ? <CircularProgress color="inherit" size={24} /> : text}
    </Button>
  );
};

export default SubmitButton;
