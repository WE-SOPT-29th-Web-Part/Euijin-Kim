import React from "react";

const ArticleBody = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData, // id, body, summary, 프러포티를 펼쳐줌, spread연산자
      body: e.target.value, // 펼친 녀석들중 title의 value를 e.target.value로 바꿔줄게
    }));
  };
  return <textarea onChange={handleChange} />;
};

export default ArticleBody;
