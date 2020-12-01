import React from "react";
import styled from "styled-components";
import Thread from "../../../global/thread/Thread";

export default function Recommendations() {
  return (
    <RecommendationsContainer>
      <Title>Recommendations</Title>
      <Thread />
      <Thread />
      <Thread />
    </RecommendationsContainer>
  );
}

const RecommendationsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  margin-top: 32px;
`;
