import Router from "next/router";
import React from "react";
import styled from "styled-components";

export default function BtnStart() {
  return (
    <>
      <Button onClick={() => Router.push("/auth")}>Sign Up</Button>
    </>
  );
}

const Button = styled.button`
  background: #9748db;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px;

  :hover {
    background: #ab6ce2;
  }
`;
