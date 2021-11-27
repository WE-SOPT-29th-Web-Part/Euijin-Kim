import React from "react";

const ArticleTitle = ({ onDataChange }) => {
  return (
    <textarea
      placeholder="제목을 입력하세요."
      onChange={(e) => onDataChange("title", e.target.value)}
    ></textarea>
  );
};

export default ArticleTitle;
