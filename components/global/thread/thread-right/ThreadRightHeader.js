import React from "react";
import styled from "styled-components";

export default function ThreadRightHeader() {
  return (
    <ThreadRightHeaderContainer>
      <Username>Donald J. Trump</Username>
      <Separator>-</Separator>
      <Time>2h</Time>
    </ThreadRightHeaderContainer>
  );
}

const ThreadRightHeaderContainer = styled.div`
  display: flex;
`;

const Username = styled.h2`
  font-size: 1rem;
  margin: 0;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const Time = styled.p`
  font-size: 1rem;
  margin: 0;
  color: gray;
`;
