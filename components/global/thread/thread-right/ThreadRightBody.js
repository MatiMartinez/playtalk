import React from "react";
import styled from "styled-components";

export default function ThreadRightBody() {
  return (
    <ThreadRightBodyContainer>
      <Text>
        I can't stand back & watch this happen to a great American City,
        Minneapolis. A total lack of leadership. Either the very weak Radical
        Left Mayor, Jacob Frey, get his act together and bring the City under
        control, or I will send in the National Guard & get the job done right.
      </Text>
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
