export interface IHeaderViewProps {
  email: string;
  firstName: string;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
  performLogout: () => void;
}
