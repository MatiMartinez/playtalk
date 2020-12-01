import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Playtalk</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  margin: 36px 0;
  /*display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
  margin: 2rem 2rem;*/
`;
