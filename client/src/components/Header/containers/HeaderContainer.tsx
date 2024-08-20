import { useState } from "react";
import { useSelector } from "react-redux";

import { HeaderView, CustomDialog } from "@components/index";
import { useAppDispatch, logout, userSelector } from "@store/index";

const HeaderContainer = () => {
  const dispatch = useAppDispatch();
  const { firstName, email } = useSelector(userSelector);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const performLogout = () => {
    handleMenuClose();
    setIsDialogOpen(true);
  };

  const confirmLogout = () => {
    dispatch(logout());
    setIsDialogOpen(false);
  };

  const cancelLogout = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <HeaderView
        email={email}
        firstName={firstName}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
        anchorEl={anchorEl}
        performLogout={performLogout}
      />
      <CustomDialog
        isOpen={isDialogOpen}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      >
        Are you sure you want to logout?
      </CustomDialog>
    </>
  );
};

export default HeaderContainer;
