import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { client } from "../../libs/api";
import { colors } from "../../libs/constants/colors";

const ArticleOption = ({ id, article }) => {
  const history = useHistory();

  const handleDelete = async () => {
    await client.delete(`article/${id}`);
    history.push("/");
  };

  return (
    <StyledRoot>
      <button>통계</button>
      <button
        onClick={() =>
          history.push({ pathname: `/article/edit/${id}`, state: { article } })
        }
      >
        수정
      </button>
      <button onClick={handleDelete}>삭제</button>
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
