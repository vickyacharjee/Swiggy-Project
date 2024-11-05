import Contact from "../Contact"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom";


test("should render my contact component-button",()=>{
    render(<Contact/>)

    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("checking the component contains the text(provided by the user)",()=>{
    render(<Contact/>)

    const text=screen.getByText("Profile");
    expect(text).toBeInTheDocument();
})

test("getting the how many text-box present)",()=>{
    render(<Contact/>)

    const text=screen.getAllByRole("textbox");
    expect(text.length).not.toBe(2); // Note only one text-box is present, so test case will be passed. (using .not just reverse true -> false and false-> true)
})