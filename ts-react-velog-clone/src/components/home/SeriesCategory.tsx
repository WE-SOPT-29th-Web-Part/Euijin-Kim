import React from "react";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const SeriesCategory = () => {
  return (
    <StyledRoot>
      <div>series</div>
    </StyledRoot>
  );
};

export default SeriesCategory;

const StyledRoot = styled.div`
  background-color: ${colors.mainWhite};
`;
