import React from "react";
import Router from "next/router";
import styled from "styled-components";

import fbase from "../../firebase/index";

export default function () {
  async function handleAuth() {
    try {
      await fbase.loginUser();
      Router.push("/posts");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <BtnsContainer>
      <SocialBtn onClick={handleAuth}>
        <img src="/assets/google-icon.svg" alt="google" />
        Log in with Google
      </SocialBtn>
      <SocialBtn onClick={handleAuth}>
        <img src="/assets/facebook-icon.png" alt="google" />
        Log in with Facebook
      </SocialBtn>
      <SocialBtn onClick={handleAuth}>
        <img src="/assets/twitter-icon.svg" alt="google" />
        Log in with Twitter
      </SocialBtn>
    </BtnsContainer>
  );
}

const BtnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
  margin-bottom: 24px;
`;

const SocialBtn = styled.button`
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 8px 64px;
  cursor: pointer;

  img {
    width: 25px;
    height: auto;
    margin-right: 1rem;
  }
`;
