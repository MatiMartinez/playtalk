import React from "react";
import styled from "styled-components";
import ThreadRightBody from "./ThreadRightBody";
import ThreadRightFooter from "./ThreadRightFooter";
import ThreadRightHeader from "./ThreadRightHeader";

export default function ThreadRight() {
  return (
    <ThreadRightContainer>
      <ThreadRightHeader />
      <ThreadRightBody />
      <ThreadRightFooter />
    </ThreadRightContainer>
  );
}

const ThreadRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
