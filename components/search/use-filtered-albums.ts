import { useEffect, useState } from "react";

import { Albums } from "../../api/types";

export const useFilteredAlbums = (
  initAlbums: Albums["feed"]["entry"],
  value: string
) => {
  const [filteredAlbums, setFilteredAlbums] = useState(() => initAlbums);

  useEffect(() => {
    if (value === "") {
      setFilteredAlbums(initAlbums);
      return;
    }

    const _filteredAlbums = initAlbums.filter((album) => {
      const artistName = album["im:artist"].label;
      const albumName = album["im:name"].label;

      return (
        artistName.toLowerCase().includes(value.toLowerCase()) ||
        albumName.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredAlbums(_filteredAlbums);
  }, [value, initAlbums]);

  return filteredAlbums;
};
