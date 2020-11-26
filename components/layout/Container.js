import React from "react";
import styled from "styled-components";

export default function Container(props) {
  // TODO: Main container with shadow
  return <Div padding={props.padding}>{props.children}</Div>;
}

const Div = styled.div`
  background-color: #ecf0f3;
  border-radius: 5px;
  padding: ${(props) => props.padding || " 0.5rem 1rem"};
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
`;
