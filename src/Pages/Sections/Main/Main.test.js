import React from "react";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

test("renders Main component without errors", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );


    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Reserve a table")).toBeInTheDocument();
    expect(screen.getByAltText("Restarurant main image")).toBeInTheDocument();


});