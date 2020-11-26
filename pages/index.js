import styled from "styled-components";
import LandingIllustration from "../components/index/LandingIllustration";
import LandingText from "../components/index/LandingText";

export default function Home() {
  return (
    <Container>
      <LandingText />
      <LandingIllustration />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    padding: 0 80px;
    text-align: start;
  }
`;
