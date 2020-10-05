import React from "react";
import {
  render,
  waitForElement,
  screen,
  fireEvent,
} from "@testing-library/react";
import Products from "./Products";

test("should render products list", () => {
  const { getByTestId } = render(<Products />);
  const productsComponent = getByTestId("productList");
  expect(productsComponent).toBeInTheDocument();
});

test("should open modal on click of a product", async () => {
  render(<Products />);
  const products = await waitForElement(() => screen.getAllByTestId("product"));
  fireEvent.click(products[0]);
  const modal = screen.getByTestId("modal");
  expect(modal.style.display).toBe("block");
});
