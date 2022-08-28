import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Search } from "../Search";

describe("Search", () => {
  const defaultProps = {
    value: "",
    onChange: () => {},
  };

  it("should render input", () => {
    render(<Search {...defaultProps} />);

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("should call onChange when user types", async () => {
    const mock = jest.fn();

    render(<Search {...defaultProps} onChange={mock} />);

    await userEvent.type(screen.getByRole("searchbox"), "t");

    expect(mock).toHaveBeenCalledWith("t");
  });

  it("should call onChange and focus input when user clicks clear button", async () => {
    const mock = jest.fn();

    render(<Search onChange={mock} value="tame" />);

    await userEvent.click(screen.getByRole("button", { name: "Clear input" }));

    expect(mock).toHaveBeenCalledWith("");
    expect(screen.getByRole("searchbox")).toHaveFocus();
  });
});
