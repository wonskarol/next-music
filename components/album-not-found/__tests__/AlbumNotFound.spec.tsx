import { render, screen } from "@testing-library/react";

import { AlbumNotFound } from "../AlbumNotFound";

describe("AlbumNotFound", () => {
  it("should render text", () => {
    render(<AlbumNotFound value="tame impala" />);

    expect(
      screen.getByText('No results found for "tame impala"')
    ).toBeInTheDocument();
  });
});
