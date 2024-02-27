import * as React from "react";
import styled, { keyframes } from "styled-components";

const rotateRing = keyframes`
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
`;

const rotateInner = keyframes`
  0% { transform: rotate(0) }
  100% { transform: rotate(-360deg) }
`;

const textLoading = keyframes`
  0% { opacity: 0 }
  20% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
`;

const Container = styled.div`
  height: 50px;
  width: 50px;
  margin: 5px auto;
`;

const Ring = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 3px solid transparent;
  border-color: transparent lightgrey transparent lightgrey;
  animation: ${rotateRing} 2s linear 0s infinite normal;
  transform-origin: 50% 50%;
`;

const RingInner = styled.div`
  position: relative;
  top: -52px;
  left: 5px;
  width: 43px;
  height: 43px;
  border-radius: 100%;
  border: 2px solid transparent;
  border-color: transparent lightgrey transparent lightgrey;
  animation: ${rotateInner} 1s linear 0s infinite normal;
  transform-origin: 50% 50%;
`;

const TextContainer = styled.div`
  position: relative;
  top: -80px;
  left: -22px;
  width: 100px;
  user-select: none;
  animation: ${textLoading} 3s linear 0s infinite normal;
  color: lightgrey;
  font-family: "Open Sans", sans-serif;
  font-size: 8px;
  font-weight: bold;
  opacity: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const LoaderAnimation: React.FC = React.memo(() => {
  return (
    <Container>
      <Ring />
      <RingInner />
      <TextContainer>loading</TextContainer>
    </Container>
  );
});

LoaderAnimation.displayName = "LoaderAnimation";
