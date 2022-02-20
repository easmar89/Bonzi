import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing App component", () => {
  test("App renders normally", () => {
    render(<App />);
  });

  test("Items displayed with 'add to cart' buttons", () => {
    render(<App />);
    let button = screen.getAllByRole("button", { name: "Add to Cart" });
    expect(button[0]).toBeInTheDocument;
  });

  test("Item added to cart when 'Add to Cart' is clicked", () => {
    render(<App />);

    let button = screen.getAllByRole("button", { name: "Add to Cart" });
    expect(button.length).toBe(7);
  });
});
