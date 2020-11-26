import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import CardProfile from "../components/global/CardProfile";
import DefaultPosts from "../components/home/DefaultPosts";
import PopularPosts from "../components/home/PopularPosts";
import SearchPost from "../components/home/SearchPost";

export default function posts() {
  return (
    <Layout>
      <Container>
        <SearchPost />
        <H2>Populares</H2>
        <PopularPosts />
        <H2>Hoy</H2>
        <DefaultPosts />
      </Container>
      <Aside>
        <H2>Perfil</H2>
        <CardProfile />
      </Aside>
    </Layout>
  );
}

// Principal
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  grid-column: span 8;
`;

// Aside
const Aside = styled.aside`
  grid-column: span 4;
`;

const H2 = styled.h2`
  color: #5f658d;
`;
