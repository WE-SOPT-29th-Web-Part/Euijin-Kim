import React from "react";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const ArticleOption = () => {
  return (
    <StyledRoot>
      <button>통계</button>
      <button>수정</button>
      <button>삭제</button>
    </StyledRoot>
  );
};

export default ArticleOption;

const StyledRoot = styled.div`
  text-align: right;
  background-color: ${colors.mainWhite};
  & > button {
    font-size: 16px;
    color: ${colors.dateGray};
  }
  & > button + button {
    margin-left: 8px;
  }
`;
