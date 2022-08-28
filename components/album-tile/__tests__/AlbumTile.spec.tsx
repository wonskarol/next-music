import { render, screen } from "@testing-library/react";

import { AlbumTile } from "../AlbumTile";

describe("AlbumTile", () => {
  const defaultProps = {
    artistName: "Tame Impala",
    albumId: "1497230760",
    albumName: "The Slow Rush",
    albumCoverSrc: "http://fake.url/fake-cover.png",
    albumCoverHeight: "100",
  };

  it("should render artist name", () => {
    render(<AlbumTile {...defaultProps} />);

    expect(screen.getByText("Tame Impala")).toBeInTheDocument();
  });

  it("should render album name", () => {
    render(<AlbumTile {...defaultProps} />);

    expect(screen.getByText("The Slow Rush")).toBeInTheDocument();
  });

  it("should render cover image with alt text", () => {
    render(<AlbumTile {...defaultProps} />);

    expect(
      screen.getByAltText("The Slow Rush by Tame Impala album cover")
    ).toBeInTheDocument();
  });

  it("should render link to album page", () => {
    render(<AlbumTile {...defaultProps} />);

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link").getAttribute("href")).toEqual(
      "/albums/1497230760"
    );
  });
});
