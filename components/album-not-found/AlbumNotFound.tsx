import * as Styled from "./styled";

interface Props {
  value: string;
}

export const AlbumNotFound = ({ value }: Props) => (
  <Styled.Wrapper>No results found for {`"${value}"`}</Styled.Wrapper>
);
