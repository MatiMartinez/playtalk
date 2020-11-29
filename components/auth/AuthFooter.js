import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function AuthFooter() {
  return (
    <Container>
      <p>
        You want to know more? <Link href="/about">More info</Link>
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  text-align: center;

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    color: #9748db;
  }
`;
