import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Product from "./Product";

test("should renders Product details", () => {
  const product = {
    name: "ABC",
    price: 250,
    image: "https://testing-library.com/img/octopus-64x64.png",
  };
  const { getByText, getByTestId } = render(<Product {...product} />);

  const productName = getByText(product.name);
  const priceText = getByText("$ 250");
  const productImage = getByTestId("productImage");

  expect(productName).toBeInTheDocument();
  expect(priceText).toBeInTheDocument();
  expect(productImage.src).toBe(product.image);
});

test("should render product details within price range", () => {
  const product = {
    name: "ABC",
    price: {
      low: 20,
      high: 30,
    },
    image: "https://testing-library.com/img/octopus-64x64.png",
  };
  const { getByText, getByTestId } = render(<Product {...product} />);

  const productName = getByText(product.name);
  const priceText = getByText("From $ 20");
  const productImage = getByTestId("productImage");

  expect(productName).toBeInTheDocument();
  expect(priceText).toBeInTheDocument();
  expect(productImage.src).toBe(product.image);
});

test("should call onClick callback on click of a product", () => {
  const onClick = jest.fn();
  const product = {
    id: "abc",
    name: "ABC",
    price: {
      low: 20,
      high: 30,
    },
    image: "https://testing-library.com/img/octopus-64x64.png",
  };
  const { getByTestId } = render(<Product onClick={onClick} {...product} />);
  const productComponent = getByTestId("product");

  fireEvent.click(productComponent);

  expect(onClick).toBeCalled();
});
