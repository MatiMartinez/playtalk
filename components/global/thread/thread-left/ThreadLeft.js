import React from "react";
import styled from "styled-components";

export default function ThreadLeft() {
  return (
    <ThreadLeftContainer>
      <img
        src="https://images.pexels.com/photos/4408503/pexels-photo-4408503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="user"
      />
    </ThreadLeftContainer>
  );
}

const ThreadLeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 16px;

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
`;
