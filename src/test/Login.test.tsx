import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

describe("Testing Login component", () => {
  test("Component renders normally", () => {
    render(<Login />);
  });

  test("Username input renders before loggin", () => {
    render(<Login />);
    let input = screen.getByLabelText("Username");
    expect(input).toBeInTheDocument;
  });

  test("Login button renders before loggin", () => {
    render(<Login />);
    let button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument;
  });

  test("Welcome message displayed after login", () => {
    render(<Login />);

    let username = screen.getByLabelText("Username");
    let password = screen.getByLabelText("Password");

    fireEvent.change(username, { target: { value: "user1" } });
    fireEvent.change(password, { target: { value: "user1" } });

    let loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    let message = screen.findByText("Welcome");
    expect(message).toBeInTheDocument;
  });
});
