import React, { useRef } from "react";
import styled from "styled-components";

const ArticleTag = ({ tags, articleData, setArticleData }) => {
  const inputRef = useRef(null);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const tempData = { ...articleData };
      tempData.tags = [...tempData.tags, e.target.value];
      setArticleData(tempData);

      // setArticleData((articleData) => ({
      //   ...articleData,
      //   tags: [...articleData.tags, e.target.value],
      // }));
      // 비동기 - 시간 있으면 설명하기
      e.target.value = "";
    }
  };

  return (
    <StyledRoot>
      <div>{tags && tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <input type="text" ref={inputRef} onKeyPress={handleKeyPress} />
    </StyledRoot>
  );
};

export default ArticleTag;

const StyledRoot = styled.div``;
