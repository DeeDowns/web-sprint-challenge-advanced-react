import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<nav></nav>)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, { target: { value: 'Dee' } })
    fireEvent.change(lastNameInput, { target: { value: 'Downs' } })
    fireEvent.change(addressInput, { target: { value: ' address 123' } })
    fireEvent.change(cityInput, { target: { value: 'Ocala' } })
    fireEvent.change(stateInput, { target: { value: 'Fl' } })
    fireEvent.change(zipInput, { target: { value: '34473' } })

    const checkoutButton = screen.getByRole('button', /checkout/i)

    fireEvent.click(checkoutButton)

    expect(screen.getByTestId(/successMessage/i)).toBeInTheDocument()
    expect(screen.getByText(/dee/i)).toBeInTheDocument()
    expect(screen.getByText(/downs/i)).toBeInTheDocument()
    expect(screen.getByText(/address 123/i)).toBeInTheDocument()
    expect(screen.getByText(/ocala/i)).toBeInTheDocument()
    expect(screen.getByText(/fl/i)).toBeInTheDocument()
    expect(screen.getByText(/34473/i)).toBeInTheDocument()

});
