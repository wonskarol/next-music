import { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { loadAlbums } from "../api/load-albums";
import { Albums } from "../api/types";
import { Search } from "../components/search/Search";
import { useFilteredAlbums } from "../components/search/use-filtered-albums";
import { AlbumsGrid } from "../components/albums-grid/AlbumsGrid";
import { AlbumTile } from "../components/album-tile/AlbumTile";
import { AlbumNotFound } from "../components/album-not-found/AlbumNotFound";

interface Props {
  albums: Albums;
}

const Albums: NextPage<Props> = ({ albums }) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredAlbums = useFilteredAlbums(albums.feed.entry, searchValue);

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Head>
        <title>NextMusic - Top 100 albums</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Search value={searchValue} onChange={handleChange} />
      <AlbumsGrid>
        {filteredAlbums.map((album) => (
          <AlbumTile
            key={album.id.attributes["im:id"]}
            artistName={album["im:artist"].label}
            albumId={album.id.attributes["im:id"]}
            albumName={album["im:name"].label}
            albumCoverHeight={album["im:image"][2].attributes.height}
            albumCoverSrc={album["im:image"][2].label}
          />
        ))}
      </AlbumsGrid>
      {filteredAlbums.length === 0 && <AlbumNotFound value={searchValue} />}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const albums = await loadAlbums();

  return {
    props: { albums },
    revalidate: 10,
  };
};

export default Albums;
