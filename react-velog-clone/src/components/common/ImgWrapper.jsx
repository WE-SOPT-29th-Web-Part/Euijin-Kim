import React from "react";
import styled from "styled-components";

const ImgWrapper = ({ ratio, children }) => {
  return <StyledRoot ratio={ratio}>{children}</StyledRoot>;
};

export default ImgWrapper;

const StyledRoot = styled.div`
  padding-top: ${({ ratio }) => ratio};
  position: relative;
  margin-bottom: 16px;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
