import React from "react";
import styled from "styled-components";

export default function Search() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search..." />
      <SearchButton>Buscar</SearchButton>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  outline: none;
  border: 1px solid #ccc;
  font-size: 1.5rem;
  line-height: 3rem;
  padding-left: 0.5rem;
`;

const SearchButton = styled.button`
  outline: none;
  border: none;
  border-radius: 0px;
  box-shadow: 0px 0px 8px #ceced1;
`;
