import * as Styled from "./styled";

interface Props {
  children: React.ReactNode;
}

export const AlbumsGrid = ({ children }: Props) => (
  <Styled.Grid>{children}</Styled.Grid>
);
