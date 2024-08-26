import { render, screen, waitFor } from "@testing-library/react";
import { useSelector, UseSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import LoginFormContainer from "./LoginFormContainer";
import {
  isAuthSelector,
  isLoadingSelector,
  login,
  useAppDispatch,
} from "@store/index";
import { act } from "react";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("@store/index", () => ({
  useAppDispatch: jest.fn(() => mockDispatch),
  isAuthSelector: jest.fn(),
  isLoadingSelector: jest.fn(),
  login: jest.fn(),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn((selector) => {
    return selector();
  }),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(() => mockNavigate),
  useLocation: jest.fn(() => ({ pathname: "/login" })),
}));

describe("LoginFormContainer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    (isAuthSelector as jest.Mock).mockReturnValue(false);
    (isLoadingSelector as jest.Mock).mockReturnValue(false);

    render(<LoginFormContainer />);

    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toBeInTheDocument();
  });

  it("should redirect to `/` when auth ", () => {
    (isAuthSelector as jest.Mock).mockReturnValue(true);
    (isLoadingSelector as jest.Mock).mockReturnValue(false);

    render(<LoginFormContainer />);

    expect(useSelector).toHaveBeenCalledWith(isAuthSelector);
    expect(useSelector(isAuthSelector)).toBe(true);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should dispatch request to the server on submit", async () => {
    (isAuthSelector as jest.Mock).mockReturnValue(false);
    (isLoadingSelector as jest.Mock).mockReturnValue(false);

    render(<LoginFormContainer />);

    const passwordInput = screen.getByLabelText(/password/i);
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const submitButton = screen.getByRole("button", { name: /log in/i });

    act(() => {
      userEvent.type(emailInput, "refiho2127@reebsd.com");
      userEvent.type(passwordInput, "1111");
      userEvent.click(submitButton);
    });

    waitFor(() => {
      expect(emailInput).toHaveValue("refiho2127@reebsd.com");
    });

    waitFor(() => {
      expect(passwordInput).toHaveValue("1111");
    });

    waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        login({ email: "refiho2127@reebsd.com", password: "1111" })
      );
    });
  });
});
