import { AlbumTrack } from "../../api/types";
import { formatMs } from "../../utils/formatMs";
import * as Styled from "./styled";

interface Props {
  songs: AlbumTrack[];
}

export const AlbumSongsList = ({ songs }: Props) => {
  return (
    <Styled.List>
      {songs.map((song) => (
        <Styled.ListItem key={`${song.trackNumber}-${song.trackTimeMillis}`}>
          <span>
            {`${song.trackNumber}. ${song.trackName}`}
            <Styled.SongDuration>
              {formatMs(song.trackTimeMillis)}
            </Styled.SongDuration>
          </span>
          {song.previewUrl && (
            <audio controls>
              <source src={song.previewUrl} type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          )}
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
};
