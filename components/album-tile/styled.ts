import styled from "styled-components";

import { subtitle } from "../../styles/typography";

export const Wrapper = styled.a`
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  transition: background-color 0.2s linear;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  padding-top: 2rem;
`;

export const ArtistName = styled.span`
  display: block;
  ${subtitle}
`;

export const AlbumName = styled.span`
  display: block;
`;
