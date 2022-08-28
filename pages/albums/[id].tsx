import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

import { loadAlbum } from "../../api/load-album";
import { Album } from "../../api/types";
import { AlbumDescription } from "../../components/album-description/AlbumDescription";
import { AlbumSongsList } from "../../components/album-songs-list/AlbumSongsList";
import { BackToOverview } from "../../components/back-to-overview/BackToOverview";

interface Props {
  album: Album;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const Album = ({ album }: Props) => {
  const router = useRouter();

  // TODO: add loading component
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const [description, ...tracks] = album.results;

  return (
    <div>
      <Head>
        <title>NextMusic - {description.collectionName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackToOverview />
      <AlbumDescription
        artistName={description.artistName}
        albumName={description.collectionName}
        albumCoverSrc={description.artworkUrl100}
        albumCoverHeight={100}
        genre={description.primaryGenreName}
        trackCount={description.trackCount}
        releaseDate={description.releaseDate}
        copyright={description.copyright}
      />
      <AlbumSongsList songs={tracks} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  let id = params?.id;

  // TODO: add error handling
  if (!id) {
    throw new Error("Album id is required");
  }

  const album = await loadAlbum(id);

  return {
    props: { album },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Album;
