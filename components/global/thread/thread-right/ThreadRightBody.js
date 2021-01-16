import React from "react";
import styled from "styled-components";

export default function ThreadRightBody({ text }) {
  return (
    <ThreadRightBodyContainer>
      <Text>{text}</Text>
    </ThreadRightBodyContainer>
  );
}

const ThreadRightBodyContainer = styled.div`
  display: flex;
  margin: 8px 0;
  padding: 12px;
  border-radius: 5px;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0;
`;
