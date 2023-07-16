import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ChangePicture from "./ChangePicture"



test('renders changed! i want to know when button clicked', () => {
    render(<ChangePicture />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)
    expect(buttonElement).
})