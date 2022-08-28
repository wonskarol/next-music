import { render, screen } from "@testing-library/react";

import { AlbumTrack } from "../../../api/types";
import { AlbumSongsList } from "../AlbumSongsList";

export const data: AlbumTrack[] = [
  {
    wrapperType: "track",
    trackName: "One More Year",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c2/05/0f/c2050f69-9f9f-b898-1bf0-6418ed64cc4a/mzaf_14952629049609154453.plus.aac.p.m4a",
    trackNumber: 1,
    trackTimeMillis: 322373,
  },
  {
    wrapperType: "track",
    trackName: "Instant Destiny",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0f/c9/29/0fc92959-3dba-06c0-475b-46230bb87771/mzaf_6784599447777319498.plus.aac.p.m4a",
    trackNumber: 2,
    trackTimeMillis: 193693,
  },
  {
    wrapperType: "track",
    trackName: "Borderline",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/39/0f/41/390f4163-6d35-a29c-ba09-6add0e899322/mzaf_7246277651088857951.plus.aac.p.m4a",
    trackNumber: 3,
    trackTimeMillis: 237800,
  },
];

describe("AlbumSongsList", () => {
  const defaultProps = {
    songs: data,
  };

  it("should render three list items", () => {
    render(<AlbumSongsList {...defaultProps} />);

    expect(screen.getAllByRole("listitem").length).toEqual(3);
  });

  it("should render three audio controls", () => {
    const { container } = render(<AlbumSongsList {...defaultProps} />);

    expect(container.querySelectorAll("audio").length).toEqual(3);
  });

  it("should render songs number, title and duration", () => {
    render(<AlbumSongsList {...defaultProps} />);

    expect(screen.getByText("1. One More Year")).toBeInTheDocument();
    expect(screen.getByText("05:22")).toBeInTheDocument();

    expect(screen.getByText("2. Instant Destiny")).toBeInTheDocument();
    expect(screen.getByText("03:13")).toBeInTheDocument();

    expect(screen.getByText("3. Borderline")).toBeInTheDocument();
    expect(screen.getByText("03:57")).toBeInTheDocument();
  });
});
