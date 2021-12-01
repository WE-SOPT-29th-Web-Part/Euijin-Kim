import React from "react";
import styled from "styled-components";
import { StyledTag } from "../home/ArticleCard";

const ArticleTag = ({ tags, handleArrDataChange, handleArrDataRemove }) => {
  const handleSubmit = (e) => {
    if (e.key === "," || e.key === "Enter") {
      if (e.target.value === "" || tags.includes(e.target.value)) {
        // 빈값은 태그로 만들지 않고, 중복된 값도 태그로 만들지 않고
        e.target.value = "";
        return;
      }
      handleArrDataChange("tags", e.target.value);
      e.target.value = "";
    }
  };

  return (
    <StyledRoot>
      <StyledTag>
        {tags &&
          tags.map((tag) => (
            <span key={tag} onClick={(e) => handleArrDataRemove("tags", tag)}>
              {tag}
            </span>
          ))}
      </StyledTag>
      <input
        type="text"
        placeholder="태그를 입력하세요."
        onKeyPress={handleSubmit}
      />
    </StyledRoot>
  );
};

export default ArticleTag;

const StyledRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 18px;
  input {
    outline: none;
    border: none;
    width: 200px;
    font-size: 18px;
    margin-bottom: 12px;
  }
`;
