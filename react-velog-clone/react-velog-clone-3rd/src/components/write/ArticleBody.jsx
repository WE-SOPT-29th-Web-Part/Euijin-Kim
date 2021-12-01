import React from "react";

const ArticleBody = ({ onDataChange }) => {
  return <textarea onChange={(e) => onDataChange("body", e.target.value)} />;
};

export default ArticleBody;
