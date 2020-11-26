import React from "react";
import styled from "styled-components";
import Container from "../layout/Container";

import fbase from "../../firebase/index";
import Router from "next/router";

export default function Login() {
  async function handleLogin() {
    try {
      await fbase.loginUser();
      Router.push("/posts");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Container padding="2rem 1rem">
      <ContentImg>
        <Img src="/assets/user.svg" />
      </ContentImg>
      <Body>
        <p>
          Unete a nuestra comunidad, donde disfrutamos jugar videojuegos y pasar
          un buen rato juntos!
        </p>
        <hr />
        <p>
          <span>
            Inicia sesión en <b>Google</b> para continuar con <b>Talk</b>
          </span>
        </p>
        <ContentButtons>
          <BtnLogin onClick={handleLogin}>
            <img src="/assets/google-icon.svg" alt="google" width="25px" />{" "}
            Iniciar Sesión con Google
          </BtnLogin>
        </ContentButtons>
      </Body>
    </Container>
  );
}

// TODO: Container & Brand Image
const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 4rem 0.5rem;
`;

const Img = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

// TODO: Login body container
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  p {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    margin: 0.5rem 0;

    span {
      font-size: 1.1rem;
      font-weight: 400;

      b {
        color: #5f658d;
      }
    }
  }

  hr {
    width: 100%;
  }
`;

// TODO: Button container to log in with google
const ContentButtons = styled.div`
  margin-top: 1rem;
`;

const BtnLogin = styled.button`
  border: none;
  outline: none;
  border-radius: 50px;
  background-color: #ecf0f3;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.9rem;

  :hover {
    background-color: #dde1e7;
    cursor: pointer;
  }

  img {
    margin-right: 0.5rem;
  }
`;
