import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const ArticleTitle = ({ handleDataChange }) => {
  return (
    <Styled.Textarea
      placeholder="제목을 입력하세요."
      onChange={(e) => handleDataChange(e, "title")}
    />
  );
};

export default ArticleTitle;

const Styled = {
  Textarea: styled(TextareaAutosize)`
    /* react-textarea-autosize library 사용 */
    font-size: 36px;

    width: 100%;
    white-space: pre-wrap;
    height: auto;
  `,
};
