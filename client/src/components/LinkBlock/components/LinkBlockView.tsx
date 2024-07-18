import { FC } from "react";
import { Box, Link, Paper, Typography } from "@mui/material";

import { ILinkBlockProps } from "#types/formikTypes/linkBlockProps";

const LinkBlockView: FC<ILinkBlockProps> = ({ text, linkText, linkHref }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>
          {text}
          <Link sx={{ textDecoration: "none", pl: 1 }} href={linkHref}>
            {linkText}
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
};

export default LinkBlockView;
