import styled from "styled-components";

import { VisuallyHidden } from "../../styles/mixins";

export const Wrapper = styled.div`
  max-width: 60rem;
  min-width: 18rem;
  border-radius: 2.5rem;
  border: 0.1rem solid #000000;
  background-color: #ffffff;
  display: flex;
  padding: 1rem;
  margin-bottom: 4rem;

  &:focus-within {
    outline: 0.1rem dotted #212121;
    outline: 0.5rem auto -webkit-focus-ring-color;
  }
`;

export const HiddenLabel = styled.label`
  ${VisuallyHidden}
`;

export const Input = styled.input`
  font-size: 1.6rem;
  color: #000000;
  background-color: #ffffff;
  border: none;
  flex-grow: 1;

  &:focus {
    outline: none;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export const SearchIcon = styled.span`
  font-size: 2.4rem;
  color: #000000;
  padding: 0 0.5rem;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;

export const ClearButton = styled.button`
  font-size: 2.4rem;
  color: #000000;
  border: none;
  background: none;
  padding: 0 0.5rem;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
`;
