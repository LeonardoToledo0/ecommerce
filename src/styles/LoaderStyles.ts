import styled, { keyframes } from "styled-components";
import { corPrimaria, corSecundaria } from "./GlobalStyles";

const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerHome = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Spinner = styled.div`
  border: 6px solid transparent;
  border-top: 6px solid;
  border-image: linear-gradient(to right, ${corPrimaria}, ${corSecundaria});
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spinAnimation} 0.8s linear infinite;
`;

export const SpinnerText = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${corSecundaria};
`;
