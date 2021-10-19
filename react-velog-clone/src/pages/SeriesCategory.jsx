import React from "react";
import styled from "styled-components";
import { colors } from "../libs/constants/colors";

const SeriesCategory = () => {
  return (
    <Styled.Root>
      <div>series</div>
    </Styled.Root>
  );
};

export default SeriesCategory;

const Styled = {
  Root: styled.div`
    background-color: ${colors.mainWhite};
  `,
};
