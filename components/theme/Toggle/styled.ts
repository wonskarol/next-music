import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  border: none;
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  }

  // Fix for iphone https://stackoverflow.com/a/23895956
  > svg {
    position: absolute;
    color: ${({ theme }) => theme.primary};
  }
`;
