import styled from "styled-components";

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 4rem;
  color: #0086ea;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

export const IconWrapper = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 2.4rem;
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.span`
  margin-left: 1rem;
`;
