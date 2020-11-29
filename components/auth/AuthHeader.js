import React from "react";
import styled from "styled-components";

export default function AuthHeader() {
  return (
    <Head>
      <h2>Welcome!</h2>
      <p>
        Sign in to get personalized user recommendations, follow and have them
        follow you, and get in touch and have fun together.
      </p>
    </Head>
  );
}

const Head = styled.div`
  text-align: center;
  margin-bottom: 24px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`;
