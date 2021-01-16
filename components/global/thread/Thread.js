import React from "react";
import styled from "styled-components";
import ThreadLeft from "./thread-left/ThreadLeft";
import ThreadRight from "./thread-right/ThreadRight";

export default function Thread({ user, date, text, comments, likes }) {
  return (
    <ThreadContainer>
      <ThreadLeft />
      <ThreadRight
        user={user}
        date={date}
        text={text}
        comments={comments}
        likes={likes}
      />
    </ThreadContainer>
  );
}

const ThreadContainer = styled.div`
  display: flex;
  border-left: 4px solid #cba3ec;
  padding: 16px 0;
  background: #ffffff;
`;
