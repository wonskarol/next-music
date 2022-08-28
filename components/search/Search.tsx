import { ChangeEvent, useRef } from "react";

import { MdSearch, MdClose } from "react-icons/md";

import * as Styled from "./styled";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Search = ({ value, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    inputRef.current?.focus();
    onChange("");
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.SearchIcon>
          <MdSearch />
        </Styled.SearchIcon>
        <Styled.HiddenLabel htmlFor="search">Search:</Styled.HiddenLabel>
        <Styled.Input
          id="search"
          ref={inputRef}
          placeholder="Search Top 100 albums and artists"
          type="search"
          size={1}
          value={value}
          onChange={handleChange}
        />
        {value !== "" && (
          <Styled.ClearButton onClick={handleClear} aria-label="Clear input">
            <MdClose />
          </Styled.ClearButton>
        )}
      </Styled.Wrapper>
    </>
  );
};
