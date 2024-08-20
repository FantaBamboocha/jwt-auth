import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useSelector } from "react-redux";
import { useAppDispatch, logout } from "@store/index";

import HeaderContainer from "./HeaderContainer";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({
    firstName: "Lol",
    email: "lolkek@mail.ru",
  }),
}));

jest.mock("@store/index", () => ({
  useAppDispatch: jest.fn(() => mockDispatch),
  logout: jest.fn(() => {
    type: "logout";
  }),
}));

describe("Header Container ", () => {
  it("should render", () => {
    render(<HeaderContainer />);

    const logoImg = screen.getByAltText("logo");
    expect(logoImg).toBeInTheDocument();
  });

  it("should logout", async () => {
    render(<HeaderContainer />);

    // Открываем меню, кликая по аватару
    const avatarButton = screen.getByRole("button", {
      name: "lolkek@mail.ru",
    });
    act(() => {
      userEvent.click(avatarButton);
    });

    // Ожидаем, пока появится пункт меню "Log out"
    const logoutMenuItem = await screen.findByRole(
      "menuitem",
      {},
      { timeout: 1500 }
    );
    act(() => {
      userEvent.click(logoutMenuItem);
    });

    // Ожидаем, пока появится кнопка подтверждения в диалоговом окне
    const confirmButton = await screen.findByRole("button", {
      name: /log out/i,
    });

    act(() => {
      userEvent.click(confirmButton);
    });

    //  Ждём, пока mockDispatch будет вызван с logout
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(logout());
    });
  });
});
