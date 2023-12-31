import React from 'react'
import { render, screen, act, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ChangePicture from "./ChangePicture"





test('renders changed! i want to know when button clicked', async () => {
    const { getByText } = render(<ChangePicture />);

    await waitFor(() => {
        const i1 = screen.getByTestId('I1')
        expect(i1).not.toBeNull();
    })

    const buttonElement = getByText('Change Picture');
    userEvent.click(buttonElement)

    await waitFor(() => {
        const i2 = screen.getByTestId('I2')
        expect(i2).not.toBeNull();
    })
})