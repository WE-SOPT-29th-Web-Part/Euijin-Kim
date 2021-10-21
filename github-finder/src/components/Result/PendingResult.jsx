import React from "react";
import styled from "styled-components";

const PendingResult = () => {
  return <StyledSpin />;
};

export default PendingResult;

const StyledSpin = styled.div`
  width: 50px;
  height: 50px;
  border: 8px solid #1b1d21;
  border-radius: 50%;
  border-right-color: white;
  animation: spin 500ms linear 0s infinite normal none;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
