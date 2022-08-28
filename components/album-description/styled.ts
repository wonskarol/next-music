import styled from "styled-components";

import { subtitle, subtle } from "../../styles/typography";

export const Wrapper = styled.div`
  max-width: 60rem;
  display: flex;
  gap: 2em;
  margin-bottom: 4rem;
`;

export const ImageWrapper = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtistName = styled.span`
  display: block;
  ${subtitle}
`;

export const AlbumName = styled.span`
  display: block;
`;

export const Info = styled.span`
  display: block;
  ${subtle}
`;

export const Pill = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 1rem;
  padding: 0.2rem 0.6rem;
  margin: 0.6rem 0;
  ${subtle}
`;
