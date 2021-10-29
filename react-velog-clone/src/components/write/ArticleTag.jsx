import React, { useRef } from "react";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const ArticleTag = ({ tags, handleArrDataChange, handleArrDataRemove }) => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    if (e.key === "," || e.key === "Enter") {
      if (e.target.value === "" || tags.includes(e.target.value)) {
        // 빈값은 태그로 만들지 않고, 중복된 값도 태그로 만들지 않고
        inputRef.current.value = "";
        return;
      }
      handleArrDataChange("tags", e.target.value);
      inputRef.current.value = "";
    }
  };

  return (
    <StyledRoot>
      {tags &&
        tags.map((tag) => (
          <span
            key={tag}
            onClick={(e) => handleArrDataRemove("tags", e.target.innerText)}
          >
            {tag}
          </span>
        ))}
      <input
        type="text"
        placeholder="태그를 입력하세요."
        onKeyPress={handleSubmit}
        ref={inputRef}
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
  span {
    display: inline-block;
    padding: 0 16px;
    height: 32px;
    line-height: 32px;
    margin: 0 12px 12px 0;
    background-color: ${colors.tagGray};
    color: ${colors.subGreen};
    border-radius: 16px;
    cursor: pointer;
  }
`;
