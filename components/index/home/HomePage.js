import React from "react";
import styled from "styled-components";
import NewThread from "./new-thread/NewThread";
import Recommendations from "./recommendations/Recommendations";
import Search from "./search/Search";
import Today from "./today/Today";

export default function HomePage() {
  return (
    <HomePageContainer>
      <LeftContainer>
        <Search />
        <NewThread />
        <Recommendations />
        <Today />
      </LeftContainer>
      <RightContainer></RightContainer>
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  width: 100%;
  padding: 16px 112px;
`;

const LeftContainer = styled.div`
  grid-column: span 2;
`;
const RightContainer = styled.div`
  grid-column: span 1;
`;
