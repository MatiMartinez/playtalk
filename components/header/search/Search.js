import React from "react";
import styled from "styled-components";

export default function Search() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search for people" />
      <SearchButton>
        <img src="/assets/loupe.svg" alt="search" />
      </SearchButton>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  background: #ffffff;
  border: 1px solid #9748db;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  line-height: 2rem;
  padding-left: 16px;
  background: transparent;
  width: 100%;

  ::placeholder {
    font-weight: 400;
    color: #cba3ec;
  }
`;

const SearchButton = styled.button`
  outline: none;
  border: none;
  background: #9748db;
  color: #ffffff;
  padding: 0 16px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 1.2rem;
  }
`;
