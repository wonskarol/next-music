import Link from "next/link";
import Image from "next/image";

import * as Styled from "./styled";

interface Props {
  artistName: string;
  albumId: string;
  albumName: string;
  albumCoverSrc: string;
  albumCoverHeight: string;
}

export const AlbumTile = ({
  artistName,
  albumId,
  albumName,
  albumCoverSrc,
  albumCoverHeight,
}: Props) => (
  <Link href={`albums/${albumId}`} passHref>
    <Styled.Wrapper>
      <Styled.Image>
        <Image
          height={albumCoverHeight}
          width={albumCoverHeight}
          src={albumCoverSrc}
          alt={`${albumName} by ${artistName} album cover`}
        />
      </Styled.Image>
      <Styled.Description>
        <Styled.ArtistName>{artistName}</Styled.ArtistName>
        <Styled.AlbumName>{albumName}</Styled.AlbumName>
      </Styled.Description>
    </Styled.Wrapper>
  </Link>
);
