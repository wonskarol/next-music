import styled from "styled-components";

import { subtle } from "../../styles/typography";

export const List = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

export const SongDuration = styled.span`
  margin-left: 1rem;
  ${subtle}
`;
