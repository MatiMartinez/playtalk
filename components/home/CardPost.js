import React from "react";
import styled from "styled-components";

//import CommentsImg from "../../assets/comment.svg";
//import LikeImg from "../../assets/like.svg";

export default function CardPost() {
  return (
    <Card>
      <CardImg>
        <Img src="https://images.pexels.com/photos/4408503/pexels-photo-4408503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </CardImg>
      <CardBody>
        <CardTitle>Paul Carroll</CardTitle>
        <CardText>
          I'm a native English speaker and new to the app would be glad to help
          people with English and would love learn about there language and
          cultures.
        </CardText>
        <CardDate>Hace 9 horas</CardDate>
      </CardBody>
      <CardData>
        <CommentsLikes>
          <img src="/assets/comment.svg" alt="comments" width="75px" />5
        </CommentsLikes>
        <CommentsLikes>
          <img src="/assets/like.svg" alt="likes" width="75px" />5
        </CommentsLikes>
      </CardData>
    </Card>
  );
}

const Card = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// Img --------------------------------------------------
const CardImg = styled.div`
  display: flex;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0.5rem 1rem;
`;

// Body --------------------------------------------------
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  font-weight: 400;
`;

const CardText = styled.p`
  margin: 0 0 0.5rem 0;
  font-weight: 300;
`;

const CardDate = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 1rem;
  color: #8a8da2;
`;

// Data --------------------------------------------------
const CardData = styled.div`
  display: flex;
  padding: 0 1rem;
`;

const CommentsLikes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
