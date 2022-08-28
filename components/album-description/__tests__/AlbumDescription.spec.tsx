import { render, screen } from "@testing-library/react";

import { AlbumDescription } from "../AlbumDescription";

describe("AlbumDescription", () => {
  const defaultProps = {
    artistName: "Tame Impala",
    albumName: "The Slow Rush",
    albumCoverSrc: "http://fake.url/fake-cover.png",
    albumCoverHeight: 100,
    genre: "Alternative",
    trackCount: 12,
    releaseDate: "2020-02-14T12:00:00Z",
    copyright: "℗ 2020 Modular Recordings Pty Ltd",
  };

  it("should render artist name", () => {
    render(<AlbumDescription {...defaultProps} />);

    expect(screen.getByText("Tame Impala")).toBeInTheDocument();
  });

  it("should render album name", () => {
    render(<AlbumDescription {...defaultProps} />);

    expect(screen.getByText("The Slow Rush")).toBeInTheDocument();
  });

  it("should render cover image with alt text", () => {
    render(<AlbumDescription {...defaultProps} />);

    expect(
      screen.getByAltText("The Slow Rush by Tame Impala album cover")
    ).toBeInTheDocument();
  });

  it("should render genre tag", () => {
    render(<AlbumDescription {...defaultProps} />);

    expect(screen.getByText("Alternative")).toBeInTheDocument();
  });

  it("should render number of songs (plural)", () => {
    render(<AlbumDescription {...defaultProps} />);

    expect(screen.getByText("12 songs", { exact: false })).toBeInTheDocument();
  });

  it("should render number of songs (singular)", () => {
    render(<AlbumDescription {...defaultProps} trackCount={1} />);

    expect(screen.getByText("1 song", { exact: false })).toBeInTheDocument();
  });

  it("should render release date", () => {
    render(<AlbumDescription {...defaultProps} />);

    expect(
      screen.getByText("February 2020", { exact: false })
    ).toBeInTheDocument();
  });

  it("should render copyright note", () => {
    render(<AlbumDescription {...defaultProps} />);

    expect(
      screen.getByText("℗ 2020 Modular Recordings Pty Ltd")
    ).toBeInTheDocument();
  });
});
