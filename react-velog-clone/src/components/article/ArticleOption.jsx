import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const ArticleOption = ({ id, article }) => {
  console.log(`article`, article);
  return (
    <StyledRoot>
      <button>통계</button>
      <Link to={{ pathname: `/article/edit/${id}`, state: { article } }}>
        <button>수정</button>
      </Link>
      <button>삭제</button>
    </StyledRoot>
  );
};

export default ArticleOption;

const StyledRoot = styled.div`
  text-align: right;

  & > button {
    font-size: 16px;
    color: ${colors.dateGray};
    background-color: ${colors.mainWhite};
  }
  & > button + button {
    margin-left: 8px;
  }
`;
