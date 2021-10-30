import React from "react";
import styled from "styled-components";

const ArticleTitle = ({ setArticleData }) => {
  // const handleChange = (e) => {
  //   const tempData = { ...articleData };
  //   tempData.title = e.target.value;
  //   setArticleData(tempData);
  // };
  return (
    <StyledTextarea
      placeholder="제목을 입력하세요."
      onChange={(e) =>
        setArticleData((articleData) => ({
          ...articleData,
          title: e.target.value,
        }))
      }
      // onChange={handleChange}
    />
  );
};

export default ArticleTitle;

const StyledTextarea = styled.textarea`
  font-size: 36px;
`;
