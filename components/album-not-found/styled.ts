import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
