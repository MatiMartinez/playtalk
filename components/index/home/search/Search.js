import React from "react";
import styled from "styled-components";

export default function Search() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search for people" />
      <SearchButton>
        <img src="/assets/loupe.svg" alt="search" />
        Search
      </SearchButton>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  font-size: 1.25rem;
  line-height: 3rem;
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
  border-radius: 0px 5px 5px 0px;
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
    margin-right: 8px;
  }
`;
