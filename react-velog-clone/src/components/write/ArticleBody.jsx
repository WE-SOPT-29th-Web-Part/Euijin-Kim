import React from "react";
import styled from "styled-components";

const ArticleBody = ({ handleDataChange }) => {
  return (
    <Styled.Textarea
      placeholder="당신의 이야기를 적어보세요..."
      onChange={(e) => handleDataChange(e.target.value, "body")}
    ></Styled.Textarea>
  );
};

export default ArticleBody;

const Styled = {
  Textarea: styled.textarea`
    flex: 1;
    width: 50%;
    white-space: pre-wrap;
    padding: 0 48px;
    font-size: 18px;
  `,
};
