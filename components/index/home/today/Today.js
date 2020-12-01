import React from "react";
import styled from "styled-components";
import Thread from "../../../global/thread/Thread";

export default function Today() {
  return (
    <TodayContainer>
      <Title>Today</Title>
      <Thread />
      <Thread />
      <Thread />
    </TodayContainer>
  );
}

const TodayContainer = styled.div`
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
