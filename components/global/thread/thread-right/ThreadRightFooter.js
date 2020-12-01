import React from "react";
import styled from "styled-components";

export default function ThreadRightFooter() {
  return (
    <ThreadRightFooterContainer>
      <Comments>12 comments</Comments>
      <Likes>20 likes</Likes>
    </ThreadRightFooterContainer>
  );
}

const ThreadRightFooterContainer = styled.div`
  display: flex;
`;

const Comments = styled.p`
  font-size: 0.8rem;
  margin: 0;
  margin-right: 12px;
`;

const Likes = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;
