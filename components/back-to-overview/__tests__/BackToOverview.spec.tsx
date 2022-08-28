import { render, screen } from "@testing-library/react";

import { BackToOverview } from "../BackToOverview";

describe("BackToOverview", () => {
  it("should render link to home page", () => {
    render(<BackToOverview />);

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link").getAttribute("href")).toEqual("/");
  });
});
