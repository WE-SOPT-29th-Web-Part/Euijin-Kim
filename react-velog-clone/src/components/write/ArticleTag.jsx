import React, { useRef } from "react";
import styled from "styled-components";

const ArticleTag = ({ tagArr, setTagArr }) => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      if (e.target.value == "" || tagArr.includes(e.target.value)) {
        inputRef.current.value = "";
        return;
      }
      setTagArr([...tagArr, e.target.value]);
      inputRef.current.value = "";
    }
  };
  return (
    <Styled.Root>
      {tagArr && tagArr.map((tag) => <span key={tag}>{tag}</span>)}
      <input
        class="input"
        type="text"
        placeholder="태그를 입력하세요."
        onKeyPress={handleSubmit}
        ref={inputRef}
      />
    </Styled.Root>
  );
};

export default ArticleTag;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-wrap: wrap;
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
      background-color: rgb(241, 243, 245);
      color: rgb(12, 166, 120);
      border-radius: 16px;
      cursor: pointer;
    }
  `,
};
