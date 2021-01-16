import React from "react";
import styled from "styled-components";
import ThreadRightBody from "./ThreadRightBody";
import ThreadRightFooter from "./ThreadRightFooter";
import ThreadRightHeader from "./ThreadRightHeader";

export default function ThreadRight({ user, date, text, comments, likes }) {
  return (
    <ThreadRightContainer>
      <ThreadRightHeader user={user} date={date} />
      <ThreadRightBody text={text} />
      <ThreadRightFooter comments={comments} likes={likes} />
    </ThreadRightContainer>
  );
}

const ThreadRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
