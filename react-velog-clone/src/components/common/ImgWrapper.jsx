import React from "react";
import styled from "styled-components";

const ImgWrapper = ({ thumbnail, ratio, alt }) => {
  return (
    <StyledRoot thumbnail={thumbnail} ratio={ratio}>
      {thumbnail && <img src={thumbnail} alt={alt} />}
    </StyledRoot>
  );
};

export default ImgWrapper;

const StyledRoot = styled.div`
  padding-top: ${({ thumbnail, ratio }) => (thumbnail ? ratio : "0")};
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
