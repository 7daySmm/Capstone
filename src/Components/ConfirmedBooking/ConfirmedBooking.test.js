import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import ConfirmedBooking from "./ConfirmedBooking";


describe("ConfirmedBooking component", ()=> {

    const data ={
        title : "data title",
        description: "data description"
    }

   test("render the ConfirmedBooking component with given title and description", ()=> {
    render(
        <ConfirmedBooking  title={data.title} description={data.description} />

    )

    const titleElement = screen.getByText(data.title);
    expect(titleElement).toBeInTheDocument();

 
    const descriptionElement = screen.getByText(data.description);
    expect(descriptionElement).toBeInTheDocument();

   
    const buttonElement = screen.getByText("Close");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClose handler when clicking outside the popup", () => {
    const onCloseMock = jest.fn();
    render(
      <Popup
        title={data.title}
        description={data.description}
        onClose={onCloseMock}
      />
    );

    const backgroundElement = screen.getByTestId("popup-background");
    fireEvent.click(backgroundElement);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("calls onClose handler when the Close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Popup
        title={data.title}
        description={data.description}
        onClose={onCloseMock}
      />
    );

    const buttonElement = screen.getByText("Close");
    fireEvent.click(buttonElement);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    
   })

})