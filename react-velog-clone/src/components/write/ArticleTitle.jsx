import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const ArticleTitle = () => {
  return <Styled.Textarea placeholder="제목을 입력하세요."></Styled.Textarea>;
};

export default ArticleTitle;

const Styled = {
  Textarea: styled(TextareaAutosize)`
    /* react-textarea-autosize library 사용 */
    border: 0;
    outline: 0;
    resize: none;
    font-size: 36px;

    width: 50%;
    white-space: pre-wrap;
    height: auto;
  `,
};
