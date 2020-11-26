import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function LandingText() {
  return (
    <ContainerLeft>
      <h1>playtalk</h1>
      <p>Practica hablar cualquier idioma de la manera más divertida</p>
      <ButtonsLeft>
        <button>Sign Up</button>
        <Link href="/about">I want to see more</Link>
      </ButtonsLeft>
    </ContainerLeft>
  );
}

const ContainerLeft = styled.div`
  h1 {
    color: #9748db;
    font-size: 3rem;
    font-weight: 800;
    margin: 0 0 16px 0;
    font-family: "Nunito", sans-serif;
  }

  p {
    font-size: 3rem;
    font-weight: 500;
    margin: 0 0 32px 0;
  }
`;

const ButtonsLeft = styled.div`
  button {
    background: #9748db;
    color: #ffffff;
    border-radius: 10px;
    padding: 12px 16px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    color: #9748db;
    text-decoration: underline;
    margin-left: 32px;
  }
`;
