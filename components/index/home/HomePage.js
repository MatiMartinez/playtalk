import React from "react";
import styled from "styled-components";
import Search from "./search/Search";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Search />
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  padding: 16px 64px;
`;
