import { FC } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { IoLogOutOutline } from "react-icons/io5";
import { IHeaderViewProps } from "#types/headerTypes/headerViewProps";

const HeaderView: FC<IHeaderViewProps> = ({
  email,
  firstName,
  anchorEl,
  handleMenuOpen,
  handleMenuClose,
  performLogout,
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Box
            component="img"
            alt="logo"
            src="https://seeklogo.com/images/J/jwt-logo-11B708E375-seeklogo.com.png"
            sx={{ height: 40, mr: 2 }}
          />
        </Box>
        <Tooltip title={email}>
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
            <Avatar variant="rounded" alt={firstName} src="#" />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={performLogout}>
            <Icon>
              <IoLogOutOutline />
            </Icon>
            <Typography>Log out</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderView;
