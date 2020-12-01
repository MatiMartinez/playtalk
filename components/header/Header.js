import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";

import { FirebaseContext } from "../../firebase/index";
import Router from "next/router";
import BtnStart from "./BtnStart";
import UserDropdown from "./UserDropdown";

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
      {!user ? (
        <Nav>
          <Link href="/posts">Posts</Link>
          <Link href="/people">Personas</Link>
          <UserDropdown>
            <BtnLogout onClick={handleLogout}>Logout</BtnLogout>
          </UserDropdown>
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
  padding: 24px 112px;
  background: #ffffff;
`;

const Brand = styled.h1`
  color: #9748db;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  color: #727272;

  a {
    margin: 0 1rem;
    font-size: 1.1rem;
    font-weight: 400;
  }

  a:hover {
    color: #000000;
  }
`;

const BtnLogout = styled.button`
  background: transparent;
  padding: 16px 96px 16px 48px;
  text-align: start;
`;
