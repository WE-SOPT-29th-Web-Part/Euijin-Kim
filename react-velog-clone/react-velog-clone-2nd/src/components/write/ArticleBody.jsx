import React from "react";
import styled from "styled-components";

const ArticleBody = ({ setArticleData }) => {
  return (
    <StyledTextarea
      onChange={(e) =>
        setArticleData((articleData) => ({
          ...articleData,
          body: e.target.value,
        }))
      }
    ></StyledTextarea>
  );
};

export default ArticleBody;

const StyledTextarea = styled.textarea``;
