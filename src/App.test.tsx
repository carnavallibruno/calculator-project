import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Calculator component", () => {
  it("should render", () => {
    render(<App />);
    const calculatorElement = screen.getByTestId("calculator");
    expect(calculatorElement).toBeInTheDocument();
  });
});
