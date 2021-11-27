import React from "react";
import styled from "styled-components";

const ImgWrapper = ({ ratio, children }) => {
  return <StyledImgWrapper ratio={ratio}>{children}</StyledImgWrapper>;
};

export default ImgWrapper;

const StyledImgWrapper = styled.div`
  padding-top: ${({ ratio }) => ratio};
  /* styled-components에서 js 변수를 사용하는 방법 */
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
