import React from "react";
import styled from "styled-components";

export default function LandingIllustration() {
  return (
    <ContainerRight>
      <img src="assets/landing-illustration.svg" alt="landing-illustration" />
    </ContainerRight>
  );
}

const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
`;
