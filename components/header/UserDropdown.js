import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { FirebaseContext } from "../../firebase/index";

export default function UserDropdown(props) {
  //TODO: Firebase
  const { user } = useContext(FirebaseContext);

  //TODO: Dropdown Menu
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  function handleDropdown() {
    setOpen(!open);
  }

  useEffect(() => {
    function pageClickEvent(e) {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [open]);

  return (
    <UserPopperContainer>
      <NavButton onClick={handleDropdown}>
        <img src={user.photoURL} alt="user" />
      </NavButton>
      <PopContainer ref={dropdownRef} open={open}>
        <Link href="/profile">Profile</Link>
        <Link href="/profile">Friends</Link>
        <Link href="/profile">Community</Link>
        {props.children}
      </PopContainer>
    </UserPopperContainer>
  );
}

const UserPopperContainer = styled.div`
  position: relative;
`;

const NavButton = styled.button`
  margin: 0 1rem;
  background: transparent;
  border-radius: 50%;
  padding: 0;

  img {
    border-radius: 50%;
    width: 35px;
  }
`;

const PopContainer = styled.div`
  position: absolute;
  top: calc(24px + 2rem);
  right: 0;
  border-radius: 0;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-60px)")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  display: none;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  background: #ffffff;
  box-shadow: 0 0 3px #999999;
  display: flex;
  flex-direction: column;

  a {
    padding: 16px 96px 16px 48px;
    margin: 0 !important;
  }
`;
