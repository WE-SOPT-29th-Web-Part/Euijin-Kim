import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ArticleResponse } from "types";
import { client } from "../../libs/api";
import { colors } from "../../libs/constants/colors";

interface Props {
  article: ArticleResponse;
}

const ArticleOption = ({ article }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await client.delete(`article/${article.id}`);
    navigate("/");
  };

  return (
    <StyledRoot>
      <button>통계</button>
      <button
        onClick={() =>
          navigate(`/article/edit/${article.id}`, {
            state: article,
          })
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
