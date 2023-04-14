import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

// Test bloğumuzu oluşturuyoruz.
describe("App", () => {
  test("renders header", () => {
    // Header componentini render ediyoruz.
    render(<Header />);
    // getByText ile "Emoji Search" öğesi aranır.
    const headerElement = screen.getByText(/Emoji Search/i);

    // Expect değerin sonuçla eşlesmesini bekler.
    expect(headerElement).toBeInTheDocument();
  });
});
