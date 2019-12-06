import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

it('renders "Womens Olympics" text', () => {
  const Navbar = rtl.render(<Navbar />);
});

describe("Card", () => {
  it("can debug the output", () => {
    tools.debug();
  });

  it("shows the correct player", () => {
    const elementWithJoshText = tools.queryByText(/us/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });
});
