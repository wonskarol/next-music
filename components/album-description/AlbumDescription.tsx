import Image from "next/image";

import * as Styled from "./styled";

interface Props {
  artistName: string;
  albumName: string;
  albumCoverSrc: string;
  albumCoverHeight: number;
  genre: string;
  trackCount: number;
  releaseDate: string;
  copyright: string;
}

export const AlbumDescription = ({
  artistName,
  albumName,
  albumCoverSrc,
  albumCoverHeight,
  genre,
  trackCount,
  releaseDate,
  copyright,
}: Props) => (
  <Styled.Wrapper>
    <Styled.ImageWrapper>
      <Image
        height={albumCoverHeight}
        width={albumCoverHeight}
        src={albumCoverSrc}
        alt={`${albumName} by ${artistName} album cover`}
      />
    </Styled.ImageWrapper>
    <Styled.TextWrapper>
      <div>
        <Styled.ArtistName>{artistName}</Styled.ArtistName>
        <Styled.AlbumName>{albumName}</Styled.AlbumName>
        <Styled.Pill>{genre}</Styled.Pill>
      </div>
      <div>
        <Styled.Info>
          {new Date(releaseDate).toLocaleString(undefined, {
            month: "long",
            year: "numeric",
          })}
          , {trackCount === 1 ? "1 song" : `${trackCount} songs`}
        </Styled.Info>
        <Styled.Info>{copyright}</Styled.Info>
      </div>
    </Styled.TextWrapper>
  </Styled.Wrapper>
);
