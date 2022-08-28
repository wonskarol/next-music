export interface Albums {
  feed: {
    entry: {
      "im:name": {
        label: string;
      };
      "im:image": [
        {
          label: string;
          attributes: {
            height: "55";
          };
        },
        {
          label: string;
          attributes: {
            height: "60";
          };
        },
        {
          label: string;
          attributes: {
            height: "170";
          };
        }
      ];
      "im:artist": {
        label: string;
      };
      id: {
        attributes: {
          "im:id": string;
        };
      };
    }[];
  };
}

export interface Album {
  results: [
    {
      wrapperType: "collection";
      artistName: string;
      collectionName: string;
      artworkUrl100: string;
      trackCount: number;
      copyright: string;
      releaseDate: string;
      primaryGenreName: string;
    },
    ...AlbumTrack[]
  ];
}

export interface AlbumTrack {
  wrapperType: "track";
  trackName: string;
  previewUrl: string;
  trackNumber: number;
  trackTimeMillis: number;
}
