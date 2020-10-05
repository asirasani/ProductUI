import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CarouselModal from "./CarouselModal";

test("should hide carousel", () => {
  const props = {
    open: false,
  };
  const { getByTestId } = render(<CarouselModal {...props} />);

  const modal = getByTestId("modal");
  expect(modal.style.display).toBe("none");
});

test("should have carousel shown", () => {
  const props = {
    open: true,
  };
  const { getByRole } = render(<CarouselModal {...props} />);

  const modal = getByRole("dialog");
  expect(modal.style.display).toBe("block");
});

test("should close carousel on click of carousel close button", () => {
  const props = {
    open: true,
  };
  const onClose = jest.fn(() => {
    props.open = false;
  });
  const { getByRole } = render(<CarouselModal onClose={onClose} {...props} />);

  const closeButton = getByRole("button");

  fireEvent.click(closeButton);
  expect(onClose).toBeCalled();
});
