import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";

import { FirebaseContext } from "../../firebase/index";
import Router from "next/router";
import BtnStart from "./BtnStart";

export default function Header() {
  // TODO: User authentication
  const { user, fbase } = useContext(FirebaseContext);

  async function handleLogout() {
    try {
      await fbase.logoutUser();
      Router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Navegation>
      <div>
        <Link href="/">
          <Brand>playtalk</Brand>
        </Link>
      </div>
      {user ? (
        <Nav>
          <Link href="/posts">Posts</Link>
          <Link href="/people">Personas</Link>
          <Link href="/notifications">
            <IconImg src="/assets/notification-white.svg" />
          </Link>
          <Link href="/profile">
            <IconImg src="/assets/user-white.svg" />
          </Link>
          <button onClick={handleLogout}>Cerrar</button>
        </Nav>
      ) : (
        <Nav>
          <BtnStart />
        </Nav>
      )}
    </Navegation>
  );
}

const Navegation = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 0.5rem 2rem;
  color: #f9fafb;
`;

const Brand = styled.h1`
  color: #9748db;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    margin: 0 1rem;
    font-size: 1.1rem;
    font-weight: 400;
    &:nth-child(2) {
      margin-right: 4rem;
    }
  }
`;

const IconImg = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 0.5rem;
  cursor: pointer;
`;
