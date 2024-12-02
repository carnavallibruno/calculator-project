import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Calculator Component", () => {
  it("renders calculator title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Calculadora/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("handles number button clicks", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    fireEvent.click(button1);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("1");
  });

  it("handles operator button clicks", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button1);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("1+1");
  });

  it("calculates the result", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const buttonEqual = screen.getByText("=");
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button1);
    fireEvent.click(buttonEqual);
    const resultElement = screen.getByText("= 2");
    expect(resultElement).toBeInTheDocument();
  });

  it("handles clear button", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const buttonClear = screen.getByText("C");
    fireEvent.click(button1);
    fireEvent.click(buttonClear);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("");
  });

  it("displays error for invalid input", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const buttonEqual = screen.getByText("=");
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEqual);
    const resultElement = screen.getByText("= Erro");
    expect(resultElement).toBeInTheDocument();
  });

  it("handles all number buttons", () => {
    render(<App />);
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const inputElement = screen.getByRole("textbox");
    numbers.forEach((number) => {
      const button = screen.getByText(number);
      fireEvent.click(button);
    });
    expect(inputElement).toHaveValue("1234567890");
  });

  it("handles all operator buttons", () => {
    render(<App />);
    const operators = ["+", "-", "*", "/"];
    const inputElement = screen.getByRole("textbox");
    operators.forEach((operator) => {
      const button = screen.getByText(operator);
      fireEvent.click(button);
    });
    expect(inputElement).toHaveValue("+-*/");
  });

  it("handles decimal button", () => {
    render(<App />);
    const buttonDecimal = screen.getByText(".");
    fireEvent.click(buttonDecimal);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue(".");
  });
});
