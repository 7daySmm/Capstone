import React from "react";
import { render, screen } from "@testing-library/react";
import Orders from "./Orders";

describe("Orders component", () => {
  test("renders the UnderConstruction component", () => {
    render(<Orders />);
    
    const underConstructionElement = screen.getByTestId("under-construction");
    expect(underConstructionElement).toBeInTheDocument();
  });
});