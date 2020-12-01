import React from "react";
import styled from "styled-components";
import ThreadLeft from "./thread-left/ThreadLeft";
import ThreadRight from "./thread-right/ThreadRight";

export default function Thread() {
  return (
    <ThreadContainer>
      <ThreadLeft />
      <ThreadRight />
    </ThreadContainer>
  );
}

const ThreadContainer = styled.div`
  display: flex;
  border-left: 4px solid #cba3ec;
  padding: 16px 0;
  background: #ffffff;
`;
