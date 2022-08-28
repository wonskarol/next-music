import { renderHook } from "@testing-library/react";

import { Albums } from "../../../api/types";
import { useFilteredAlbums } from "../use-filtered-albums";

const initAlbums: Albums["feed"]["entry"] = [
  {
    "im:name": {
      label: "Album One",
    },
    "im:image": [
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "55",
        },
      },
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "60",
        },
      },
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "170",
        },
      },
    ],
    id: {
      attributes: {
        "im:id": "1",
      },
    },
    "im:artist": {
      label: "Artist One",
    },
  },
  {
    "im:name": {
      label: "Album Two",
    },
    "im:image": [
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "55",
        },
      },
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "60",
        },
      },
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "170",
        },
      },
    ],

    id: {
      attributes: {
        "im:id": "2",
      },
    },
    "im:artist": {
      label: "Artist Two",
    },
  },
  {
    "im:name": {
      label: "Album Three",
    },
    "im:image": [
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "55",
        },
      },
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "60",
        },
      },
      {
        label: "http://fake.url/fake-cover.png",
        attributes: {
          height: "170",
        },
      },
    ],

    id: {
      attributes: {
        "im:id": "3",
      },
    },
    "im:artist": {
      label: "Artist Three",
    },
  },
];

describe("use-filtered-albums", () => {
  it("should filter albums by artist name (case insensitive), 1 result", () => {
    const { result } = renderHook(() =>
      useFilteredAlbums(initAlbums, "artist one")
    );

    expect(result.current.length).toEqual(1);
    expect(result.current[0]["im:artist"].label).toEqual("Artist One");
  });

  it("should filter albums by artist name (case insensitive), 3 results", () => {
    const { result } = renderHook(() =>
      useFilteredAlbums(initAlbums, "artist")
    );

    expect(result.current.length).toEqual(3);
    expect(result.current[0]["im:artist"].label).toEqual("Artist One");
    expect(result.current[1]["im:artist"].label).toEqual("Artist Two");
    expect(result.current[2]["im:artist"].label).toEqual("Artist Three");
  });

  it("should filter albums by album name (case insensitive), 1 result", () => {
    const { result } = renderHook(() =>
      useFilteredAlbums(initAlbums, "album one")
    );

    expect(result.current.length).toEqual(1);
    expect(result.current[0]["im:name"].label).toEqual("Album One");
  });

  it("should filter albums by album name (case insensitive), 3 results", () => {
    const { result } = renderHook(() => useFilteredAlbums(initAlbums, "album"));

    expect(result.current.length).toEqual(3);
    expect(result.current[0]["im:name"].label).toEqual("Album One");
    expect(result.current[1]["im:name"].label).toEqual("Album Two");
    expect(result.current[2]["im:name"].label).toEqual("Album Three");
  });

  it("should return init albums when value is empty", () => {
    const { result } = renderHook(() => useFilteredAlbums(initAlbums, ""));

    expect(result.current).toEqual(initAlbums);
  });
});
