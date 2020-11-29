import React from "react";
import styled from "styled-components";
import AuthForm from "../components/auth/AuthForm";
import AuthHeader from "../components/auth/AuthHeader";
import AuthFooter from "../components/auth/AuthFooter";

export default function auth() {
  return (
    <Container>
      <AuthHeader />
      <AuthForm />
      <AuthFooter />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
