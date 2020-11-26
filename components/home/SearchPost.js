import React from "react";
import styled from "styled-components";
import Container from "../layout/Container";

export default function SearchPost() {
  return (
    <Container>
      <InputText type="text" placeholder="Buscar" />
      <InputSubmit type="submit">Buscar</InputSubmit>
    </Container>
  );
}

const InputText = styled.input``;
const InputSubmit = styled.button``;
