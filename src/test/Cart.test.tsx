import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Testing Cart component", () => {
  test("One item is added to the cart once 'add to cart' is clicked", () => {
    render(<App />);

    let product = screen.getAllByRole("button", { name: "Add to Cart" });

    fireEvent.click(product[0]);

    let removeButton = screen.getAllByRole("button", { name: "Remove" });

    expect(removeButton.length).toBe(1);
  });

  test("Item is not duplicate if clicked twice", () => {
    render(<App />);

    let product = screen.getAllByRole("button", { name: "Add to Cart" });

    fireEvent.click(product[0]);
    fireEvent.click(product[0]);

    let removeButton = screen.getAllByRole("button", { name: "Remove" });

    expect(removeButton.length).toBe(1);
  });

  test("Cart contains 2 different items if 2 different items are added", () => {
    render(<App />);

    let product = screen.getAllByRole("button", { name: "Add to Cart" });

    fireEvent.click(product[0]);
    fireEvent.click(product[1]);

    let removeButton = screen.getAllByRole("button", { name: "Remove" });

    expect(removeButton.length).toBe(2);
  });
});
