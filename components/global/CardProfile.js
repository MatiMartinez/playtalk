import React from "react";
import styled from "styled-components";
import Container from "../layout/Container";

export default function CardProfile() {
  return (
    <Container>
      <Card>
        <CardImg>
          <Img src="/assets/user.svg" />
        </CardImg>
        <CardBody>
          <CardName>Matias Martinez</CardName>
          <CardFollow>
            <Following>0 Following</Following>
            <Followers>0 Followers</Followers>
          </CardFollow>
        </CardBody>
      </Card>
    </Container>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

// Img
const CardImg = styled.div`
  display: flex;
`;

const Img = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
  border-radius: 50%;
`;

// Body
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const CardName = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 2rem;
  font-weight: 400;
`;

const CardFollow = styled.div`
  display: flex;
`;

const Following = styled.p`
  margin: 0 1rem 0 0;
  color: #8a8da2;
`;

const Followers = styled.p`
  margin: 0;
  color: #8a8da2;
`;
