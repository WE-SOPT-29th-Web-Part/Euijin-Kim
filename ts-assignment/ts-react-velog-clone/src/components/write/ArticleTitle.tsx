import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { dataHandlerType } from "./types";

interface Props {
  handleDataChange: dataHandlerType;
  title: string;
}

const ArticleTitle = ({ handleDataChange, title }: Props) => {
  return (
    <StyledTextarea
      placeholder="제목을 입력하세요."
      value={title}
      onChange={(e) => handleDataChange("title", e.target.value)}
    />
  );
};

export default ArticleTitle;

const StyledTextarea = styled(TextareaAutosize)`
  /* react-textarea-autosize library 사용 */
  font-size: 36px;
  width: 100%;
  white-space: pre-wrap;
  height: auto;
`;
