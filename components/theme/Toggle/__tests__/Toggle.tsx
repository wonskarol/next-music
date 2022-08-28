import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Toggle } from "../Toggle";

describe("Search", () => {
  it("should call onChange and focus input when user clicks clear button", async () => {
    const mock = jest.fn();

    render(<Toggle onThemeChange={mock} theme="light" />);

    await userEvent.click(screen.getByRole("button", { name: "Toggle theme" }));

    expect(mock).toHaveBeenCalled();
  });
});
