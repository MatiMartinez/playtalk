import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function UserDropdown(props) {
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
      <NavButton onClick={handleDropdown}>Usuario</NavButton>
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
  border: none;
  outline: none;
  background: transparent;
  color: #727272;
  margin: 0 1rem;
  font-size: 1.1rem;
  cursor: pointer;

  :hover {
    color: #000000;
  }
`;

const PopContainer = styled.div`
  position: absolute;
  top: calc(24px + 2rem);
  right: -112px;
  border-radius: 0;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-60px)")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
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
